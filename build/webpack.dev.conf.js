/**
  * 2019-02-22 created by LG
  * 基础配置：用于开发环境
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const config = require('../config')
const util = require('./util')
const baseWebpackConfig = require('./webpack.base.conf')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig  = merge(baseWebpackConfig, {
  module: {
    rules: [
      ...util.createEslintRule(config.dev.useEslint), // 配置eslint语法检查
      ...util.styleLoader({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    ]
  },
  devtool: config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }
      ]
    },
    hot: false,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll
    },
    disableHostCheck: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}/${config.dev.startModule}`]
        },
        onErrors: config.dev.notifyOnErrors
          ? util.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})