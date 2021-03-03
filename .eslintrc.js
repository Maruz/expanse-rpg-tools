const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@emotion', 'jsx-a11y', 'prettier', 'react', '@typescript-eslint'],
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    '@emotion/syntax-preference': ['error', 'object'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['app', './src']],
      },
      webpack: {
        config: path.resolve(__dirname, 'webpack.common.js'),
      },
    },
    react: {
      version: 'detect',
    },
  },
};
