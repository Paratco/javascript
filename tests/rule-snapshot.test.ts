import { describe, expect, test } from "bun:test";
import { build, enabledRules, PLATFORMS, resolveRules, STYLES } from "./support";

/**
 * Locks in the effective rule set each option combination produces.
 *
 * The point is the diff, not the contents: bumping a plugin can silently enable,
 * disable, or re-severity dozens of rules for every consumer of this package
 * (eslint-plugin-unicorn 68 -> 73 added 29 error-level rules to `recommended`).
 * A failing snapshot here is not necessarily a bug — it is a change that has to
 * be looked at and then accepted with `bun test --update-snapshots`.
 */
describe("effective rule set", () => {
  for (const platform of PLATFORMS) {
    for (const style of STYLES) {
      test(`${platform} / ${style}`, async () => {
        const config = build({ platform, style });
        const filePath = platform === "react" ? "src/sample.tsx" : "src/sample.ts";
        const rules = await resolveRules(config, filePath);

        expect(enabledRules(rules)).toMatchSnapshot();
      });
    }
  }
});
