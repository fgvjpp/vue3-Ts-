/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    //在rules中添加自定义规则
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
  },
  globals: {
    QC: true, // 因为QC是通过html的script引入的所有eslint无法检查到有QC全局变量  所以要手动添加给Eslint
  },
}
