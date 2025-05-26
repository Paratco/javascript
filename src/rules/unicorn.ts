export default {
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
  "unicorn/no-static-only-class": ["off"]
};
