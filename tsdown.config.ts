// eslint-disable-next-line import-x/no-extraneous-dependencies
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  platform: "node",
  target: "node22",
  minify: true,
  sourcemap: true
});
