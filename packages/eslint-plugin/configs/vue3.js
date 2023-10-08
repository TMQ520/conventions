/*
 * @Description:
 * @Date: 2023-10-03 14:21:43
 * @Author: ranqirong 274544338@qq.com
 */
module.exports = {
  extends: [
    ...[
      '../rules/import/index.js',
      '../rules/javascript/index.js',
      '../rules/typescript/index.js',
      '../rules/vue3/index.js'
    ].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended'
  ],
  plugins: ['@awawa/eslint-plugin'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
