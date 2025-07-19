// Plugins
import reactPlugin from "eslint-plugin-react";
import { configs as reactHooksConfigs } from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

// Custom Rules
import type { Linter } from "eslint";
import reactRules from "../rules/react";
import baseConfig from "./base";

export default [
  ...baseConfig,
  reactHooksConfigs["recommended-latest"],
  reactRefreshPlugin.configs.recommended,

  // React Plugin
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,

    // todo: remove settings if not needed in react
    // settings: {
    //   react: {
    //     version: "detect"
    //   }
    // },
    rules: {
      ...reactRules
    }
  }
] as Linter.Config[];
