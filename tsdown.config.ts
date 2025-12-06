// eslint-disable-next-line import-x/no-extraneous-dependencies
import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "./src/index.ts",
    format: {
      cjs: {},
      esm: {}
    },
    dts: false,
    platform: "node",
    target: "node22",
    minify: true,
    sourcemap: true
  },
  {
    entry: "./src/index.ts",
    dts: {
      oxc: true,
      emitDtsOnly: true
    },
    outputOptions: {
      entryFileNames: "[name].js"
    },
    target: false
  }
]);
