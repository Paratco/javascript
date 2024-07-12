import globals from "globals";
import baseConfig from "./base.js";
import importConfig from "./import.js";

export default [
  ...baseConfig,
  ...importConfig,

  // Node Only
  { languageOptions: { globals: globals.node } }
];
