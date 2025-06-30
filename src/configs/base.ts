import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

// Custom Rules
import javascriptRules from "../rules/javascript.js";
import typescriptRules from "../rules/typescript.js";
import unicornRules from "../rules/unicorn.js";

export default [
  // Set predefined configs
  eslint.configs.recommended,
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
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
];
