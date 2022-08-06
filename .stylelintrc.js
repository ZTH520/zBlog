module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  ignoreFiles: [], // 忽略某些不想被检查的文件
  rules: {
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'color-hex-length': 'long',
  },
};
