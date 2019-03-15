/**
 * 配置postcss
*/
// 配置参考：https://github.com/lvzhenbang/webpack-play/blob/master/doc/first/postcss.md
//  https://segmentfault.com/a/1190000010926812
//  https://github.com/whidy/postcss-study/blob/master/PostCSS%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.md
//  https://github.com/whidy/postcss-study/blob/master/PostCSS%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%972.md
module.exports = {
  parser: 'postcss-scss',
  plugins:{
    'precss': {}, // 允许在css文件中使用sass语法
    'postcss-plugin-px2rem':{ rootValue: 14, minPixelValue: 2},
    'postcss-quantity-queries':{} //数量查询
  }
}