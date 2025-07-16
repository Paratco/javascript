#!/usr/bin/env node

import path from "node:path";
import { writeFileSync, existsSync } from "node:fs";
import migrate from "@oxlint/migrate";
import type { Linter } from "eslint";

let resolvedPath: string | undefined;

if (existsSync("eslint.config.ts")) {
  resolvedPath = path.resolve("eslint.config.ts");
} else if (existsSync("eslint.config.js")) {
  resolvedPath = path.resolve("eslint.config.js");
} else if (existsSync("eslint.config.mjs")) {
  resolvedPath = path.resolve("eslint.config.mjs");
} else if (existsSync("eslint.config.cjs")) {
  resolvedPath = path.resolve("eslint.config.cjs");
} else {
  throw new Error("No eslint config file found!");
}

const importedEslint = await import(`file:${resolvedPath}`) as Record<string, unknown>;
const configs = importedEslint.default as Linter.Config[];

const oxLintConfigs = await migrate(configs);

writeFileSync(".oxlintrc.json", JSON.stringify(oxLintConfigs, null, 2));

console.log("Done!");
