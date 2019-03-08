 /**
  * 2019-02-22 created by LG
  * 基础配置：可用于开发，生产，测试
  */
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const utils = require('./util')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

let webpackConfig = {
  context: utils.resolve(''),
  entry: {
    ...utils.getEntrys('src/modules')
  },
  output: {
    path: config.build.assetsRoot,
    filename:'[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue'], // 解析的文件规则
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('src')
    }
  },
  externals:{//不进行打包的模块，即不进行打包的目录，通过cdn引入的文件，增加全局变量配置
  },
  module:{
    rules:[
      ...utils.createEs5PlusRule(config.dev.useEs5plus), // 配置babel
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: utils.resolve('static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
}
webpackConfig.plugins = webpackConfig.plugins.concat([...utils.createTpl('src/modules')])

module.exports = webpackConfig