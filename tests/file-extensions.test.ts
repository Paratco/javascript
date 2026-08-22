import { describe, expect, test } from "bun:test";
import { Linter } from "eslint";
import { build, PLATFORMS, STYLES } from "./support";

/**
 * Regression test for the languageOptions/rules glob mismatch.
 *
 * `parserOptions.project` is attached by a `languageOptions` block, while the
 * type-aware rules come from separate blocks with their own globs. When those
 * two sets disagree, every file in the gap makes ESLint throw
 * "You have used a rule which requires type information, but don't have
 * parserOptions set to generate type information for this file" — which takes
 * down the whole lint run, not just that file.
 *
 * Before src/globs.ts centralised the globs, the node platform threw on .mjs,
 * .cjs, .jsx, .tsx, .mts and .cts, and react threw on .mts and .cts.
 */
const EXTENSIONS = ["ts", "tsx", "mts", "cts", "js", "jsx", "mjs", "cjs"] as const;

describe("every supported extension gets parserOptions", () => {
  for (const platform of PLATFORMS) {
    for (const style of STYLES) {
      for (const extension of EXTENSIONS) {
        test(`${platform} / ${style} / .${extension}`, () => {
          const config = build({ platform, style });
          const linter = new Linter({ configType: "flat" });

          expect(() => {
            linter.verify("export const value = 1;\n", config, `src/sample.${extension}`);
          }).not.toThrow();
        });
      }
    }
  }
});
