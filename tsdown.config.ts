// eslint-disable-next-line import-x/no-extraneous-dependencies
import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "./src/index.ts",
    platform: "node",
    target: "node22",
    minify: true,
    sourcemap: true
  },
  {
    entry: ["./src/cli.ts"],
    platform: "node",
    target: "node22",
    dts: false,
    minify: true,
    sourcemap: true
  }
]);
