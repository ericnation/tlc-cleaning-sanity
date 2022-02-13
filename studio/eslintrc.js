module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'prettier',
    'airbnb-base',
    'plugin:prettier/recommended',
    '@sanity/eslint-config-studio'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'arrow-body-style': 'warn',
    'line-break-style': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100
      }
    ]
  }
};
