import globals from "globals";
import baseConfig from "./base.js";

export default [
  ...baseConfig,

  // Node Only
  { languageOptions: { globals: globals.node } }
];
