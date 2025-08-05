import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
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
  },
  rules: {
    ...tseslint.configs.recommendedTypeChecked.rules,
    ...tseslint.configs.stylisticTypeChecked.rules,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
});

export default tseslint.config([
  globalIgnores(['dist', 'node_modules', 'package-lock.json', '**/*.config.*', '**/*.json']),

  js.configs.recommended,

  {
    files: ['**/*.{js,cjs,mjs,ts,tsx,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.node, ...globals.browser, ...globals.jest },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    files: ['src/**/*.{ts,tsx}'],
    ...baseLanguageOptions('./tsconfig.app.json'),
  },

  {
    files: ['test/unit/**/*.{ts,tsx}'],
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
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  eslintConfigPrettier,
]);
