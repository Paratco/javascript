import { describe, expect, test } from "bun:test";
import { Linter } from "eslint";
import type { Linter as LinterTypes } from "eslint";
import { build, PLATFORMS, STYLES } from "./support";

/**
 * `createConfig` is heavily cast, so `tsc` cannot see whether a rule id exists
 * or whether its options match the plugin's schema. ESLint validates both when
 * a flat config is first used, and throws — so "does not throw" is the check.
 */
function verifyWith(config: LinterTypes.Config[], filePath: string): void {
  const linter = new Linter({ configType: "flat" });

  linter.verify("export const value = 1;\n", config, filePath);
}

describe("generated config is valid", () => {
  for (const platform of PLATFORMS) {
    for (const style of STYLES) {
      for (const useImport of [true, false]) {
        test(`${platform} / ${style} / useImport=${String(useImport)}`, () => {
          const config = build({ platform, style, useImport });
          const filePath = platform === "react" ? "src/sample.tsx" : "src/sample.ts";

          expect(() => {
            verifyWith(config, filePath);
          }).not.toThrow();
        });
      }
    }
  }

  test("with files scoping", () => {
    const config = build({ files: ["apps/web/**/*.ts"] });

    expect(() => {
      verifyWith(config, "apps/web/sample.ts");
    }).not.toThrow();
  });

  test("with overrides and ignores", () => {
    const config = build({
      overrides: [{ files: ["**/*.ts"], rules: { "no-console": "error" } }],
      ignores: ["dist"]
    });

    expect(() => {
      verifyWith(config, "src/sample.ts");
    }).not.toThrow();
  });
});

/**
 * Negative controls. If ESLint ever stops throwing on these, the tests above
 * are worthless and would pass no matter what the config contained.
 */
describe("validation actually catches broken config", () => {
  const cases: [string, LinterTypes.RulesRecord][] = [
    ["unknown rule id", { "unicorn/does-not-exist": "error" }],
    ["unknown rule option", { "unicorn/catch-error-name": ["error", { nope: 1 }] }],
    ["invalid severity", { "unicorn/catch-error-name": "shout" as unknown as LinterTypes.RuleEntry }]
  ];

  for (const [name, rules] of cases) {
    test(name, () => {
      const config = [...build(), { files: ["**/*.ts"], rules }];

      expect(() => {
        verifyWith(config, "src/sample.ts");
      }).toThrow();
    });
  }
});
