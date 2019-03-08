<template>
  <div>
    <div>
      新增很多功能，如核心的Math库，数组转换和用于对象复制的Object.assign()。
    </div>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>Math + Number + String + Object APIs</span>
        <a href="https://www.babeljs.cn/learn-es2015/" target="_blank" class="font-info">参考链接</a>
      </div>
      <div class="pa-l-20">
       <ul class="list">
        <li>
          <span>1、Number</span>
          <div>Number.isInteger(Infinity) => {{ Number.isInteger(Infinity) }} | Number.isInteger('23') => {{ Number.isInteger('23') }} | Number.isInteger(23) => {{ Number.isInteger(23) }}</div>
        </li>
        <li>
          <span>2、String</span>
          <div>"abcde".includes("cd") => {{ "abcde".includes("cd") }} | "abc".repeat(3) => {{ "abc".repeat(3) }} | "abcde".startsWith("ab") => {{"abcde".startsWith("ab") }}</div>
        </li>
        <li>
          <span>3、Array</span>
          <div>Array.of(1, 2, 3) => {{ Array.of(1, 2, 3) }}</div>
          <div>[0, 0, 0].fill(7, 1) => {{ [0, 0, 0].fill(7, 1) }}</div>
          <div>[1,2,3].findIndex(x => x == 2) => {{ [1,2,3].findIndex(x => x == 2) }}</div>
          <div>["a", "b", "c"].entries()  => iterator [0, "a"], [1,"b"], [2,"c"]</div>
          <div>["a", "b", "c"].keys() =>  iterator 0, 1, 2</div>
          <div>["a", "b", "c"].values() => iterator "a", "b", "c"</div>
        </li>
        <li>
          <span>4、Object</span>
          <div>Object.assign({age:25}, {name:'henyulee'}) => {{ Object.assign({age:25}, {name:'henyulee'}) }}</div>
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
        
      }
    }
  }
</script>
<style scoped>
  .list li{ padding:10px 0;}
  .list li span {font-size: 16px;font-weight: 600;}
</style>


