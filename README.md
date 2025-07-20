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

## Using oxlint alongside ESLint

[oxlint](https://oxc-project.github.io/) is a fast JavaScript/TypeScript linter written in Rust that can be used alongside ESLint to improve performance and catch additional issues. This package supports using both linters together.

### Installation

Install oxlint alongside ESLint:

NPM:
```bash
npm install --save-dev --save-exact oxlint@1.7.0 eslint-plugin-oxlint@1.7.0
```

Yarn:
```bash
yarn add -D -E oxlint@1.7.0 eslint-plugin-oxlint@1.7.0
```

note: Ensure you have the latest and exact version of oxlint and eslint-plugin-oxlint installed.

### Configuration

1. Create an `.oxlintrc.json` file with @oxlint/migrate:

```bash
# version match with oxlint installed before
npx @oxlint/migrate@1.7.0
```
This will generate or update your `.oxlintrc.json` file based on your ESLint configuration. The tool analyzes your ESLint config and converts compatible rules to their oxlint equivalents.

2. Update your `package.json` scripts to run both linters (run oxlint first for performance):

```json
{
  "scripts": {
    "lint": "oxlint --max-warnings=0 && eslint --max-warnings=0",
    "lint:fix": "oxlint --fix && eslint --fix"
  }
}
```

3. integrate oxlint with ESLint by adding the ESLint plugin to your configuration:

```javascript
import { createConfig } from "@paratco/eslint-config";
import oxlintPlugin from "eslint-plugin-oxlint";

export default createConfig({
  platform: "node", // or "react"
  style: "prettier", // or "stylistic"

  // Add oxlint plugin as the LAST item in your overrides
  // This ensures ESLint rules that are handled by oxlint are turned off
  overrides: [
    // Your other overrides go here
    
    // eslint-plugin-oxlint must be the last config
    ...oxlintPlugin.configs["flat/all"]
  ]
});
```

### Running Linters

Run both linters with a single command:

```bash
npm run lint
# or
yarn lint
```

Fix issues automatically when possible:

```bash
npm run lint:fix
# or
yarn lint:fix
```

### Benefits of Using Both Linters

- **Performance**: oxlint is significantly faster than ESLint, especially on large codebases
- **Complementary Rules**: Each linter has unique rules that can catch different issues
- **Gradual Migration**: You can gradually migrate from ESLint to oxlint or use both permanently
- **Modern JavaScript Support**: oxlint has excellent support for modern JavaScript and TypeScript features

## License

Licensed under [MIT License](./LICENSE)
