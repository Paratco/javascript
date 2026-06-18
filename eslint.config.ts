import { createConfig } from "./src";

export default createConfig({
  platform: "node",
  style: "stylistic",
  useImport: true,
  typescript: {
    project: "tsconfig.json",
    tsconfigRootDir: import.meta.dirname
  },

  ignores: ["dist"]
});
