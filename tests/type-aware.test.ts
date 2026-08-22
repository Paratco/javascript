import { describe, expect, test } from "bun:test";
import { ESLint } from "eslint";
import { build, PLATFORMS } from "./support";

/**
 * The other tests assert a config *validates*. This one asserts it actually
 * *runs*: a rule that needs type information has to fire, which only happens if
 * the parser, the TypeScript program and the rule all wired up correctly.
 *
 * Both files must be inside tsconfig.json's `include`, or they are not in the
 * TypeScript program: type-aware rules then report nothing at all and these
 * assertions pass vacuously.
 *
 * The violation lives in a real fixture file rather than being passed as text
 * to `lintText`. Supplying text for a path whose on-disk content differs makes
 * the result depend on whether an earlier test already cached a program for
 * this tsconfig -- that passed locally and failed in CI, where only the
 * non-type-aware rules reported. Linting a file from disk has no such
 * ambiguity.
 */
const FIXTURE_FILE = "tests/fixtures/type-aware.ts";
const CLEAN_PROJECT_FILE = "src/globs.ts";

describe("type-aware linting works end to end", () => {
  for (const platform of PLATFORMS) {
    test(`${platform} runs rules that require type information`, async () => {
      const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: build({ platform }) });
      const results = await eslint.lintFiles([FIXTURE_FILE]);
      const [result] = results;

      expect(results).toHaveLength(1);
      expect(result.messages.filter((message) => message.fatal === true)).toHaveLength(0);

      // await-thenable is type-aware: it cannot report without a TS program
      const fired = result.messages.map((message) => message.ruleId);

      expect(fired).toContain("@typescript-eslint/await-thenable");
    });
  }

  test("a clean project file produces no errors", async () => {
    const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: build() });
    const results = await eslint.lintFiles([CLEAN_PROJECT_FILE]);
    const [result] = results;

    expect(results).toHaveLength(1);
    expect(result.errorCount).toBe(0);
    expect(result.messages.filter((message) => message.fatal === true)).toHaveLength(0);
  });
});
