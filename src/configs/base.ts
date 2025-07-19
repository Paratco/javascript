import eslintJS from "@eslint/js";
import { configs as eslintTSConfigs } from "typescript-eslint";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

// Custom Rules
import type { Linter } from "eslint";
import javascriptRules from "../rules/javascript";
import typescriptRules from "../rules/typescript";
import unicornRules from "../rules/unicorn";

export default [
  eslintJS.configs.recommended,
  ...eslintTSConfigs.strictTypeChecked,
  ...eslintTSConfigs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,

  // JavaScript Rules
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: javascriptRules
  },

  // TypeScript Rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: typescriptRules
  },

  // Unicorn Rules
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: unicornRules
  }
] as Linter.Config[];
