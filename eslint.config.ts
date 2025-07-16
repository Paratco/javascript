import { createConfig } from "./src";

export default createConfig({
  platform: "node",
  style: "stylistic",
  useImport: true,
  useOxc: true,
  typescript: {
    project: true,
    tsconfigRootDir: "./"
  },
  ignores: ["dist"]
});
