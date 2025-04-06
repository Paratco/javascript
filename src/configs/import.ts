import eslintPluginImportX from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import unusedImports from "eslint-plugin-unused-imports";

// Custom Rules
import importXRules from "../rules/import.js";

export default [
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  // ESLint Plugin Import
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "unused-imports": unusedImports
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true
        })
      ]
    },
    rules: {
      ...importXRules,

      // unused-imports
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": ["off"],
      "unused-imports/no-unused-imports": ["error"],
      "unused-imports/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ]
    }
  }
];
