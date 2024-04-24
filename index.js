import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

// Plugins
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";

// Custom Rules
import typescriptRules from "./lints/typescript/index.js";
import reactRules from "./lints/react/index.js";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // TypeScript Rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...typescriptRules
    }
  },

  // React Plugin
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...reactRules,
      // ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Enforce Rules of Hooks
      "react-hooks/rules-of-hooks": ["error"],
      // Verify the list of the dependencies for Hooks like useEffect and similar
      "react-hooks/exhaustive-deps": ["error"],

      // React Refresh
      "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }]
    }
  },

  {
    ignores: ["lints"]
  },

  eslintConfigPrettier
);
