import globals from "globals";
import baseConfig from "./base.js";

// Plugins
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

// Custom Rules
import reactRules from "../lints/react/index.js";

export default [
  ...baseConfig,

  // Browser Only
  { languageOptions: { globals: globals.browser } },

  // Enable JSX
  { files: ["**/*.tsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },

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
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    }
  }
];
