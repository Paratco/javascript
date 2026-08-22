import { ESLint } from "eslint";
import type { Linter } from "eslint";
import { createConfig } from "../src";
import type { Options } from "../src/types";

export const PLATFORMS = ["node", "react"] as const;

export const STYLES = ["stylistic", "prettier"] as const;

/**
 * Build a config with the defaults most tests want, overridable per case.
 * `tsconfigRootDir` is the repo root so type-aware rules resolve the same way
 * a consumer's would.
 */
export function build(overrides: Partial<Options> = {}): Linter.Config[] {
  return createConfig({
    platform: "node",
    style: "stylistic",
    useImport: true,
    typescript: { project: "tsconfig.json", tsconfigRootDir: process.cwd() },
    ...overrides
  });
}

/**
 * Ask ESLint itself to resolve the config for a path, rather than merging the
 * `rules` blocks by hand — `files` scoping and block order are then handled by
 * the real implementation. The path does not need to exist on disk.
 */
export async function resolveRules(config: Linter.Config[], filePath: string): Promise<Partial<Linter.RulesRecord>> {
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: config });

  // Returns undefined when the path matches no config block at all, which is
  // what `files` scoping produces for paths outside its globs.
  const resolved = (await eslint.calculateConfigForFile(filePath)) as Linter.Config | undefined;

  return resolved?.rules ?? {};
}

export function severityOf(entry: Linter.RuleEntry): "off" | "warn" | "error" {
  const raw = Array.isArray(entry) ? entry[0] : entry;

  if (raw === 0 || raw === "off") {
    return "off";
  }

  if (raw === 1 || raw === "warn") {
    return "warn";
  }

  return "error";
}

/**
 * Only the rules that actually do something, as `id: severity` lines.
 *
 * Presets carry hundreds of explicitly-off rules; including them would bury the
 * signal we care about (a rule turning on, off, or changing severity) under
 * noise on every snapshot diff.
 */
export function enabledRules(rules: Partial<Linter.RulesRecord>): string[] {
  return Object.entries(rules)
    .filter((entry): entry is [string, Linter.RuleEntry] => entry[1] !== undefined)
    .map(([id, entry]) => [id, severityOf(entry)] as const)
    .filter(([, severity]) => severity !== "off")
    .map(([id, severity]) => `${id}: ${severity}`)
    .toSorted((a, b) => a.localeCompare(b));
}
