/**
 *  2019-02-22  created by LG
 *  主要配置一些像loaders以及静态目录解析路径的工具 
 * */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

const path = require('path')
const fs   = require('fs')

const config = require('../config')

 /* 解析目标文件绝对路径 */
 exports.resolve = (dir) => {
   return path.resolve(__dirname, '..', dir)
 }

 /**解析静态文件目录 */
 exports.assetsPath = (dir) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
  ? config.build.assetsSubDirectory
  : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, dir)
 }

 /* 解析模块入口信息 */
 exports.getEntrys = (dir) => {
  let entry = {}
  let modulePath = exports.resolve(dir)
  let moduleInfo = fs.readdirSync(modulePath)
  moduleInfo.forEach(module => {
    entry[module] = path.join(modulePath, `${module}`, 'index.js')
  })
  return entry
 }

 /* 生成html模板文件 */
 exports.createTpl = (dir) => {
  let modulePath = exports.resolve(dir)
  let moduleInfo = fs.readdirSync(modulePath)
  return moduleInfo.map(module => {
    return new HtmlWebpackPlugin({
      filename: `${module}/index.html`,
      template: exports.resolve('index.html'),
      inject: true,
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      hash: true,
      title:`${module}`,
      chunks: ['vendor', 'mainfest', 'common',  `${module}`]
    })
  }) 
 }

 /**
  * 生成eslint校验规则
  */
 exports.createEslintRule = (eslint) => {
   if(!eslint) return []
   return [{
     test: /\.(js|vue)$/,
     loader: 'eslint-loader',
     enforce: 'pre',
     exclude: /node_modules/,
     include: [exports.resolve('src'), exports.resolve('test')],
     options:{
      formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
      emitWarning: config.dev.showEslintErrorsInOverlay
     }
   }]
 }

 /**
  * 配置babel，解析es5以上语法
  */
 exports.createEs5PlusRule = (es5Plus) => {
  if(!es5Plus) return []
  return [{
    test:/\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    include: [exports.resolve('src'), exports.resolve('test'), exports.resolve('node_modules/webpack-dev-server/client')]
  }]
 }

 /**
  * cssloaders
  */
exports.cssLoaders = (option) => {
  option = option || {}

  const cssloader = {
    loader: 'css-loader',
    options: {
      sourceMap: option.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: option.sourceMap
    }
  }
  
  const generatorLoader = (loadername, opt) => {
    let loaders = option.usePostCSS ? [cssloader, postcssLoader] : [cssloader]
    if(loadername){
      loaders.push({
        loader: loadername + '-loader',
        options: Object.assign({}, opt, {
          sourceMap: option.sourceMap
        })
      })
    }
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if(option.extract){
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader' // 由于使用vue开发，使用此loader;其它情况使用style-loader
      }) 
    } else {
      // 由于使用vue开发，使用此loader;其它情况使用style-loader
      return ['vue-style-loader'].concat(loaders)
    }
  }
  return {
    css: generatorLoader(),
    sss: generatorLoader(),
    less: generatorLoader('less'),
    sass: generatorLoader('sass', { indentedSyntax: true }),
    scss: generatorLoader('sass'),
    stylus: generatorLoader('stylus'),
    styl: generatorLoader('stylus')
  }
}

/**
* 生成loader配置
*/
exports.styleLoader = (option) => {
  let output = []
  const loaders = exports.cssLoaders(option)
  for(let key in loaders){
    output.push({
      test: new RegExp('\\.'+key+'$'),
      use: loaders[key]
    })
  }
  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
