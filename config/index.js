/**
 * 2019-02-22  created by LG
 * 用于配置开发环境和生产环境的相关配置，如：日志，静态目录，开发服务器等
 */
const path = require('path')

module.exports = {
  'dev': {
    // Paths
    'assetsSubDirectory': 'static',
    'assetsPublicPath': '/',

    // https://webpack.js.org/configuration/devtool/#development
    'devtool': 'cheap-module-eval-source-map',

    proxyTable: {
      '/cmsapp': {
        target: 'http://cmsapp.biyao.com',
        changeOrigin: true,
        pathRewrite: {
          '^/cms': ''
        }
      }
    },

     // Various Dev Server settings
     host: '127.0.0.1', // can be overwritten by process.env.HOST
     port: 80, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
     startModule: 'home',
     autoOpenBrowser: false,
     errorOverlay: true,
     notifyOnErrors: true,
     poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    'useEslint': false, // 是否使用eslint来检查代码
    'useEs5plus': true, // 是否使用es5以上的语法
    // If true, eslint errors and warnings will also be shown in the error overlay in the browser.
    'showEslintErrorsInOverlay': true,
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    'cacheBusting': true,
    'cssSourceMap': true
  },
  'build':{
    // Paths
    'assetsRoot': path.resolve(__dirname, '../dist'),
    'assetsSubDirectory': 'static',
    'assetsPublicPath': '/dist/',
    
    // https://webpack.js.org/configuration/devtool/#production
    'devtool': '#source-map',
    'productionSourceMap': false,

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}