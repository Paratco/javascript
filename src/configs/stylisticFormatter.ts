import stylistic from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";
import stylisticRules from "../rules/stylistic";
import { ALL_FILES } from "../globs";

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
    files: ALL_FILES,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: stylisticRules
  }
] as Linter.Config[];
