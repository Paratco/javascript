import eslintPluginImportX from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";

// Custom Rules
import importXRules from "../lints/import/index.js";

export default [
  // ESLint Plugin Import
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "import-x": eslintPluginImportX,
      "unused-imports": unusedImports
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
      ...importXRules,

      // unused-imports
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": ["off"],
      "unused-imports/no-unused-imports": ["error"],
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ]
    }
  }
];
