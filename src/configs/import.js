import eslintPluginImportX from "eslint-plugin-import-x";

// Custom Rules
import importXRules from "../lints/import/index.js";

export default [
  // ESLint Plugin Import
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "import-x": eslintPluginImportX
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true
        }
      }
    },
    rules: {
      ...eslintPluginImportX.configs.recommended.rules,
      ...importXRules
    }
  }
];
