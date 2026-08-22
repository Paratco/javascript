import { createConfig } from "./src";

export default createConfig({
  platform: "node",
  style: "stylistic",
  useImport: true,
  typescript: {
    project: "tsconfig.json",
    tsconfigRootDir: import.meta.dirname
  },

  // tests/fixtures holds files that violate rules on purpose
  ignores: ["dist", "tests/fixtures"]
});
