module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/recommended',
      '@vue/standard',
      '@vue/typescript'
    ],
    rules: {
        'vue/no-unused-vars': 'off'
      }
  };