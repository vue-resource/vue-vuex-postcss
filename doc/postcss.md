# postcss

  使用PostCSS自己并不完全是强大的，它的强大依赖于插件。

## 参考链接
- [PostCSS介绍] (https://www.cnblogs.com/terrylin/p/5229169.html)
- [cssModule] (https://segmentfault.com/a/1190000011595620)
- [css-modules] (https://github.com/FrankKai/FrankKai.github.io/issues/45)
- [precss深度使用] (https://www.w3cplus.com/PostCSS/postcss-deep-dive-preprocessing-with-precss.html)

## [plugins](https://github.com/postcss/postcss)

### autoprefixer (自动加前缀)
该插件可以让我们在样式中使用新的特性和属性，为属性和值添加前缀由它来完成
``` css
  /* 转换前*/ 
  .item{
    display:flex;
    flex-flow:row wrap;
  }
  /* 转换后*/
  .item{
    display:-webkit-flex;
    display:-ms-flexbox;
    display:-webkit-box;
    display:flex;
    -webkit-flex-flow:row wrap;
    -ms-flex-flow:row wrap;
    flex-flow:row wrap;
  }
```

### sheetify-cssnext(使用未来的css4语法)
CSS4将带来一些新的特性，如本地变量,自定义选择器 和新的伪类链接。CSSNext 可以把任意的CSS4特征或属性转换成浏览器可以解析的CSS3属性。
``` css
 :root {
    --fontSize: 1rem;
    --mainColor: #123456;
    --centered: {
      display: flex;
      align-items: center;
      justify-content: center;
    };
  }
  body {
    color: var(--mainColor);
    font-size: var(--fontSize);
    line-height: calc(var(--fontSize) * 1.5);
    padding: calc((var(--fontSize) / 2) + 1px);
  }
  .centered {
    @apply --centered; /*引入多段使用@apply*/
  }

```

### precss (在css文件中使用sass语法)
你可以在PostCSS中使用Sass的语法和Sass的工具。传统的CSS不支持变量，嵌套和引用，使用插件比如PreCSS 就可以让我们使用这些特性，这样我们就可以在传统的样式文件中使用Sass的语法。<br>
> PreCSS中的混合宏语法和Sass的有点不同。
> 在Sass中是通过@mixin mixin_name($arg1,$arg2){...}这样的语法来声明一个混合宏，然后使用@include mixin_name(pass_arg1,pass_arg2)来调用声明好的混合宏。
> 在PreCSS中，使用了另一个声明方式，使用@define-mixin mixin_name $arg1, $arg2 {...}来声明一个混合宏，然后使用@mixin mixin_name pass_arg1, pass_arg2;来调用声明好的混合宏。
``` css
  /* 变量 */
  $blue:#0000ff;
  $green:#00ff00;
  $radius:10px;
  .square{
    background:$blue;
    border-radius:$radius;
  }
  /* 引用 */
  @import "partials/_base.css";
  /* 混入（Mixins） */
  @define-mixin square $dimension{
    width:$dimension;
    height:$dimension;
  }
  /* 嵌套，变量和混入 */
  .button{
    @mixin square 200px;
    background:$green;
    &:hover{
      background:$blue;
    }
  }
  @define-mixin icon $network, $color { 
    .button.$(network) { 
      background-image: url('img/$(network).png'); 
      background-color: $color; 
    } 
  } 
  @mixin icon twitter, blue;

  /* @if @else */
  $column_layout: 2; 
  .column { 
    @if $column_layout == 2 { 
      width: 50%; 
      float: left; 
    } @else { 
      width: 100%; 
    } 
  }
  /*@for循环*/
  @for $i from 1 to 3 {
    p:nth-of-type($i) { 
      margin-left: calc( 100% / $i ); 
    } 
  }
  /* @each循环 */
  $social: twitter, facebook, youtube; 
  @each $icon in ($social){ 
    .icon-$(icon) { // 引用变量使用 $(变量名字)
      background: url('img/$(icon).png'); 
    } 
  }
  /* 扩展 */
  /* 展的想法是创建一个多次复用的代码块。在PreCSS中使用【@define-extend extend_name{...}】方式来声明扩展的代码块 */
  @define-extend rounded_button { 
    border-radius: 0.5rem; 
    padding: 1em; 
    border-width: 0.0625rem; 
    border-style: solid; 
  }
  .blue_button { 
    @extend rounded_button; 
    border-color: #2F74D1; 
    background-color: #3B8EFF; 
  } 
  .red_button { 
    @extend rounded_button; 
    border-color: #C41A1E; 
    background-color: #FF2025; 
  }
  /*转化后(注意是相同代码合并)*/
  .blue_button, .red_button { 
    border-radius: 0.5rem; 
    padding: 1em; 
    border-width: 0.0625rem;
     border-style: solid; 
  } 
  .blue_button { 
    border-color: #2F74D1;
     background-color: #3B8EFF;
  } 
  .red_button { 
    border-color: #C41A1E; 
    background-color: #FF2025; 
  }
  
```

###  postcss-quantity-queries （数量查询）
数量查询功能非常强大。他们允许我们在CSS中计算元素数量 ，从而基于兄弟元素的数量应用样式。
``` css
  // "至少"数量的兄弟元素应用样式
  .container > .item:at-least(5){
    background:blue;
  }
  // "最多"数量的兄弟元素应用样式
  .item > a:at-most(10){
    color:green;
  }
  // "范围"数量的兄弟元素应用样式
  .gallery > img:between(4,7){
    width:25%;
  }
  // "精确提供项"的兄弟元素应用样式
  .profiles:exactly(4){
    flex:1 0 50%;
  }
```

###  postcss-short(简写属性)
写样式更加有逻辑性。它让我们可以为position和size写简写属性，就像background和font属性可以凝聚成一个单一的声明
``` css
/* text属性包括这些输入属性：color,font-style,font-variant,font-weight,font-stretch,text-decoration,text-align,text-rendering,text-transform,white-space,font-size,line-height,letter-spacing,word-spaceing和font-family。*/
  p {
    text:300 uppercase dimgrey center 1.6rem 1.7 .05em;
  }
  /* position属性允许top,left,'right',bottom值包含在一个声明中。值的顺序 是顺时针方向。语法中取值从1到4，如果有一个值你想排除，只需使用*星号替换即可。*/
  section{
    position: absolute 10px * *;
  }
```