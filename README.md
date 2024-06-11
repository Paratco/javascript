# `@paratco/eslint-config`

Paratco ESLint configs

- Typescript
- React (optional)

### Installation

NPM:
```bash
npm install --save-dev @paratco/eslint-config eslint prettier typescript-eslint
```

Yarn:
```bash
yarn add -D @paratco/eslint-config eslint prettier typescript-eslint
```

### Usage (Flat config):

Node.JS:
```javascript
import paratcoEslintConfig from "@paratco/eslint-config";

export default [
  ...paratcoEslintConfig.node,
];
```

React:
```javascript
import paratcoEslintConfig from "@paratco/eslint-config";

export default [
  ...paratcoEslintConfig.react,
];
```

Base (JS + TS rules):
```javascript
import paratcoEslintConfig from "@paratco/eslint-config";

export default [
  ...paratcoEslintConfig.base,
];
```
