import globals from "globals";
import baseConfig from "./base.js";

// Plugins
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

// Custom Rules
import reactRules from "../rules/react.js";

export default [
  ...baseConfig,

  // Browser Only
  { languageOptions: { globals: globals.browser } },

  // Enable JSX
  { files: ["**/*.tsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },

  // React Plugin
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin
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
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    rules: {
      ...reactRules,
      // ...react.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // Enforce Rules of Hooks
      "react-hooks/rules-of-hooks": ["error"],
      // Verify the list of the dependencies for Hooks like useEffect and similar
      "react-hooks/exhaustive-deps": ["error"],

      // React Refresh
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    }
  }
];
