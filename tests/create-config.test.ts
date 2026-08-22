import { describe, expect, test } from "bun:test";
import { build, resolveRules, severityOf } from "./support";

describe("useImport", () => {
  test("adds import-x rules when enabled", async () => {
    const rules = await resolveRules(build({ useImport: true }), "src/sample.ts");

    expect(Object.keys(rules).some((id) => id.startsWith("import-x/"))).toBe(true);
  });

  test("omits import-x rules when disabled", async () => {
    const rules = await resolveRules(build({ useImport: false }), "src/sample.ts");

    expect(Object.keys(rules).some((id) => id.startsWith("import-x/"))).toBe(false);
  });
});

describe("files scoping", () => {
  test("applies rules inside the globs and not outside them", async () => {
    const config = build({ files: ["apps/web/**/*.ts"] });

    const inside = await resolveRules(config, "apps/web/sample.ts");
    const outside = await resolveRules(config, "packages/api/sample.ts");

    expect(Object.keys(inside).length).toBeGreaterThan(0);
    expect(Object.keys(outside)).toHaveLength(0);
  });

  test("applies everywhere when no globs are given", async () => {
    const rules = await resolveRules(build(), "packages/api/sample.ts");

    expect(Object.keys(rules).length).toBeGreaterThan(0);
  });
});

describe("overrides", () => {
  test("win over the base config", async () => {
    const config = build({
      overrides: [{ files: ["**/*.ts"], rules: { "unicorn/no-null": "error" } }]
    });
    const rules = await resolveRules(config, "src/sample.ts");

    // rules/unicorn.ts turns this off; the override must come out on top
    const entry = rules["unicorn/no-null"];

    expect(entry).toBeDefined();
    expect(entry === undefined ? undefined : severityOf(entry)).toBe("error");
  });
});

describe("ignores", () => {
  test("are appended as a global ignores block", () => {
    const config = build({ ignores: ["dist", "coverage"] });
    const ignoreBlocks = config.filter((block) => block.ignores !== undefined && block.files === undefined);

    expect(ignoreBlocks.at(-1)?.ignores).toEqual(["dist", "coverage"]);
  });
});

describe("react platform", () => {
  test("enables jsx parsing and react rules", async () => {
    const rules = await resolveRules(build({ platform: "react" }), "src/sample.tsx");

    expect(Object.keys(rules).some((id) => id.startsWith("react-hooks/"))).toBe(true);
  });

  test("node platform has no react rules", async () => {
    const rules = await resolveRules(build({ platform: "node" }), "src/sample.ts");

    expect(Object.keys(rules).some((id) => id.startsWith("react-hooks/"))).toBe(false);
  });
});
