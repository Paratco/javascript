import stylistic from "@stylistic/eslint-plugin";

// Custom Rules
import stylisticRules from "../lints/stylistic/index.js";

export default [
  // Stylistic Configs
  stylistic.configs.customize({
    jsx: true,
    arrowParens: true,
    flat: true,
    blockSpacing: true,
    braceStyle: "stroustrup",
    commaDangle: "always-multiline",
    indent: 2,
    semi: true,
    quotes: "double",
    quoteProps: "always"
  }),

  // Stylistic Rules
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
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
