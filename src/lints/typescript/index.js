export default {
  // Enforce that class methods utilize this.
  // https://typescript-eslint.io/rules/class-methods-use-this
  // Note: you must disable the base rule as it can report incorrect errors
  "class-methods-use-this": "off",
  "@typescript-eslint/class-methods-use-this": [
    "error",
    {
      ignoreOverrideMethods: true,
      ignoreClassesThatImplementAnInterface: true
    }
  ],

  // Require return statements to either always or never specify values
  // https://typescript-eslint.io/rules/consistent-return/
  // Note: you must disable the base rule as it can report incorrect errors
  "consistent-return": "off",
  "@typescript-eslint/consistent-return": "off",

  // Enforce consistent usage of type exports.
  // https://typescript-eslint.io/rules/consistent-type-exports
  "@typescript-eslint/consistent-type-exports": [
    "error",
    {
      fixMixedExportsWithInlineTypeSpecifier: true
    }
  ],

  // Enforce consistent usage of type imports.
  // https://typescript-eslint.io/rules/consistent-type-imports
  "@typescript-eslint/consistent-type-imports": ["error"],

  // Enforce default parameters to be last.
  // https://typescript-eslint.io/rules/default-param-last
  // Note: you must disable the base rule as it can report incorrect errors
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": ["error"],

  // Require explicit return types on functions and class methods.
  // https://typescript-eslint.io/rules/explicit-function-return-type
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      allowExpressions: true
    }
  ],

  // Require explicit accessibility modifiers on class properties and methods.
  // https://typescript-eslint.io/rules/explicit-member-accessibility
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    {
      accessibility: "no-public",
      overrides: {
        constructors: "off"
      }
    }
  ],

  // Require explicit return and argument types on exported functions' and classes' public class methods.
  // https://typescript-eslint.io/rules/explicit-module-boundary-types
  "@typescript-eslint/explicit-module-boundary-types": ["error"],

  // Require or disallow initialization in variable declarations.
  // https://typescript-eslint.io/rules/init-declarations
  // Note: you must disable the base rule as it can report incorrect errors
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": ["off"],

  // Enforce a maximum number of parameters in function definitions.
  // https://typescript-eslint.io/rules/max-params
  // Note: you must disable the base rule as it can report incorrect errors
  "max-params": "off",
  "@typescript-eslint/max-params": ["off"],

  // Require a consistent member declaration order.
  // https://typescript-eslint.io/rules/member-ordering
  "@typescript-eslint/member-ordering": [
    "error",
    { default: ["constructor", "field", "static-method", "method", "signature"] }
  ],

  // Enforce using a particular method signature syntax.
  // https://typescript-eslint.io/rules/method-signature-style
  "@typescript-eslint/method-signature-style": ["error"],

  // Enforce naming conventions for everything across a codebase.
  // https://typescript-eslint.io/rules/naming-convention
  // TODO: We can split this rule. for components it enforces PascalCase and functions camelCase
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "function",
      format: ["PascalCase", "camelCase"]
    }
  ],

  // Disallow duplicate class members.
  // https://typescript-eslint.io/rules/no-dupe-class-members
  // Note: you must disable the base rule as it can report incorrect errors
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": ["off"],

  // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
  // https://typescript-eslint.io/rules/no-import-type-side-effects
  "@typescript-eslint/no-import-type-side-effects": ["error"],

  // Disallow this keywords outside of classes or class-like objects.
  // https://typescript-eslint.io/rules/no-invalid-this
  // Note: you must disable the base rule as it can report incorrect errors
  "no-invalid-this": "off",
  "@typescript-eslint/no-invalid-this": ["error"],

  // Disallow function declarations that contain unsafe references inside loop statements.
  // https://typescript-eslint.io/rules/no-loop-func
  // Note: you must disable the base rule as it can report incorrect errors
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": ["error"],

  // Disallow magic numbers.
  // https://typescript-eslint.io/rules/no-magic-numbers
  // Note: you must disable the base rule as it can report incorrect errors
  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": ["off"],

  // Disallow variable redeclaration.
  // https://typescript-eslint.io/rules/no-redeclare
  // Note: you must disable the base rule as it can report incorrect errors
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": ["off"],

  // Disallow invocation of require().
  // https://typescript-eslint.io/rules/no-require-imports
  // Added to recommended
  // "@typescript-eslint/no-require-imports": ["error"],

  // Disallow specified modules when loaded by import.
  // https://typescript-eslint.io/rules/no-restricted-imports
  // Note: you must disable the base rule as it can report incorrect errors
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports": [
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

  // Disallow certain types
  // https://typescript-eslint.io/rules/no-restricted-types/
  // "@typescript-eslint/no-restricted-types": ["off"],

  // Disallow variable declarations from shadowing variables declared in the outer scope.
  // https://typescript-eslint.io/rules/no-shadow
  // Note: you must disable the base rule as it can report incorrect errors
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": ["error"],

  // https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment/
  // Disallow unnecessary assignment of constructor property parameter
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": ["off"],

  // Disallow unnecessary namespace qualifiers.
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier
  "@typescript-eslint/no-unnecessary-qualifier": ["warn"],

  // Require unary negation to take a number.
  // https://typescript-eslint.io/rules/no-unsafe-unary-minus
  // Added to recommended
  // "@typescript-eslint/no-unsafe-unary-minus": ["error"],

  // Disallow unused expressions.
  // https://typescript-eslint.io/rules/no-unused-expressions
  // Note: you must disable the base rule as it can report incorrect errors
  // Added to recommended
  // "no-unused-expressions": "off",
  // "@typescript-eslint/no-unused-expressions": ["off"],

  // Disallow the use of variables before they are defined.
  // https://typescript-eslint.io/rules/no-use-before-define
  // Note: you must disable the base rule as it can report incorrect errors
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": ["error"],

  // Disallow empty exports that don't change anything in a module file.
  // https://typescript-eslint.io/rules/no-useless-empty-export
  "@typescript-eslint/no-useless-empty-export": ["warn"],

  // Require or disallow parameter properties in class constructors.
  // https://typescript-eslint.io/rules/parameter-properties
  "@typescript-eslint/parameter-properties": ["error"],

  // Require destructuring from arrays and/or objects.
  // https://typescript-eslint.io/rules/prefer-destructuring
  // Note: you must disable the base rule as it can report incorrect errors
  "prefer-destructuring": "off",
  "@typescript-eslint/prefer-destructuring": ["off"],

  // Require each enum member value to be explicitly initialized.
  // https://typescript-eslint.io/rules/prefer-enum-initializers
  "@typescript-eslint/prefer-enum-initializers": ["off"],

  // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
  // https://typescript-eslint.io/rules/prefer-find
  // Added to stylistic
  // "@typescript-eslint/prefer-find": ["warn"],

  // Require private members to be marked as readonly if they're never modified outside the constructor.
  // https://typescript-eslint.io/rules/prefer-readonly
  "@typescript-eslint/prefer-readonly": ["warn"],

  // Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
  "@typescript-eslint/prefer-readonly-parameter-types": ["off"],

  // Enforce RegExp#exec over String#match if no global flag is provided.
  // https://typescript-eslint.io/rules/prefer-regexp-exec
  // Added to stylistic
  // "@typescript-eslint/prefer-regexp-exec": ["warn"],

  // Require any function or method that returns a Promise to be marked async.
  // https://typescript-eslint.io/rules/promise-function-async
  "@typescript-eslint/promise-function-async": ["error"],

  // Require Array#sort and Array#toSorted calls to always provide a compareFunction.
  // https://typescript-eslint.io/rules/require-array-sort-compare
  "@typescript-eslint/require-array-sort-compare": ["error"],

  // Enforce consistent returning of awaited values.
  // https://typescript-eslint.io/rules/return-await
  // Note: you must disable the base rule as it can report incorrect errors
  // Added to recommended
  // "no-return-await": "off",
  // "@typescript-eslint/return-await": ["off"],

  // Disallow certain types in boolean expressions.
  // https://typescript-eslint.io/rules/strict-boolean-expressions
  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false
    }
  ],

  // Require switch-case statements to be exhaustive.
  // https://typescript-eslint.io/rules/switch-exhaustiveness-check
  "@typescript-eslint/switch-exhaustiveness-check": ["error"],

  // Require type annotations in certain places.
  // https://typescript-eslint.io/rules/typedef
  "@typescript-eslint/typedef": ["off"],

  // Enforce template literal expressions to be of string type.
  // https://typescript-eslint.io/rules/restrict-template-expressions
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      allowBoolean: true,
      allowNumber: true,
      allowRegExp: true
    }
  ],

  // Disallow type parameters that aren't used multiple times
  // https://typescript-eslint.io/rules/no-unnecessary-type-parameters
  // Note: This rule is in the strict rules. But we decided to disable this rule.
  "@typescript-eslint/no-unnecessary-type-parameters": ["off"],

  // Disallow unused variables.
  // https://typescript-eslint.io/rules/no-unused-vars
  // Note: This rule is in the recommended rules. But we modify it.
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true
    }
  ],

  // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
  // https://typescript-eslint.io/rules/prefer-optional-chain
  // Note: This rule is in the recommended rules. But we remove it.
  "@typescript-eslint/prefer-optional-chain": ["off"]
};
