// eslint-disable-next-line import-x/no-extraneous-dependencies
import oxlint from "eslint-plugin-oxlint";
import { createConfig } from "./src";

export default createConfig({
  platform: "node",
  style: "stylistic",
  useImport: true,
  typescript: {
    project: "tsconfig.json",
    tsconfigRootDir: "./"
  },
  overrides: [...oxlint.configs["flat/all"]],
  ignores: ["dist"]
});
