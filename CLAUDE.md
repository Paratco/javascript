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
- **`tests/support.ts`** — shared helpers. `resolveRules()` asks ESLint itself (`calculateConfigForFile`) to resolve a config for a path rather than merging `rules` blocks by hand, so `files` scoping and block order are handled by the real implementation. It returns `{}` when the path matches no block.

Type-aware rules cannot be exercised through `Linter` — there is no TS program, so it reports *"that TSConfig does not include this file"*. Tests that need rules to actually **fire** (rather than just validate) require fixture files on disk under their own tsconfig, driven through the `ESLint` class. That layer does not exist yet.

## Architecture

### Composition flow (`src/index.ts`)
`createConfig(opt: Options)` (see `src/types.ts` for `Options`) builds the array imperatively:
1. Pick a platform base — `configs/node` (which just re-exports `configs/base`) or `configs/react`.
2. Append a per-platform `languageOptions` block from the `node()` / `react()` helpers (globals + `parserOptions.project`/`tsconfigRootDir` for type-aware linting; React also sets `ecmaFeatures.jsx`).
3. If `useImport`, append `configs/import` (import-x + resolver wired to the caller's tsconfig).
4. Append the formatter: `configs/stylisticFormatter` or `configs/prettierFormatter`.
5. Append `overrides`, then `ignores`.
6. If `opt.files` is set, wrap everything in `eslint`'s `defineConfig({ files, extends })` so all rules/plugins are scoped to those globs (used for monorepos / multi-tsconfig apps).

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
