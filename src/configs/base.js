import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// Custom Rules
import typescriptRules from "../lints/typescript/index.js";

export default [
  // Set predefined configs
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // TypeScript Rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: typescriptRules
  }
];
