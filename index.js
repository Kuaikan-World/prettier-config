/**
 * 详细配置项
 * @see https://prettier.io/docs/en/options.html
 */
module.exports = {
  printWidth: 100, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: true, // 句末使用分号
  vueIndentScriptAndStyle: false, // 不对vue中的script及style标签缩进
  singleQuote: true, // 使用单引号
  quoteProps: "as-needed", // 仅在必需时为对象的key添加引号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  trailingComma: "none", // 多行时取消打印尾随逗号
  jsxSingleQuote: false, // 多属性html标签的‘>’折行放置
  arrowParens: "always", // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  insertPragma: false, // 在已被prettier格式化的文件顶部加上标注
  requirePragma: false, // 无需顶部注释即可格式化
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict", // 对HTML全局空白不敏感
  endOfLine: "auto",
};
