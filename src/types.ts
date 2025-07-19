import type { Linter } from "eslint";

export interface TypescriptOptions {
  tsconfigRootDir?: string;
  project?: string | string[];
}

export interface Options {
  platform: "node" | "react";
  style: "stylistic" | "prettier";
  useImport?: boolean;
  overrides?: Linter.Config[];
  ignores?: string[];
  typescript?: TypescriptOptions;
}
