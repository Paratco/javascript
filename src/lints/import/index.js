export default {
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
  // Forbid imported names marked with @deprecated documentation tag.
  "import/no-deprecated": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
  // Forbid empty named import blocks.
  "import/no-empty-named-blocks": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
  // Forbid the use of extraneous packages.
  "import/no-extraneous-dependencies": [
    "error",
    { devDependencies: false, optionalDependencies: false, peerDependencies: false }
  ],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
  // Forbid the use of mutable exports with var or let.
  "import/no-mutable-exports": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
  // Forbid modules without exports, or exports without matching import in another module.
  // TODO: Can be enabled
  "import/no-unused-modules": ["off", { missingExports: true }],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
  // Forbid AMD require and define calls.
  "import/no-amd": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
  // Forbid CommonJS require calls and module.exports or exports.*.
  "import/no-commonjs": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
  // Forbid import statements with CommonJS module.exports.
  "import/no-import-module-exports": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
  // Forbid Node.js builtin modules.
  // TODO: Can enable for front-end
  "import/no-nodejs-modules": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
  // Forbid potentially ambiguous parse goal (script vs. module).
  "import/unambiguous": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
  // Forbid import of modules using absolute paths.
  "import/no-absolute-path": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
  // Forbid a module from importing a module with a dependency path back to itself.
  "import/no-cycle": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
  // Forbid require() calls with expressions.
  "import/no-dynamic-require": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
  // Forbid importing the submodules of other modules.
  // TODO: Must define in the project
  "import/no-internal-modules": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
  // Forbid importing packages through relative paths.
  "import/no-relative-packages": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
  // Forbid importing modules from parent directories.
  "import/no-relative-parent-imports": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
  // Enforce which files can be imported in a given folder.
  // TODO: Can be customized
  // "import/no-restricted-paths": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
  // Forbid a module from importing itself.
  "import/no-self-import": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
  // Forbid unnecessary path segments in import and require statements.
  "import/no-useless-path-segments": [
    "warn",
    {
      noUselessIndex: true
    }
  ],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
  // Forbid webpack loader syntax in imports.
  "import/no-webpack-loader-syntax": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
  // Enforce or ban the use of inline type-only markers for named imports.
  "import/consistent-type-specifier-style": ["warn", "prefer-top-level"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
  // Enforce a leading comment with the webpackChunkName for dynamic imports.
  "import/dynamic-import-chunkname": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
  // Ensure all exports appear after other statements.
  // TODO: Can be enabled
  "import/exports-last": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
  // Ensure consistent use of file extension within the import path.
  "import/extensions": ["error", "never"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
  // Ensure all imports appear before other statements.
  "import/first": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
  // Prefer named exports to be grouped together in a single export declaration
  // TODO: Can be enabled
  "import/group-exports": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
  // Enforce the maximum number of dependencies a module can have.
  "import/max-dependencies": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
  // Enforce a newline after import statements.
  "import/newline-after-import": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
  // Forbid anonymous values as default exports.
  "import/no-anonymous-default-export": ["error"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
  // Forbid default exports.
  "import/no-default-export": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
  // Forbid named default exports.
  "import/no-named-default": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
  // Forbid named exports.
  "import/no-named-export": ["off"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
  // Forbid namespace (a.k.a. "wildcard" *) imports.
  "import/no-namespace": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
  // Forbid unassigned imports
  "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
  // Enforce a convention in module import order.
  "import/order": ["warn"],

  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
  // Prefer a default export if module exports a single name or multiple names.
  "import/prefer-default-export": ["off"]
};
