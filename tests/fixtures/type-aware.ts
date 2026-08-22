// Fixture for tests/type-aware.test.ts. Intentionally violates a type-aware
// rule (@typescript-eslint/await-thenable): awaiting a non-thenable can only be
// detected with type information, so a rule reporting here proves the parser,
// the TypeScript program and the rule are all wired up.
//
// Excluded from the repo's own lint run via eslint.config.ts `ignores`. It must
// stay inside tsconfig.json's `include` so it is part of the program.
export async function awaitsANonThenable(): Promise<number> {
  return await 1;
}
