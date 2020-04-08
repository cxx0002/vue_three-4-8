module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "indent": ["off", 2]
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

}
