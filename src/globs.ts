/**
 * File globs shared by every config block.
 *
 * These must stay in sync. `languageOptions` (which carries
 * `parserOptions.project`) and the type-aware rule blocks are matched
 * separately, so any extension covered by one but not the other makes ESLint
 * crash on that file with:
 *
 *   Error while loading rule '@typescript-eslint/await-thenable': You have used
 *   a rule which requires type information, but don't have parserOptions set to
 *   generate type information for this file.
 *
 * Import these instead of writing the globs inline, so they cannot drift apart
 * again. See tests/file-extensions.test.ts.
 */

/** Every JavaScript and TypeScript extension this config supports. */
export const ALL_FILES = ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"];

/** The TypeScript-only subset, for rules that make no sense in plain JS. */
export const TS_FILES = ["**/*.{ts,mts,cts,tsx}"];
