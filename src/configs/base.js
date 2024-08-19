import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";

// Custom Rules
import javascriptRules from "../lints/javascript/index.js";
import typescriptRules from "../lints/typescript/index.js";

export default [
  // Set predefined configs
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,

  // JavaScript Rules
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    rules: javascriptRules
  },

  // TypeScript Rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: typescriptRules
  }
];
