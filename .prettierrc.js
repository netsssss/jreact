module.exports = {
    printWidth: Infinity, // 单行长度
    tabWidth: 4, // 缩进长度
    useTabs: false, // 使用空格代替tab缩进
    semi: false, // 句末使用分号
    singleQuote: true, // 使用单引号
    jsxSingleQuote: true, // jsx使用单引号
    quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
    trailingComma: 'none', // 多行时尽可能打印尾随逗号
    bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
    arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
    bracketSameLine: true, // 多属性html标签的‘>’不折行放置
    endOfLine: 'lf', // 结束行形式
    embeddedLanguageFormatting: 'off' // 对引用代码进行格式化
}
