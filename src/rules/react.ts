export default {
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
  // Enforces consistent naming for boolean props
  "react/boolean-prop-naming": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  // Disallow usage of button elements without an explicit type attribute
  "react/button-has-type": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
  // Enforce using onChange or readonly attribute when checked is used
  "react/checked-requires-onchange-or-readonly": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  // Enforce all defaultProps have a corresponding non-required PropType
  "react/default-props-match-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  // Enforce consistent usage of destructuring assignment of props, state, and context
  "react/destructuring-assignment": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  // Disallow missing displayName in a React component definition
  "react/display-name": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  // Disallow certain props on components
  "react/forbid-component-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  // Disallow certain props on DOM Nodes
  "react/forbid-dom-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  // Disallow certain elements
  "react/forbid-elements": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // Disallow using another component's propTypes
  "react/forbid-foreign-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  // Disallow certain propTypes
  "react/forbid-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  // Enforce a specific function type for function components
  "react/function-component-definition": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
  // Ensure destructuring and symmetric naming of useState hook value and setter variables
  "react/hook-use-state": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
  // Enforce sandbox attribute on iframe elements
  "react/iframe-missing-sandbox": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  // Enforce boolean attributes notation in JSX
  "react/jsx-boolean-value": ["warn", "always"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
  // Enforce or disallow spaces inside curly braces in JSX attributes and expressions
  "react/jsx-child-element-spacing": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  // Enforce closing bracket location in JSX
  // Use similar stylistic rule instead
  "react/jsx-closing-bracket-location": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  // Enforce closing tag location for multiline JSX
  // Use similar stylistic rule instead
  "react/jsx-closing-tag-location": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  // Use similar stylistic rule instead
  "react/jsx-curly-brace-presence": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  // Use similar stylistic rule instead
  "react/jsx-curly-newline": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  // Enforce or disallow spaces inside curly braces in JSX attributes and expressions
  // Use similar stylistic rule instead
  "react/jsx-curly-spacing": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  // Enforce or disallow spaces around equal signs in JSX attributes
  // Use similar stylistic rule instead
  "react/jsx-equals-spacing": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  // Disallow file extensions that may contain JSX
  "react/jsx-filename-extension": ["error", { allow: "always", extensions: [".tsx"] }],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  // Enforce proper position of the first property in JSX
  // Use similar stylistic rule instead
  "react/jsx-first-prop-new-line": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  // Enforce shorthand or standard form for React fragments
  "react/jsx-fragments": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  // Enforce event handler naming conventions in JSX
  "react/jsx-handler-names": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  // Enforce JSX indentation
  // Use similar stylistic rule instead
  "react/jsx-indent": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  // Enforce props indentation in JSX
  // Use similar stylistic rule instead
  "react/jsx-indent-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  // Disallow missing key props in iterators/collection literals
  "react/jsx-key": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  // Enforce JSX maximum depth
  "react/jsx-max-depth": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  // Enforce maximum of props on a single line in JSX
  // Use similar stylistic rule instead
  "react/jsx-max-props-per-line": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
  // Require or prevent a new line after jsx elements and expressions
  // Use similar stylistic rule instead
  "react/jsx-newline": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  // Disallow .bind() or arrow functions in JSX props
  "react/jsx-no-bind": [
    "error",
    {
      allowArrowFunctions: true
    }
  ],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  // Disallow comments from being inserted as text nodes
  "react/jsx-no-comment-textnodes": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // Disallows JSX context provider values from taking values that will cause needless renders
  "react/jsx-no-constructed-context-values": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  // Disallow duplicate properties in JSX
  "react/jsx-no-duplicate-props": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
  // Disallow problematic leaked values from being rendered
  "react/jsx-no-leaked-render": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  // Disallow usage of string literals in JSX
  "react/jsx-no-literals": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  // Disallow usage of javascript: URLs
  "react/jsx-no-script-url": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  // Disallow target="_blank" attribute without rel="noreferrer"
  "react/jsx-no-target-blank": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  // Disallow undeclared variables in JSX
  "react/jsx-no-undef": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  // Disallow unnecessary fragments
  "react/jsx-no-useless-fragment": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  // Require one JSX element per line
  // Use similar stylistic rule instead
  "react/jsx-one-expression-per-line": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  // Enforce PascalCase for user-defined JSX components
  // Use similar stylistic rule instead
  "react/jsx-pascal-case": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  // Disallow multiple spaces between inline JSX props
  // Use similar stylistic rule instead
  "react/jsx-props-no-multi-spaces": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
  // Disallow multiple spaces between inline JSX props
  "react/jsx-props-no-spread-multi": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  // Disallow JSX prop spreading
  "react/jsx-props-no-spreading": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  // Enforce props alphabetical sorting
  // Use similar stylistic rule instead
  "react/jsx-sort-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  // Enforce whitespace in and around the JSX opening and closing brackets
  // Use similar stylistic rule instead
  "react/jsx-tag-spacing": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  // Disallow React to be incorrectly marked as unused
  "react/jsx-uses-react": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  // Disallow variables used in JSX to be incorrectly marked as unused
  "react/jsx-uses-vars": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  // Disallow missing parentheses around multiline JSX
  // Use similar stylistic rule instead
  "react/jsx-wrap-multilines": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  // Disallow when this.state is accessed within setState
  "react/no-access-state-in-setstate": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  // Disallow adjacent inline elements not separated by whitespace.
  "react/no-adjacent-inline-elements": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  // Disallow usage of Array index in keys
  "react/no-array-index-key": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
  // Lifecycle methods should be methods on the prototype, not class fields
  "react/no-arrow-function-lifecycle": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  // Disallow passing of children as props
  "react/no-children-prop": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  // Disallow usage of dangerous JSX properties
  "react/no-danger": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  // Disallow when a DOM element is using both children and dangerouslySetInnerHTML
  "react/no-danger-with-children": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  // Disallow usage of deprecated methods
  "react/no-deprecated": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  // Disallow usage of setState in componentDidMount
  "react/no-did-mount-set-state": ["error", "disallow-in-func"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  // Disallow usage of setState in componentDidUpdate
  "react/no-did-update-set-state": ["error", "disallow-in-func"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  // Disallow direct mutation of this.state
  "react/no-direct-mutation-state": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  // Disallow usage of findDOMNode
  "react/no-find-dom-node": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
  // Disallow usage of invalid attributes
  "react/no-invalid-html-attribute": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  // Disallow usage of isMounted
  "react/no-is-mounted": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  // Disallow multiple component definition per file
  "react/no-multi-comp": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
  // Enforce that namespaces are not used in React elements
  "react/no-namespace": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
  // Disallow usage of referential-type variables as default param in functional component
  "react/no-object-type-as-default-prop": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  // Disallow usage of shouldComponentUpdate when extending React.PureComponent
  "react/no-redundant-should-component-update": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  // Disallow usage of the return value of ReactDOM.render
  "react/no-render-return-value": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  // Disallow usage of setState
  "react/no-set-state": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  // Disallow using string references
  "react/no-string-refs": ["error", { noTemplateLiterals: true }],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
  // Disallow this from being used in stateless functional components
  "react/no-this-in-sfc": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  // Disallow common typos
  "react/no-typos": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  // Disallow unescaped HTML entities from appearing in markup
  "react/no-unescaped-entities": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  // Disallow usage of unknown DOM property
  "react/no-unknown-property": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  // Disallow usage of unsafe lifecycle methods
  // Disabled in recommended configs
  "react/no-unsafe": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
  // Disallow creating unstable components inside components
  "react/no-unstable-nested-components": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
  // Disallow declaring unused methods of component class
  "react/no-unused-class-component-methods": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  // Disallow definitions of unused propTypes
  "react/no-unused-prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
  // Disallow definitions of unused state
  "react/no-unused-state": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  // Disallow usage of setState in componentWillUpdate
  "react/no-will-update-set-state": ["error", "disallow-in-func"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  // Enforce ES5 or ES6 class for React Components
  "react/prefer-es6-class": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
  // Prefer exact prop type definitions
  "react/prefer-exact-props": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  // Enforce that props are read-only
  "react/prefer-read-only-props": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  // Enforce stateless components to be written as a pure function
  "react/prefer-stateless-function": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  // Disallow missing props validation in a React component definition
  "react/prop-types": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  // Disallow missing React when using JSX
  // Disable this rule because react 17 doesn't need to import React to use JSX
  "react/react-in-jsx-scope": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  // Enforce a defaultProps definition for every prop that is not a required prop
  "react/require-default-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  // Enforce React components to have a shouldComponentUpdate method
  "react/require-optimization": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  // Enforce ES5 or ES6 class for returning value in render function
  "react/require-render-return": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  // Disallow extra closing tags for components without children
  "react/self-closing-comp": ["warn"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  // Enforce component methods order
  "react/sort-comp": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
  // Enforce defaultProps declarations alphabetical sorting
  "react/sort-default-props": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  // Enforce propTypes declarations alphabetical sorting
  "react/sort-prop-types": ["off"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  // Enforce class component state initialization style
  "react/state-in-constructor": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  // Enforces where React component static properties should be positioned.
  "react/static-property-placement": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  // Enforce style prop value is an object
  "react/style-prop-object": ["error"],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  // Disallow void DOM elements (e.g. <img />, <br />) from receiving children
  "react/void-dom-elements-no-children": ["error"]
} as const;
