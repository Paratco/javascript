import eslintPluginImport from "eslint-plugin-import";

// Custom Rules
import importRules from "../lints/import/index.js";

export default [
  // ESLint Plugin Import
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      import: eslintPluginImport
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true
        }
      }
    },
    rules: {
      ...eslintPluginImport.configs.recommended.rules,
      ...importRules
    }
  }
];
