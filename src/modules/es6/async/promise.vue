<template>
  <div>
    promise主要是采用【链式】的方法 来管理回调函数，不再向callback那样进行层级嵌套。通过对外暴露then方法，拿到上一步resolve处理成功的结果；通过catch来拿到上一步reject处理异常的结果。<br>
    <img :src="prom" alt="">
    <ul>
      <li><a style="color:blue" href="https://segmentfault.com/a/1190000002580342" target="_blank">你所必须掌握的三种异步编程方法callbacks,listeners,promise</a></li>
      <li><a style="color:blue" href="https://segmentfault.com/a/1190000013083107" target="_blank">promise用法解析</a></li>
    </ul>
    <ul class="ma-t-20">
      <li>
        <el-button type="primary" @click="testPromise">测试promise</el-button>
        <el-button type="success" @click="getAllSuppliers">测试axios</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'promise',
    data () {
      return {
        str: 'hhhhh',
        prom: require('@/assets/image/promise.png')
      }
    },
    methods: {
      initPromise (result) {
        return new Promise((resolve, reject) => {
          if(result.length > 10){
            reject('字符个数超限')
          }else{
            resolve(result)
          }
        })
      },
      // 获取商家列表
      getAllSuppliers () { //此时的cb就是回调函数
        this.$http.common.getAllSuppliers().then( res => {
          this.$message.success('我已经成功的请求到了商家列表信息，下一步开始请求专题列表')
        }).catch( err => {
           this.$message.error(err)
        })
      },
      testPromise () {
        this.initPromise(this.str).then( res => {
          this.$message.success(res)
        }).catch( err => {
           this.$message.error(err)
        })
      }
    }
  }
</script>

