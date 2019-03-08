<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>类</span>
      </div>
      <div>
        ES6中新增的Class 类，主要包括以下3各方面：
        <ul>
          <li>1、定义class基类</li>
          <li>2、定义class子类</li>
          <li>3、静态属性和静态方法</li>
        </ul>
      </div>
    </el-card>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>定义class基类</span>
      </div>
      <div>
        定义class基类时，应注意以下几点：
        <ul>
          <li>1、在类中声明方法的时候，千万不要给该方法加上function关键字</li>
          <li>2、方法之间不要用逗号分隔，否则会报错</li>
          <li>3、实例化class的时候，默认调用constructor方法</li>
          <li>4、constructor方法默认返回实例对象this，但是也可以指定constructor方法返回一个全新的对象，让返回的实例对象不是该类的实例。</li>
          <li>5、constructor中定义的是实例属性和方法，可通过hasOwnProperty来判断；constructor外声明的属性都是定义在原型上的，可通过关键字in来判断</li>
          <li>6、可以通过实例的__proto__属性，为类的原型添加方法，但不建议使用，会污染类的原型；也会污染其它实例</li>
          <li>7、class不存在变量提升。必须先定义后使用；这个和es5的function不一样</li>
        </ul>
      </div>
    </el-card>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>定义class子类</span>
      </div>
      <div>
        定义class基类时，会用到extends关键字来实现继承父类的属性和方法。注意：
        <ul>
          <li>1、子类必须在constructor方法中调用super方法，之后才能使用this关键字，否则新建实例时会报错。
            <div class="pa-l-20">
              这是因为：子类没有自己的this对象，而是继承父类的this对象。如果不调用super方法，子类就得不到this对象。在这一点上ES5的继承与ES6正好相反，ES5先创建自己的this对象然后再将父类的属性方法添加到自己的this当中。
            </div>
          </li>
          <li>2、如果constructor函数中只有super的话，该constructor函数可以省略</li>
          <li>3、强大的super
            <div class="pa-l-20">
              <ul>
                <li>[1]、作为父类的构造函数调用。比如在子类的constructor中，作为父类的构造函数使用</li>
                <li>[2]、在普通方法中，作为父类的实例调用。比如：在子类的普通方法中，调用父类的普通方法，但不能调用静态方法</li>
                <li>[3]、在静态方法中，作为父类调用。比如：在子类的静态方法中使用super调用父类的静态方法</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>静态属性和静态方法</span>
      </div>
      <div>
        定义class基类时，有时候会定义一些静态方法和属性，共类本身来使用；而不被实例所引用。
        <ul>
          <li>1、不需要实例化类，即可直接通过该类来调用的方法，即称之为“静态方法”。在方法前加上static关键字即可 </li>
          <li>2、静态方法不能被实例继承，所以不能通过实例来访问</li>
          <li>3、静态方法只能在静态方法中调用,不能在实例方法中调用</li>
          <li>4、父类的静态方法， 可以被子类继承。可以被子类直接调用</li>
          <li>5、子类上的静态方法，通过super来调用父类的静态方法</li>
          <li>6、静态属性使用上和静态方法一样，也只能在类上来使用。但定义的时候不是通过static关键字来定义，而是直接挂到类上来定义；</li>
        </ul>
      </div>
    </el-card>
    <a href="/html/class.html" target="_blank"><el-button type="primary" class="ma-t-20">查看demo</el-button></a>
  </div>
</template>
<script>
  export default {
    name: 'class-extends'
  }
</script>

