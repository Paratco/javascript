import eslintJS from "@eslint/js";
import { configs as eslintTSConfigs } from "typescript-eslint";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

// Custom Rules
import type { Linter } from "eslint";
import javascriptRules from "../rules/javascript";
import typescriptRules from "../rules/typescript";
import unicornRules from "../rules/unicorn";
import { ALL_FILES, TS_FILES } from "../globs";

export default [
  eslintJS.configs.recommended,
  ...eslintTSConfigs.strictTypeChecked,
  ...eslintTSConfigs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,

  // JavaScript Rules
  {
    files: ALL_FILES,
    rules: javascriptRules
  },

  // TypeScript Rules
  {
    files: TS_FILES,
    rules: typescriptRules
  },

  // Unicorn Rules
  {
    files: ALL_FILES,
    rules: unicornRules
  }
] as Linter.Config[];
