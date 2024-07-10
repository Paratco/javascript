export default {
  // https://eslint.style/rules/default/array-bracket-newline
  // Enforce linebreaks after opening and before closing array brackets
  "@stylistic/array-bracket-newline": ["warn"],

  // https://eslint.style/rules/default/array-bracket-spacing
  // Enforce consistent spacing inside array brackets
  "@stylistic/array-bracket-spacing": ["warn"],

  // https://eslint.style/rules/default/array-element-newline
  // Enforce line breaks after each array element
  "@stylistic/array-element-newline": ["warn", "consistent"],

  // https://eslint.style/rules/default/arrow-parens
  // Require parentheses around arrow function arguments
  "@stylistic/arrow-parens": ["warn", "always"],

  // https://eslint.style/rules/default/arrow-spacing
  // Enforce consistent spacing before and after the arrow in arrow functions
  "@stylistic/arrow-spacing": ["warn"],

  // https://eslint.style/rules/default/block-spacing
  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  "@stylistic/block-spacing": ["warn"],

  // https://eslint.style/rules/default/brace-style
  // Enforce consistent brace style for blocks
  "@stylistic/brace-style": ["warn", "1tbs"],

  // https://eslint.style/rules/default/comma-dangle
  // Require or disallow trailing commas
  "@stylistic/comma-dangle": ["warn"],

  // https://eslint.style/rules/default/comma-spacing
  // Enforce consistent spacing before and after commas
  "@stylistic/comma-spacing": ["warn"],

  // https://eslint.style/rules/default/comma-style
  // Enforce consistent comma style
  "@stylistic/comma-style": ["warn"],

  // https://eslint.style/rules/default/computed-property-spacing
  // Enforce consistent spacing inside computed property brackets
  "@stylistic/computed-property-spacing": ["warn"],

  // https://eslint.style/rules/default/dot-location
  // Enforce consistent newlines before and after dots
  "@stylistic/dot-location": ["warn", "property"],

  // https://eslint.style/rules/default/eol-last
  // Require or disallow newline at the end of files
  "@stylistic/eol-last": ["warn"],

  // https://eslint.style/rules/default/function-call-spacing
  // Require or disallow spacing between function identifiers and their invocations. Alias of `function-call-spacing`.
  "@stylistic/function-call-spacing": ["warn"],

  // https://eslint.style/rules/default/function-call-argument-newline
  // Enforce line breaks between arguments of a function call
  "@stylistic/function-call-argument-newline": ["warn", "consistent"],

  // https://eslint.style/rules/default/function-paren-newline
  // Enforce consistent line breaks inside function parentheses
  "@stylistic/function-paren-newline": ["warn", "consistent"],

  // https://eslint.style/rules/default/generator-star-spacing
  // Enforce consistent spacing around `*` operators in generator functions
  "@stylistic/generator-star-spacing": ["warn"],

  // https://eslint.style/rules/default/implicit-arrow-linebreak
  // Enforce the location of arrow function bodies
  "@stylistic/implicit-arrow-linebreak": ["warn"],

  // https://eslint.style/rules/default/indent
  // Enforce consistent indentation
  "@stylistic/indent": ["warn", 2],

  // https://eslint.style/rules/default/indent-binary-ops
  // Indentation for binary operators
  "@stylistic/indent-binary-ops": ["warn", 2],

  // https://eslint.style/rules/default/jsx-child-element-spacing
  // Enforce or disallow spaces inside curly braces in JSX attributes and expressions
  "@stylistic/jsx-child-element-spacing": ["error"],

  // https://eslint.style/rules/default/jsx-closing-bracket-location
  // Enforce closing bracket location in JSX
  "@stylistic/jsx-closing-bracket-location": ["warn"],

  // https://eslint.style/rules/default/jsx-closing-tag-location
  // Enforce closing tag location for multiline JSX
  "@stylistic/jsx-closing-tag-location": ["warn"],

  // https://eslint.style/rules/default/jsx-curly-brace-presence
  // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  "@stylistic/jsx-curly-brace-presence": ["warn"],

  // https://eslint.style/rules/default/jsx-curly-newline
  // 	Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  "@stylistic/jsx-curly-newline": ["warn"],

  // https://eslint.style/rules/default/jsx-curly-spacing
  // Enforce or disallow spaces inside curly braces in JSX attributes and expressions
  "@stylistic/jsx-curly-spacing": ["warn"],

  // https://eslint.style/rules/default/jsx-equals-spacing
  // Enforce or disallow spaces around equal signs in JSX attributes
  "@stylistic/jsx-equals-spacing": ["warn"],

  // https://eslint.style/rules/default/jsx-first-prop-new-line
  // Enforce proper position of the first property in JSX
  "@stylistic/jsx-first-prop-new-line": ["warn"],

  // https://eslint.style/rules/default/jsx-function-call-newline
  // Enforce line breaks before and after JSX elements when they are used as arguments to a function.
  "@stylistic/jsx-function-call-newline": ["warn"],

  // https://eslint.style/rules/default/jsx-indent
  // Enforce JSX indentation
  "@stylistic/jsx-indent": ["warn", 2, { checkAttributes: true, indentLogicalExpressions: true }],

  // https://eslint.style/rules/default/jsx-indent-props
  // Enforce props indentation in JSX
  "@stylistic/jsx-indent-props": ["warn", 2],

  // https://eslint.style/rules/default/jsx-max-props-per-line
  // Enforce maximum of props on a single line in JSX
  "@stylistic/jsx/jsx-max-props-per-line": ["off"],

  // https://eslint.style/rules/default/jsx-newline
  // Require or prevent a new line after jsx elements and expressions.
  "@stylistic/jsx-newline": ["off"],

  // https://eslint.style/rules/default/jsx-one-expression-per-line
  // Require one JSX element per line
  "@stylistic/jsx-one-expression-per-line": ["warn", { allow: "single-child" }],

  // https://eslint.style/rules/default/jsx-pascal-case
  // Enforce PascalCase for user-defined JSX components
  "@stylistic/jsx-pascal-case": ["error"],

  // https://eslint.style/rules/default/jsx-props-no-multi-spaces
  // Disallow multiple spaces between inline JSX props
  "@stylistic/jsx-props-no-multi-spaces": ["warn"],

  // https://eslint.style/rules/default/jsx-quotes
  // Enforce the consistent use of either double or single quotes in JSX attributes
  "@stylistic/jsx-quotes": ["warn"],

  // https://eslint.style/rules/default/jsx-self-closing-comp
  // Disallow extra closing tags for components without children
  "@stylistic/jsx-self-closing-comp": ["warn"],

  // https://eslint.style/rules/default/jsx-sort-props
  // Enforce props alphabetical sorting
  "@stylistic/jsx-sort-props": [
    "warn",
    {
      callbacksLast: true,
      shorthandFirst: true,
      // shorthandLast: false,
      multiline: "last",
      // ignoreCase: false,
      noSortAlphabetically: true
      // reservedFirst: true
      // locale: "auto"
    }
  ],

  // https://eslint.style/rules/default/jsx-tag-spacing
  // Enforce whitespace in and around the JSX opening and closing brackets
  "@stylistic/jsx-tag-spacing": [
    "warn",
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never"
    }
  ],

  // https://eslint.style/rules/default/jsx-wrap-multilines
  // Disallow missing parentheses around multiline JSX
  "@stylistic/jsx-wrap-multilines": [
    "warn",
    {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line"
    }
  ],

  // https://eslint.style/rules/default/key-spacing
  // Enforce consistent spacing between keys and values in object literal properties
  "@stylistic/key-spacing": "warn",

  // https://eslint.style/rules/default/keyword-spacing
  // Enforce consistent spacing before and after keywords
  "@stylistic/keyword-spacing": "warn",

  // https://eslint.style/rules/default/line-comment-position
  // Enforce position of line comments
  "@stylistic/line-comment-position": "warn",

  // https://eslint.style/rules/default/linebreak-style
  // Enforce consistent linebreak style
  "@stylistic/linebreak-style": "warn",

  // https://eslint.style/rules/default/lines-around-comment
  // Require empty lines around comments
  "@stylistic/lines-around-comment": [
    "warn",
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
      allowClassStart: true,
      allowClassEnd: true,
      afterHashbangComment: true
    }
  ],

  // https://eslint.style/rules/default/lines-between-class-members
  // Require or disallow an empty line between class members
  "@stylistic/lines-between-class-members": [
    "warn",
    {
      enforce: [
        {
          blankLine: "never",
          prev: "field",
          next: "field"
        },
        {
          blankLine: "always",
          prev: "*",
          next: "method"
        },
        {
          blankLine: "always",
          prev: "method",
          next: "*"
        }
      ]
    }
  ],

  // https://eslint.style/rules/default/max-len
  // Enforce a maximum line length
  "@stylistic/max-len": [
    "error",
    {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }
  ],

  // https://eslint.style/rules/default/max-statements-per-line
  // Enforce a maximum number of statements allowed per line
  "@stylistic/max-statements-per-line": ["error"],

  // https://eslint.style/rules/default/member-delimiter-style
  // Require a specific member delimiter style for interfaces and type literals
  "@stylistic/member-delimiter-style": ["warn"],

  // https://eslint.style/rules/default/multiline-comment-style
  // Enforce a particular style for multiline comments
  "@stylistic/multiline-comment-style": ["warn"],

  // https://eslint.style/rules/default/multiline-ternary
  // Enforce newlines between operands of ternary expressions
  "@stylistic/multiline-ternary": ["warn", "always-multiline"],

  // https://eslint.style/rules/default/new-parens
  // Enforce or disallow parentheses when invoking a constructor with no arguments
  "@stylistic/new-parens": ["warn"],

  // https://eslint.style/rules/default/newline-per-chained-call
  // Require a newline after each call in a method chain
  "@stylistic/newline-per-chained-call": ["warn"],

  // https://eslint.style/rules/default/no-confusing-arrow
  // Disallow arrow functions where they could be confused with comparisons
  "@stylistic/no-confusing-arrow": ["warn"],

  // https://eslint.style/rules/default/no-extra-parens
  // Disallow unnecessary parentheses
  "@stylistic/no-extra-parens": ["warn"],

  // https://eslint.style/rules/default/no-extra-semi
  // Disallow unnecessary semicolons
  "@stylistic/no-extra-semi": ["warn"],

  // https://eslint.style/rules/default/no-floating-decimal
  // Disallow leading or trailing decimal points in numeric literals
  "@stylistic/no-floating-decimal": ["warn"],

  // https://eslint.style/rules/default/no-mixed-operators
  // Disallow mixed binary operators
  "@stylistic/no-mixed-operators": ["error"],

  // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
  // Disallow mixed spaces and tabs for indentation
  "@stylistic/no-mixed-spaces-and-tabs": ["error"],

  // https://eslint.style/rules/default/no-multi-spaces
  // Disallow multiple spaces
  "@stylistic/no-multi-spaces": ["warn"],

  // https://eslint.style/rules/default/no-multiple-empty-lines
  // Disallow multiple empty lines
  "@stylistic/no-multiple-empty-lines": ["warn"],

  // https://eslint.style/rules/default/no-tabs
  // Disallow all tabs
  "@stylistic/no-tabs": ["error"],

  // https://eslint.style/rules/default/no-trailing-spaces
  // Disallow trailing whitespace at the end of lines
  "@stylistic/no-trailing-spaces": ["warn"],

  // https://eslint.style/rules/default/no-whitespace-before-property
  // Disallow whitespace before properties
  "@stylistic/no-whitespace-before-property": ["warn"],

  // https://eslint.style/rules/default/nonblock-statement-body-position
  // Enforce the location of single-line statements
  "@stylistic/nonblock-statement-body-position": ["warn"],

  // https://eslint.style/rules/default/object-curly-newline
  // Enforce consistent line breaks after opening and before closing braces
  "@stylistic/object-curly-newline": [
    "warn",
    {
      multiline: true
    }
  ],

  // https://eslint.style/rules/default/object-curly-spacing
  // Enforce consistent spacing inside braces
  "@stylistic/object-curly-spacing": ["warn"],

  // https://eslint.style/rules/default/object-property-newline
  // Enforce placing object properties on separate lines
  "@stylistic/object-property-newline": [
    "warn",
    {
      allowAllPropertiesOnSameLine: true
    }
  ],

  // https://eslint.style/rules/default/one-var-declaration-per-line
  // Require or disallow newlines around variable declarations
  "@stylistic/one-var-declaration-per-line": ["warn"],

  // https://eslint.style/rules/default/operator-linebreak
  // Enforce consistent linebreak style for operators
  "@stylistic/operator-linebreak": ["warn"],

  // https://eslint.style/rules/default/padded-blocks
  // Require or disallow padding within blocks
  "@stylistic/padded-blocks": ["warn", "never"],

  // https://eslint.style/rules/default/padding-line-between-statements
  // Require or disallow padding lines between statements
  "@stylistic/padding-line-between-statements": [
    "warn",
    {
      blankLine: "always",
      prev: "*",
      next: "return"
    },
    {
      blankLine: "always",
      prev: "*",
      next: "block-like"
    },
    {
      blankLine: "always",
      prev: "block-like",
      next: "*"
    },
    {
      blankLine: "always",
      prev: "case",
      next: "case"
    },
    {
      blankLine: "never",
      prev: "*",
      next: "break"
    },
    {
      blankLine: "always",
      prev: "*",
      next: "export"
    },
    {
      blankLine: "always",
      prev: "*",
      next: "interface"
    },
    {
      blankLine: "always",
      prev: "interface",
      next: "*"
    },
    {
      blankLine: "always",
      prev: "*",
      next: "class"
    },
    {
      blankLine: "always",
      prev: "class",
      next: "*"
    }
  ],

  // https://eslint.style/rules/default/quote-props
  // Require quotes around object literal property names
  "@stylistic/quote-props": ["warn", "as-needed"],

  // https://eslint.style/rules/default/quotes
  // Enforce the consistent use of either backticks, double, or single quotes
  "@stylistic/quotes": ["warn"],

  // https://eslint.style/rules/default/rest-spread-spacing
  // Enforce spacing between rest and spread operators and their expressions
  "@stylistic/rest-spread-spacing": ["warn"],

  // https://eslint.style/rules/default/semi
  // Require or disallow semicolons instead of ASI
  "@stylistic/semi": ["warn"],

  // https://eslint.style/rules/default/semi-spacing
  // Enforce consistent spacing before and after semicolons
  "@stylistic/semi-spacing": ["warn"],

  // https://eslint.style/rules/default/semi-style
  // Enforce location of semicolons
  "@stylistic/semi-style": ["warn"],

  // https://eslint.style/rules/default/space-before-blocks
  // Enforce consistent spacing before blocks
  "@stylistic/space-before-blocks": ["warn"],

  // https://eslint.style/rules/default/space-before-function-paren
  // Enforce consistent spacing before `function` definition opening parenthesis
  "@stylistic/space-before-function-paren": [
    "warn",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }
  ],

  // https://eslint.style/rules/default/space-in-parens
  // Enforce consistent spacing inside parentheses
  "@stylistic/space-in-parens": ["warn"],

  // https://eslint.style/rules/default/space-infix-ops
  // Require spacing around infix operators
  "@stylistic/space-infix-ops": ["warn"],

  // https://eslint.style/rules/default/space-unary-ops
  // Enforce consistent spacing before or after unary operators
  "@stylistic/space-unary-ops": ["warn"],

  // https://eslint.style/rules/default/spaced-comment
  // Enforce consistent spacing after the `//` or `/*` in a comment
  "@stylistic/spaced-comment": ["warn"],

  // https://eslint.style/rules/default/switch-colon-spacing
  // Enforce spacing around colons of switch statements
  "@stylistic/switch-colon-spacing": ["warn"],

  // https://eslint.style/rules/default/template-curly-spacing
  // Require or disallow spacing around embedded expressions of template strings
  "@stylistic/template-curly-spacing": ["warn"],

  // https://eslint.style/rules/default/template-tag-spacing
  // Require or disallow spacing between template tags and their literals
  "@stylistic/template-tag-spacing": ["warn"],

  // https://eslint.style/rules/default/type-annotation-spacing
  // Require consistent spacing around type annotations
  "@stylistic/type-annotation-spacing": ["warn"],

  // https://eslint.style/rules/default/type-generic-spacing
  // Enforces consistent spacing inside TypeScript type generics
  "@stylistic/type-generic-spacing": ["warn"],

  // https://eslint.style/rules/default/type-named-tuple-spacing
  // Expect space before the type declaration in the named tuple
  "@stylistic/type-named-tuple-spacing": ["warn"],

  // https://eslint.style/rules/default/wrap-iife
  // Require parentheses around immediate `function` invocations
  "@stylistic/wrap-iife": ["warn", "inside"],

  // https://eslint.style/rules/default/wrap-regex
  // Require parenthesis around regex literals
  "@stylistic/wrap-regex": ["warn"],

  // https://eslint.style/rules/default/yield-star-spacing
  // Require or disallow spacing around the `*` in `yield*` expressions
  "@stylistic/yield-star-spacing": ["warn", "after"]
};
