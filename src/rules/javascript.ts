import type { Linter } from "eslint";

export default {
  // https://eslint.org/docs/latest/rules/eqeqeq
  // Require the use of === and !==
  eqeqeq: ["warn"],

  // https://eslint.org/docs/latest/rules/curly
  // Enforce consistent brace style for all control statements
  curly: ["warn", "all"],

  // https://eslint.org/docs/latest/rules/no-restricted-imports
  // Disallow specified modules when loaded by import
  "no-restricted-imports": [
    "error",
    {
      patterns: [
        {
          regex: "^(node:)?process$",
          message: "Please dont import node:process."
        }
      ]
    }
  ],

  // https://eslint.org/docs/latest/rules/no-unused-vars
  // Disallow unused variables
  "no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true
    }
  ],

  // https://eslint.org/docs/latest/rules/no-fallthrough
  // Disallow fallthrough of case statements
  "no-fallthrough": [
    "error",
    {
      allowEmptyCase: true
    }
  ]
} as const satisfies Linter.RulesRecord;
