import stylistic from "@stylistic/eslint-plugin";

// Custom Rules
import stylisticRules from "../rules/stylistic.js";

export default [
  // Stylistic Configs
  stylistic.configs.customize({
    jsx: true,
    arrowParens: true,
    blockSpacing: true,
    braceStyle: "stroustrup",
    commaDangle: "never",
    indent: 2,
    semi: true,
    quotes: "double",
    quoteProps: "always"
  }),

  // Stylistic Rules
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: stylisticRules
  }
];
