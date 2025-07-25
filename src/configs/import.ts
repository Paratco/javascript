import { flatConfigs as importXFlatConfigs } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import unusedImports from "eslint-plugin-unused-imports";

// Custom Rules
import type { Linter } from "eslint";
import type { TypeScriptResolverOptions } from "eslint-import-resolver-typescript";
import importXRules from "../rules/import";
import type { TypescriptOptions } from "../types";

export default function importConfig(typescript?: TypescriptOptions): Linter.Config[] {
  const resolverOptions: TypeScriptResolverOptions = { alwaysTryTypes: true };

  if (typescript !== undefined) {
    resolverOptions.project = typescript.project;
  }

  return [
    importXFlatConfigs.recommended,
    importXFlatConfigs.typescript,

    // ESLint Plugin Import
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      plugins: {
        "unused-imports": unusedImports
      },
      settings: {
        "import-x/resolver-next": [createTypeScriptImportResolver(resolverOptions)]
      },
      rules: {
        ...importXRules,

        // unused-imports
        "no-unused-vars": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "unused-imports/no-unused-imports": ["error"],
        "unused-imports/no-unused-vars": [
          "error",
          {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            ignoreRestSiblings: true
          }
        ]
      }
    }
  ] as Linter.Config[];
}
