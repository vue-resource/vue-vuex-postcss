
/**
 * 2019-02-22  created by LG
 * 用于配置eslint的校验规则，统一团队编码风格
 */

module.exports = {
  "root":true, // 限定配置文件的使用范围
  "env": { // 指定代码运行的宿主环境
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "extends": [// 指定第三方eslint规范 也可以使用 standard / google
    "standard"
  ], 
  "parserOptions": { // 设置解析器选项
    "parser": "babel-eslint",// 指定eslint的解析器
    "ecmaVersion": 5,
    "sourceType": "module"
  },
  "plugins":[//引用第三方的插件
    "vue"
  ],
	"settings": {
    // 对于这种用 eslint-pulgin-html 扩展的的文件我们可以使用 eslint --ext .html,.vue src 进行检测，
    // 如果想要在开发中边写边检测，我们可以使用相应文件的loader进行处理。
    'html/html-extensions': ['.html', '.vue'],
    'html/indent': '+2',
  },
  "rules": {// 启用额外的规则或覆盖默认的规则
    "no-console": "off",
    "indent": [ "error", 2],// 2个缩进
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "single"],// 强制使用单引号
    "semi": ["error","never"], // 结尾是否使用分号
    "eol-last": "off",
    "no-trailing-spaces":"off",
    "no-multiple-empty-lines":"off",
    "no-new":"off"
  },
  "globals":{ // 声明在代码中的自定义全局变量,比如引入juwery,用变量$访问
    $: true
  }
}