import js from "@eslint/js";
import tsEslint from "typescript-eslint";

// Custom Rules
import javascriptRules from "../rules/javascript.js";
import typescriptRules from "../rules/typescript.js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },

  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,

  // JavaScript Rules
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: javascriptRules
  },

  // TypeScript Rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: typescriptRules
  }
];
