// Plugins
import eslintReact from "@eslint-react/eslint-plugin";
import { configs as reactHooksConfigs } from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

// Custom Rules
import type { Linter } from "eslint";
import reactRules from "../rules/react";
import reactKitRules from "../rules/react_kit";
import baseConfig from "./base";

export default [
  ...baseConfig,
  reactHooksConfigs.flat["recommended-latest"],
  reactRefreshPlugin.configs.recommended,

  // React Plugin
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...eslintReact.configs["recommended-typescript"],

    rules: {
      ...reactRules
    }
  },

  // Custom React Kit Rules (self-contained flat config: plugin + rules)
  reactKitRules
] as Linter.Config[];
