import type { Linter } from "eslint";

export default {
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
  // Enforce a specific parameter name in catch clauses.
  "unicorn/catch-error-name": [
    "error",
    {
      ignore: [String.raw`^error[\da-zA-Z_]*$`]
    }
  ],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
  // Enforce a case style for filenames.
  "unicorn/filename-case": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
  // Prevent abbreviations.
  "unicorn/prevent-abbreviations": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
  // Disallow the use of the null literal.
  "unicorn/no-null": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
  // Disallow negated conditions.
  "unicorn/no-negated-condition": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
  // Enforce consistent brace style for case clauses.
  "unicorn/switch-case-braces": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
  // Prefer the spread operator over Array.from(…), Array#concat(…), Array#{slice,toSpliced}() and String#split('').
  "unicorn/prefer-spread": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
  // Prefer .at() method for index access and String#charAt().
  "unicorn/prefer-at": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
  // Prefer ternary expressions over simple if-else statements.
  "unicorn/prefer-ternary": ["warn", "only-single-line"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
  // Disallow comparing undefined using typeof.
  "unicorn/no-typeof-undefined": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
  // Disallow classes that only have static members.
  "unicorn/no-static-only-class": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-side-effects.md
  // Disallow top-level side effects in exported modules.
  "unicorn/no-top-level-side-effects": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-break-in-nested-loop.md
  // Disallow `break` and `continue` in nested loops and switches inside loops.
  "unicorn/no-break-in-nested-loop": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-short-arrow-method.md
  // Prefer arrow function properties over methods with a single return.
  "unicorn/prefer-short-arrow-method": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/max-nested-calls.md
  // Limit the depth of nested calls.
  "unicorn/max-nested-calls": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-boolean-name.md
  // Enforce consistent naming for boolean names.
  "unicorn/consistent-boolean-name": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-class-member-order.md
  // Enforce consistent class member order.
  "unicorn/consistent-class-member-order": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-uint8array-base64.md
  // Prefer `Uint8Array#toBase64()` and `Uint8Array.fromBase64()` over `atob()`, `btoa()`, and `Buffer` base64 conversions.
  // Kept on deliberately: upstream demoted this to off in v73, but the native path is faster and the
  // gap is polyfillable.
  "unicorn/prefer-uint8array-base64": ["error"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array.md
  // Prefer `Iterator#toArray()` over temporary arrays from iterator spreads.
  "unicorn/prefer-iterator-to-array": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-split-limit.md
  // Prefer `String#split()` with a limit.
  "unicorn/prefer-split-limit": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-minimal-ternary.md
  // Prefer moving ternaries into the minimal varying part of an expression.
  "unicorn/prefer-minimal-ternary": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-non-function-verb-prefix.md
  // Disallow non-function values with function-style verb prefixes.
  "unicorn/no-non-function-verb-prefix": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-https.md
  // Prefer HTTPS over HTTP.
  "unicorn/prefer-https": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/class-reference-in-static-methods.md
  // Enforce consistent class references in static methods.
  "unicorn/class-reference-in-static-methods": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-await.md
  // Prefer await over promise chaining.
  "unicorn/prefer-await": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-assignment-in-function.md
  // Disallow assigning to top-level variables from inside functions.
  "unicorn/no-top-level-assignment-in-function": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-string-replacement.md
  // Disallow non-literal replacement values in String#replace() and String#replaceAll().
  "unicorn/no-unsafe-string-replacement": ["warn"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/name-replacements.md
  // Enforce replacements for variable, property, and filenames.
  "unicorn/name-replacements": "off",

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nonstandard-builtin-properties.md
  // Disallow non-standard properties on built-in objects.
  "unicorn/no-nonstandard-builtin-properties": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/single-line-block-comment-style.md
  // Enforce a consistent style for single-line block comments.
  // Off: the default `multiline` style rewrites `/* x */` and one-line `/** x */` JSDoc into
  // multi-line comments. We take no stance on comment shape (see @stylistic/multiline-comment-style).
  "unicorn/single-line-block-comment-style": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-try.md
  // Prefer `Promise.try()` over promise-wrapping boilerplate.
  // Off: flags everyday `Promise.resolve().then(() => f())` and `Promise.try()` is too new to require.
  "unicorn/prefer-promise-try": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-then-catch.md
  // Prefer `.then().catch()` over `.then(…, …)` for error handling.
  // Off: not equivalent. `.then(a, b)` does not catch errors thrown by `a`, `.then(a).catch(b)` does.
  "unicorn/prefer-then-catch": ["off"],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-html-methods.md
  // Prefer `.getHTML()` and `.setHTML()` over `.innerHTML`.
  // Off: fires on plain `.innerHTML` reads, and `.setHTML()` (Sanitizer API) is not polyfillable.
  "unicorn/prefer-dom-node-html-methods": ["off"]
} as const satisfies Linter.RulesRecord;
