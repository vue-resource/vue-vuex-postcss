<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>解构</span>
      </div>
      <div class="pa-l-20">
       解构允许使用模式匹配的方式进行绑定，并支持匹配 数组和对象。解构具有一定的容错机制，就像查找普通对象foo['foo']这样，当没有找到时会返回undefined（而不会直接报错）
       <ul class="list">
         <li>
          <span>1、数组匹配：</span>
          <div>[a,b] = [1,2] => a={{ a }},b={{ b }}</div>
         </li>
         <li>
          <span>2、数组匹配(带默认值)：</span>
          <div> [d = 1] = []; => d={{ d }}</div>
         </li>
         <li>
          <span>3、函数参数：</span>
          <div> getC ({name:name}) {this.c = name} => getC({name:'henyu'}) => c:{{ c }}</div>
         </li>
         <li>
          <span>4、函数参数(默认参数)：</span>
          <div> test (x, y, w = 10, h = 10) {return x + y + w + h;} => test(2,3) => {{ test(2,3) }}</div>
         </li>
         <li>
          <span>5、函数参数(不定参数)：</span>
          <div> args (x, ...y) { return x * y.length;} => args(3, "hello", true) => {{ args(3, "hello", true) }}</div>
         </li>
         <li>
          <span>6、扩展运算符：</span>
          <div> extd (x,y,z) {  return x + y + z} => extd(...[1,2,3]) => {{ extd(...[1,2,3]) }}</div>
         </li>
       </ul>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'arrow',
    data () {
      return {
        a:'',
        b:'',
        c:'',
        d:''
      }
    },
    created () {
      [this.a, this.b] = [1,2]
      [this.d = 1] = []
      this.getC({name:'henyu'})
    },
    methods: {
      getC({name:name}) {
        this.c = name
      },
      test (x, y, w = 10, h = 10) {
        return x + y + w + h;
      },
      args (x, ...y) {
        // y是一个数组
        return x * y.length;
      },
      extd (x,y,z) {
        return x + y + z
      }
    }
  }
</script>
<style scoped>
  .list li{ padding:10px 0;}
  .list li span {font-size: 16px;font-weight: 600;}
</style>


