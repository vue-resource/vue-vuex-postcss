/**
  * 2019-02-22 created by LG
  * 基础配置：用于生产环境
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const util = require('./util')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')


const prodWebpackConfig  = merge(baseWebpackConfig, {
  module:{
    rules:[
      ...util.styleLoader({
        sourceMap: config.build.productionSourceMap,
        extract: true,
        usePostCSS: true
      })
    ]
  },
  output: {
    path: config.build.assetsRoot,
    // filename: `${'[name]/'}${utils.assetsPath('js/[name].[chunkhash].js')}`,
    // chunkFilename: `${'[name]/'}${utils.assetsPath('js/[id].[chunkhash].js')}`
    filename: util.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: util.assetsPath('js/[id].[chunkhash].js')
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
    new CleanWebpackPlugin(['dist'], {
      root: util.resolve(''), // 找到删除的根目录
      dry: false, // 这是主要功能了，为false是删除文件夹的，为true是不删除的，默认值是false
      exclude: ['static/mock'], //排除不删除的目录，主要用于避免删除公用的文件
      beforeEmit: true //在文件被发送到输出目录之前执行clean操作,默认值:false
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      test: /\.js(\?.*)?$/i,
      exclude: /\/node_modules/,
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    new ExtractTextPlugin({
      // filename: `${'[name]/'}${utils.assetsPath('css/[name].[contenthash].css')}`,
      filename: util.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module runtime to its own file in order to
    // prevent vendor hash from being updated whenever common bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      async: 'vendor-async',
      children: true,
      minChunks: 2
    })
  ]
})

// 生成压缩包
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  prodWebpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

// 生成打包后的代码依赖报告 npm run build --report
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  // 正常情况下采用默认就行，不用传参数
  prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin({
    //  可以是`server`，`static`或`disabled`。
    //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
    //  在“静态”模式下，会生成带有报告的单个HTML文件。
    //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
    analyzerMode: 'static',
    //  将在“服务器”模式下使用的主机启动HTTP服务器。
    analyzerHost: '127.0.0.1',
    //  将在“服务器”模式下使用的端口启动HTTP服务器。
    analyzerPort: 8888, 
    //  路径捆绑，将在`static`模式下生成的报告文件。
    //  相对于捆绑输出目录。
    reportFilename: 'report.html',
    //  模块大小默认显示在报告中。
    //  应该是`stat`，`parsed`或者`gzip`中的一个。
    //  有关更多信息，请参见“定义”一节。
    defaultSizes: 'parsed',
    //  在默认浏览器中自动打开报告
    openAnalyzer: true,
    //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
    generateStatsFile: false, 
    //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
    //  相对于捆绑输出目录。
    statsFilename: 'stats.json',
    //  stats.toJson（）方法的选项。
    //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
    //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    statsOptions: null,
    logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
  }))
}

module.exports = prodWebpackConfig