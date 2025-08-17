import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import eslintJsoncPlugin from 'eslint-plugin-jsonc';
import { globalIgnores } from 'eslint/config';

import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const baseLanguageOptions = (project) => ({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
      project: project,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    prettier: eslintPrettierPlugin,
  },
  rules: {
    ...tseslint.configs.recommendedTypeChecked.rules,
    ...tseslint.configs.stylisticTypeChecked.rules,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'prettier/prettier': 'warn',
  },
});

export default tseslint.config([
  globalIgnores(['dist', 'node_modules', 'package.json', 'package-lock.json', 'test-results']),

  {
    files: ['**/*.{js,cjs,mjs,ts,tsx,jsx}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.node, ...globals.browser, ...globals.jest, React: 'readonly' },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: eslintPrettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'warn',
    },
  },

  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    ...baseLanguageOptions('./tsconfig.app.json'),
  },

  {
    files: ['test/unit/**/*.{ts,tsx,js,jsx}'],
    ...baseLanguageOptions('./tsconfig.test.json'),
  },

  {
    files: ['vite.config.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  reactX.configs['recommended-typescript'],
  reactDom.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    plugins: {
      jsonc: eslintJsoncPlugin,
      prettier: eslintPrettierPlugin,
    },
    languageOptions: {
      parser: eslintJsoncPlugin,
      parserOptions: {
        jsonSyntax: 'JSON5',
      },
    },
    rules: {
      'prettier/prettier': 'warn',
      'jsonc/no-dupe-keys': 'error',
      'jsonc/sort-keys': 'error',
      'jsonc/array-bracket-spacing': ['warn', 'never'],
    },
  },

  eslintConfigPrettier,
]);
