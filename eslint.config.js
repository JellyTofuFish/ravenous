import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: ["./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["vite.config.ts"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: "./tsconfig.node.json",
      },
    },
  },
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.node, ...globals.browser },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  {
    files: ["**/*.json"],
    language: "json/json",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.jsonc"],
    language: "json/jsonc",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.json5"],
    language: "json/json5",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.md"],
    language: "markdown/gfm",
    ...markdown.configs.recommended,
  },
  {
    files: ["**/*.css"],
    language: "css/css",
    ...css.configs.recommended,
  },
  eslintConfigPrettier,
  reactX.configs["recommended-typescript"],
  reactDom.configs.recommended,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
]);
