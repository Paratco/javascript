import oxlint from "eslint-plugin-oxlint";
import type { Linter } from "eslint";
import globals from "globals";
import type { TSESLint } from "@typescript-eslint/utils";
import reactPlugin from "eslint-plugin-react";
import nodeConfig from "./configs/node";
import reactConfig from "./configs/react";
import importConfig from "./configs/import";
import prettierFormatter from "./configs/prettierFormatter";
import stylisticFormatter from "./configs/stylisticFormatter";

interface TypescriptOptions {
  tsconfigRootDir?: string;
  project?: string | string[] | boolean;
}

interface Options {
  platform: "node" | "react";
  style: "stylistic" | "prettier";
  useImport?: boolean;
  useOxc?: boolean;
  overrides?: Linter.Config[];
  ignores?: string[];
  typescript?: TypescriptOptions;
}

function node(typescript?: TypescriptOptions): TSESLint.FlatConfig.Config["languageOptions"] {
  return {
    globals: globals.node,
    parserOptions: {
      ecmaVersion: "latest",
      tsconfigRootDir: typescript?.tsconfigRootDir,
      project: typescript?.project
    }
  };
}

function react(typescript?: TypescriptOptions): TSESLint.FlatConfig.Config["languageOptions"] {
  return {
    ...reactPlugin.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser
    },
    parserOptions: {
      tsconfigRootDir: typescript?.tsconfigRootDir,
      project: typescript?.project
    }
  };
}

export function createConfig(opt: Options): Linter.Config[] {
  let config: Linter.Config[];

  if (opt.platform === "node") {
    config = nodeConfig;

    config.push({
      files: ["**/*.{ts,js}"],
      languageOptions: node(opt.typescript) as unknown as Linter.LanguageOptions
    });
  } else {
    config = reactConfig;

    config.push({
      files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
      languageOptions: react(opt.typescript) as unknown as Linter.LanguageOptions
    });
  }

  if (opt.useImport === true) {
    config.push(...importConfig);
  }

  config.push(...(opt.style === "stylistic" ? stylisticFormatter : prettierFormatter));

  if (opt.overrides !== undefined) {
    config.push(...opt.overrides);
  }

  if (opt.ignores !== undefined) {
    config.push({ ignores: opt.ignores });
  }

  if (opt.useOxc === true) {
    config.push(...oxlint.configs["flat/all"]);
  }

  return config;
}
