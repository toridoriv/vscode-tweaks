import { eslintConfig } from "@toridoriv/eslint-config";

eslintConfig.ignorePatterns[0].ignores?.push("dist/");

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  ...eslintConfig.ignorePatterns,
  ...eslintConfig.javascript.node,
  ...eslintConfig.typescript,
  ...eslintConfig.jsdoc,
  ...eslintConfig.json,
  ...eslintConfig.prettier,
];
