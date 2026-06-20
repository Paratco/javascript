import type { Linter } from "eslint";
import type { RuleFunction } from "@eslint-react/kit";
import eslintReactKit from "@eslint-react/kit";
import { TSESTree } from "@typescript-eslint/types";

/** Enforce an explicit value for boolean JSX attributes (e.g. `autoFocus={true}`). */
function jsxBooleanValue(): RuleFunction {
  // eslint-disable-next-line unicorn/consistent-function-scoping -- builder requires a factory returning the rule
  return (context) => ({
    JSXAttribute(node) {
      // › Guard: only shorthand boolean attributes (those without a value) should be flagged
      if (node.value !== null) {
        return;
      }

      // › Report: prefer the explicit `={true}` form
      context.report({
        node,
        message: "Set an explicit value for boolean attributes (e.g. `prop={true}`).",
        fix: (fixer) => fixer.insertTextAfter(node.name, "={true}")
      });
    }
  });
}

/** Options for {@link jsxFragments}. */
interface JsxsFragmentsOptions {

  /** The mode to enforce: "syntax" (default, shorthand) or "element" (standard form). */
  mode?: "syntax" | "element";
}

/** Enforce shorthand or standard form for React fragments. */
function jsxFragments(options: JsxsFragmentsOptions = {}): RuleFunction {
  const { mode = "syntax" } = options;

  return (context) => {
    // ── Helpers ─────────────────────────────────────

    function reportSyntaxPreferred(node: TSESTree.JSXOpeningElement, pattern: "React.Fragment" | "Fragment"): void {
      // › Guard: has key prop (legitimate use of standard form)
      const hasAttributes = node.attributes.length > 0;

      if (hasAttributes) {
        return;
      }

      context.report({
        node,
        message: `Use shorthand fragment syntax '<>...</>' instead of '<${pattern}>...</${pattern}'.`,
        fix(fixer) {
          const closing = node.parent.closingElement;

          if (closing === null) {
            return null;
          }

          return [fixer.replaceText(node, "<>"), fixer.replaceText(closing, "</>")];
        }
      });
    }

    // ── Listeners ────────────────────────────────────

    return {
      JSXOpeningElement(node) {
        const name = node.name;

        // ─── Handle <Fragment> (JSXIdentifier) ───────
        if (name.type === TSESTree.AST_NODE_TYPES.JSXIdentifier && name.name === "Fragment") {
          if (mode === "syntax") {
            reportSyntaxPreferred(node, "Fragment");
          }

          return;
        }

        // ─── Handle <React.Fragment> (JSXMemberExpression) ─
        if (name.type !== TSESTree.AST_NODE_TYPES.JSXMemberExpression) {
          return;
        }

        if (name.object.type !== TSESTree.AST_NODE_TYPES.JSXIdentifier
          || name.object.name !== "React"
          || name.property.name !== "Fragment") {
          return;
        }

        if (mode === "syntax") {
          reportSyntaxPreferred(node, "React.Fragment");
        }
      },
      JSXFragment(node) {
        if (mode === "element") {
          context.report({
            node,
            message: "Use '<React.Fragment>...</React.Fragment>' instead of shorthand '<>...</>'.",
            fix: (fixer) => [
              fixer.replaceText(node.openingFragment, "<React.Fragment>"),
              fixer.replaceText(node.closingFragment, "</React.Fragment>")
            ]
          });
        }
      }
    };
  };
}

/** Options for {@link jsxNoDuplicateProps}. */
interface JsxNoDuplicatePropsOptions {

  /** Whether to ignore case when checking for duplicate props. */
  ignoreCase?: boolean;
}

/** Disallow duplicate properties in JSX. */
function jsxNoDuplicateProps(options: JsxNoDuplicatePropsOptions = {}): RuleFunction {
  const { ignoreCase: isIgnoreCase = false } = options;

  return (context) => ({
    JSXOpeningElement(node) {
      const seen = new Map<string, string>();

      // ─── Check each attribute ──────────────────────
      for (const attr of node.attributes) {
        if (attr.type !== TSESTree.AST_NODE_TYPES.JSXAttribute) {
          continue;
        }

        if (attr.name.type !== TSESTree.AST_NODE_TYPES.JSXIdentifier) {
          continue;
        }

        const name = isIgnoreCase ? attr.name.name.toLowerCase() : attr.name.name;

        // › Report duplicate
        if (seen.has(name)) {
          context.report({
            node: attr,
            message: `Duplicate prop "${attr.name.name}" found.`
          });
        } else {
          seen.set(name, attr.name.name);
        }
      }
    }
  });
}

const reactKitConfig: Linter.Config = eslintReactKit()
  .use(jsxBooleanValue)
  .use(jsxFragments, { mode: "element" })
  .use(jsxNoDuplicateProps)
  .getConfig();

export default reactKitConfig;
