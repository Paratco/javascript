import type { Linter } from "eslint";

export default {
  // https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
  // Enforces an explicit 'type' attribute for 'button' elements.
  "@eslint-react/dom-no-missing-button-type": ["error"],

  // https://eslint-react.xyz/docs/rules/no-missing-component-display-name
  // Enforces that all components have a 'displayName' that can be used in DevTools.
  "@eslint-react/no-missing-component-display-name": ["error"],

  // https://eslint-react.xyz/docs/rules/use-state
  // Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
  "@eslint-react/use-state": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
  // Enforces an explicit 'sandbox' attribute for 'iframe' elements.
  "@eslint-react/dom-no-missing-iframe-sandbox": ["error"],

  // https://eslint-react.xyz/docs/rules/no-missing-key
  // Disallows missing 'key' on items in list rendering.
  "@eslint-react/no-missing-key": ["error"],

  // https://eslint-react.xyz/docs/rules/no-duplicate-key
  // Prevents duplicate 'key' props on sibling elements when rendering lists.
  "@eslint-react/no-duplicate-key": ["warn"],

  // https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
  // Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
  "@eslint-react/jsx-no-comment-textnodes": ["error"],

  // https://eslint-react.xyz/docs/rules/no-unstable-context-value
  // Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
  "@eslint-react/no-unstable-context-value": ["error"],

  // https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
  // Prevents problematic leaked values from being rendered.
  "@eslint-react/no-leaked-conditional-rendering": ["warn"],

  // https://eslint-react.xyz/docs/rules/dom-no-script-url
  // Disallows 'javascript:' URLs as attribute values.
  "@eslint-react/dom-no-script-url": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
  // Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
  "@eslint-react/dom-no-unsafe-target-blank": ["warn"],

  // https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
  // Disallows useless fragment elements.
  "@eslint-react/jsx-no-useless-fragment": ["warn"],

  // https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
  // Disallows accessing 'this.state' inside 'setState' calls.
  "@eslint-react/no-access-state-in-setstate": ["error"],

  // https://eslint-react.xyz/docs/rules/no-array-index-key
  // Disallows using an item's index in the array as its key.
  "@eslint-react/no-array-index-key": ["error"],

  // https://eslint-react.xyz/docs/rules/jsx-no-children-prop
  // Disallows passing 'children' as a prop.
  "@eslint-react/jsx-no-children-prop": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
  // Disallows DOM elements from using 'dangerouslySetInnerHTML'.
  "@eslint-react/dom-no-dangerously-set-innerhtml": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
  // Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
  "@eslint-react/dom-no-dangerously-set-innerhtml-with-children": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
  // Disallows 'findDOMNode'.
  "@eslint-react/dom-no-find-dom-node": ["error"],

  // https://eslint-react.xyz/docs/rules/jsx-no-namespace
  // Disallow JSX namespace syntax, as React does not support them.
  "@eslint-react/jsx-no-namespace": ["error"],

  // https://eslint-react.xyz/docs/rules/no-unstable-default-props
  // Prevents using referential-type values as default props in object destructuring.
  "@eslint-react/no-unstable-default-props": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-render-return-value
  // Disallows the return value of 'ReactDOM.render'.
  "@eslint-react/dom-no-render-return-value": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-unknown-property
  // Disallows unknown 'DOM' properties.
  "@eslint-react/dom-no-unknown-property": ["warn"],

  // https://eslint-react.xyz/docs/rules/no-nested-component-definitions
  // Disallows nesting component definitions inside other components.
  "@eslint-react/no-nested-component-definitions": ["error"],

  // https://eslint-react.xyz/docs/rules/no-unused-props
  // Warns about component props that are defined but never used.
  "@eslint-react/no-unused-props": ["error"],

  // https://eslint-react.xyz/docs/rules/no-unused-state
  // Warns about state variables that are defined but never used.
  "@eslint-react/no-unused-state": ["error"],

  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
  // Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
  "@eslint-react/no-set-state-in-component-will-update": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
  // Disallows the use of string style prop in JSX. Use an object instead.
  "@eslint-react/dom-no-string-style-prop": ["error"],

  // https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
  // Disallows 'children' in void DOM elements.
  "@eslint-react/dom-no-void-elements-with-children": ["error"]
} as const satisfies Linter.RulesRecord;
