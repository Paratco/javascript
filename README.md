# `@paratco/eslint-config`
Paratco ESLint configs for JavaScript and TypeScript projects.
- TypeScript
- React (optional)
- Node.js
- Import plugin (optional)
- Stylistic or Prettier formatting
## Installation
NPM:
```bash
# prettier is optional, just use it if you want to use prettier formatting
npm install --save-dev @paratco/eslint-config eslint prettier
```
Yarn:
```bash
# prettier is optional, just use it if you want to use prettier formatting
yarn add -D @paratco/eslint-config eslint prettier
```
Bun:
```bash
# prettier is optional, just use it if you want to use prettier formatting
bun add -d @paratco/eslint-config eslint prettier
```
## Usage (ESLint Flat Config)
Create an `eslint.config.{js,mjs,ts}` file in your project root:
```javascript
import { createConfig } from "@paratco/eslint-config";
export default createConfig({
  // Required: Specify the platform
  platform: "node", // or "react"
  // Required: Choose your formatting style
  style: "prettier", // or "stylistic"
  // Optional: Enable import plugin rules
  useImport: true,
  // Optional: TypeScript configuration
  typescript: {
    tsconfigRootDir: import.meta.dirname,
    project: "./tsconfig.json"
  },
  // Optional: Add custom overrides
  overrides: [
    // Your custom ESLint configurations
  ],
  // Optional: Specify patterns to ignore
  ignores: ["dist/**", "node_modules/**"]
});
```
## Configuration Options
The `createConfig` function accepts an options object with the following properties:
| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `platform` | `"node" \| "react"` | Yes | - | Specifies the platform for the ESLint configuration |
| `style` | `"stylistic" \| "prettier"` | Yes | - | Specifies the style formatter to use |
| `useImport` | `boolean` | No | `false` | Enable import plugin rules |
| `files` | `string[]` | No | `undefined` | Scope all rules to these file globs only |
| `typescript` | `TypescriptOptions` | No | `undefined` | TypeScript configuration options |
| `overrides` | `Linter.Config[]` | No | `undefined` | Additional ESLint configurations to override defaults |
| `ignores` | `string[]` | No | `undefined` | Patterns to ignore |
### TypeScript Options
| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `tsconfigRootDir` | `string` | No | `undefined` | The root directory for TypeScript configuration |
| `project` | `string \| string[]` | No | `undefined` | Path to tsconfig.json file(s) |
## Examples
### Node.js Configuration
```javascript
import { createConfig } from "@paratco/eslint-config";
export default createConfig({
  platform: "node",
  style: "prettier",
  typescript: {
    tsconfigRootDir: import.meta.dirname,
    project: "./tsconfig.json"
  }
});
```
### React Configuration
```javascript
import { createConfig } from "@paratco/eslint-config";
export default createConfig({
  platform: "react",
  style: "stylistic",
  useImport: true,
  typescript: {
    tsconfigRootDir: import.meta.dirname,
    project: "./tsconfig.json"
  }
});
```
### JavaScript-only Configuration
```javascript
import { createConfig } from "@paratco/eslint-config";
export default createConfig({
  platform: "node",
  style: "prettier"
});
```
### Scoping Rules to Specific Directories
Use the `files` option to restrict all rules to a specific set of file globs. This is useful when a single ESLint config covers multiple platforms (e.g. an Electron app with a renderer and a main process each targeting a different `tsconfig.json`), or when working in a monorepo where different sub-trees have different configs.
When `files` is provided, `createConfig` internally wraps the returned configs with [`eslint.defineConfig()`](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file) so that all plugin registrations and rules are correctly scoped — no extra wrapper is needed in your config file.
```javascript
import { createConfig } from "@paratco/eslint-config";
export default [
  // Renderer process — React + browser globals
  ...createConfig({
    files: ["./src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    platform: "react",
    style: "stylistic",
    useImport: true,
    typescript: {
      tsconfigRootDir: import.meta.dirname,
      project: "./tsconfig.app.json"
    }
  }),
  // Main process — Node.js globals
  ...createConfig({
    files: ["./electron/**/*.{js,mjs,cjs,ts}"],
    platform: "node",
    style: "stylistic",
    useImport: true,
    typescript: {
      tsconfigRootDir: import.meta.dirname,
      project: "./tsconfig.electron.json"
    }
  }),
  {
    ignores: ["dist", "dist-electron", ".vite"]
  }
];
```
> **Note:** When `files` is used and multiple `createConfig` calls are combined, spread each result (`...createConfig(...)`) into the top-level array instead of returning a single `createConfig` call directly.
## License
Licensed under [MIT License](./LICENSE)
