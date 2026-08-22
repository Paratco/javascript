# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@paratco/eslint-config` — a publishable, **ESM-only** shareable ESLint **flat config** package. It exports a single function, `createConfig(opt)`, that assembles and returns an array of flat-config objects (`Linter.Config[]`) tailored by the caller's options.

The package manager is **Bun**. The build is **Bun (for JS) + `tsc` (for `.d.ts`)** — Bun's bundler cannot emit declarations.

## Commands

```bash
bun install                 # install deps (CI uses --frozen-lockfile)
bun run lint                # eslint --max-warnings=0 (dogfoods this config via eslint.config.ts)
bun run lint:fix            # eslint --fix
bun run build:check         # tsc --noEmit — the type-check gate
bun run build               # clean + build:js (bun) + build:types (tsc) -> dist/
bun test                    # tests/*.test.ts (no package.json script — CI calls `bun test` directly)
```

### Tests

`bun test` (Bun's built-in runner, no extra dependency) runs `tests/*.test.ts`. There is deliberately **no `test` script in `package.json`** — the workflows call `bun test` directly. `tsconfig.json` includes `tests`, so `build:check` and `lint` cover them too; `tsconfig.build.json` does not, so they never reach `dist/`.

- **`tests/config-validity.test.ts`** — builds every option combination and runs it through ESLint's `Linter` with `configType: "flat"`. ESLint validates rule ids and option schemas on first use and *throws*, so "does not throw" is the assertion. This is the main defence against config bugs `tsc` cannot see, because the config is heavily cast (`as unknown as ...`). The file ends with negative controls (unknown rule id, bad rule option, invalid severity) that assert ESLint really does throw — without them the suite would pass on any config at all.
- **`tests/rule-snapshot.test.ts`** — snapshots the effective *enabled* rule set (`id: severity`, off-rules excluded as noise) per platform/style. A plugin bump that silently enables, disables, or re-severities rules for consumers shows up here as a reviewable diff. A failure is not automatically a bug: read the diff, then accept it with `bun test --update-snapshots`.
- **`tests/create-config.test.ts`** — option behaviour: `useImport` toggling, `files` scoping, `overrides` precedence, `ignores` placement, platform-specific plugins.
- **`tests/file-extensions.test.ts`** — every platform/style against every supported extension. Regression test for the `languageOptions`/rules glob mismatch that made ESLint throw on `.mjs`/`.cjs`/`.mts`/`.cts` (see `src/globs.ts`).
- **`tests/type-aware.test.ts`** — asserts the config actually *runs*, not just validates: a type-aware rule (`@typescript-eslint/await-thenable`) has to fire against `tests/fixtures/type-aware.ts`, which only happens if parser, TS program and rule all wired up.
- **`tests/support.ts`** — shared helpers. `resolveRules()` asks ESLint itself (`calculateConfigForFile`) to resolve a config for a path rather than merging `rules` blocks by hand, so `files` scoping and block order are handled by the real implementation. It returns `{}` when the path matches no block.

Two traps when writing tests here:

- **`Linter` never throws on a bad file path.** A path the tsconfig does not include comes back as a fatal *message* (`"Parsing error: ...does not include this file"`), not an exception. So `expect(...).not.toThrow()` tests config validity only — which is what they are for. Always pair them with negative controls, or they pass against any config at all.
- **Making a type-aware rule fire needs a real file inside the tsconfig.** Lint it from disk with `ESLint#lintFiles` (see `tests/type-aware.test.ts` and its fixture). A path outside the program is silently skipped and reports *nothing*, which reads as a passing test. Do **not** use `lintText` with a `filePath` whose on-disk content differs from the text you pass: whether type-aware rules fire then depends on whether an earlier test already cached a program for that tsconfig, which passes locally and fails in CI.
- **`tests/fixtures/` holds files that break rules on purpose.** They are in `tsconfig.json`'s `include` (so they are part of the program) but in `eslint.config.ts`'s `ignores` (so `bun run lint` skips them). A fixture that stops violating its rule silently guts the test — check a change to one still fails the suite.

Still missing: a fixpoint test (`verifyAndFix` output is stable / no `ESLintCircularFixesWarning`), which would catch mutually-contradictory fixable rules like the `lines-between-class-members` vs `lines-around-comment` conflict.

## Architecture

### Composition flow (`src/index.ts`)
`createConfig(opt: Options)` (see `src/types.ts` for `Options`) builds the array imperatively:
1. Pick a platform base — `configs/node` (which just re-exports `configs/base`) or `configs/react`.
2. Append a per-platform `languageOptions` block from the `node()` / `react()` helpers (globals + `parserOptions.project`/`tsconfigRootDir` for type-aware linting; React also sets `ecmaFeatures.jsx`).
3. If `useImport`, append `configs/import` (import-x + resolver wired to the caller's tsconfig).
4. Append the formatter: `configs/stylisticFormatter` or `configs/prettierFormatter`.
5. Append `overrides`, then `ignores`.
6. If `opt.files` is set, wrap everything in `eslint`'s `defineConfig({ files, extends })` so all rules/plugins are scoped to those globs (used for monorepos / multi-tsconfig apps).

### File globs live in `src/globs.ts`
`ALL_FILES` / `TS_FILES` are the single source of truth for which extensions the config applies to. They must be imported, never written inline: `languageOptions` (carrying `parserOptions.project`) and the type-aware rule blocks are matched by separate globs, and any extension covered by one but not the other makes ESLint **crash the entire run** with *"You have used a rule which requires type information..."*. Six inline literals had already drifted into four different sets before this was centralised.

### Two-layer convention: `configs/` vs `rules/`
- **`src/configs/*`** are flat-config *blocks* (plugins, settings, `files`, `languageOptions`). They compose plugins.
- **`src/rules/*`** are plain rule-record maps (`{ "rule-id": [...] }`) — the curated source of truth for *which rules are on and at what severity*.

Critical pattern: a config block spreads a preset for its **plugins/settings/parser only**, then **fully overrides `rules`** with the matching `rules/*` map. So the preset's own rule selections are intentionally discarded — e.g. `configs/react.ts` spreads `@eslint-react`'s `recommended-typescript` (for the plugin + `react-x` settings) but the actual enabled rules come from `rules/react.ts`. When adding/removing a rule, edit the `rules/*` file, not the preset.

`configs/base.ts` is the shared foundation for both platforms: `@eslint/js` recommended + typescript-eslint `strictTypeChecked` + `stylisticTypeChecked` + unicorn recommended, then layered overrides from `rules/javascript.ts`, `rules/typescript.ts`, `rules/unicorn.ts`. Because typescript-eslint type-checked configs are included, **the config requires type information** — callers must pass `typescript.project`.

### `rules/react_kit.ts` is special
It defines custom React lint rules using the `@eslint-react/kit` builder and exports a **full flat config object** (`{ name, files, plugins, rules }`), not a rule map. It is therefore added as its **own array entry** in `configs/react.ts` — never spread into a `rules: {}` block (doing so turns `name`/`plugins`/etc. into bogus rule entries and crashes config loading). Its default export is annotated `: Linter.Config` because `tsc`'s declaration emit needs an explicit, portable type there.

### Build & packaging
- ESM-only: `package.json` `exports` is `{ types, import }` (no CJS — `@eslint-react` is ESM-only, so a `require()` entry cannot work).
- `build:js` uses `bun build ... --outdir=dist --format=esm --packages=external`. Use `--outdir`, **not `--outfile`** — `--outfile` is buggy on Windows (writes into the entry's `src/` dir).
- `build:types` runs `tsc -p tsconfig.build.json`, which emits declarations only (`rootDir: src`, `outDir: dist`). `tsconfig.json` is for editor/type-checking and includes `eslint.config.ts`.

### Releases
`semantic-release` (config in `.releaserc.json`), driven by Conventional Commits, run from `.github/workflows/release.yml`. `analyze.yml` runs lint + type-check + build on PRs. Note the custom release rule: commit type `update` → `patch` release (used for dependency bumps).
