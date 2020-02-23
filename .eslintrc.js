module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi': 'error',
    'import/order': ['error', {"newlines-between": "always-and-inside-groups"}],
  }
};