/**
 * 配置postcss
*/
// 配置参考：https://github.com/lvzhenbang/webpack-play/blob/master/doc/first/postcss.md
module.exports = {
  // parser: 'postcss-scss',
  plugins:{
    'precss': {}, // 允许在css文件中使用sass语法
    'postcss-plugin-px2rem':{ rootValue: 14, minPixelValue: 2},
    'postcss-quantity-queries':{} //数量查询
  }
}