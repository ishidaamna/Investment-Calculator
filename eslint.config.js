import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import configPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Base ESLint recommended config
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    ...configPrettier
  }
]);
