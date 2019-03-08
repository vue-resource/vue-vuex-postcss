<template>
  <div>
    单线程的模式决定了js的执行顺序。试想一下，如果页面上有2个很耗时的操作。比如ajax请求，此时如果采用同步请求可能会造成页面卡死，影响用户体验。所以通常会采用异步执行的方式来实现。
    但是当多个异步函数以同步的代码形式写在页面上的时候，谁先执行谁后执行的问题就显得很重要。或者下一次的请求参数依赖上一次请求的结果作为参数传递。早期解决这个问题的方法通常用的是回调函数。
    <img :src="cb" alt="回调函数">
    <div><el-button type="primary" class="ma-t-20" @click="getAllSuppliers(getOnlineTopicList)">回调函数</el-button></div>
  </div>
</template>
<script>
  export default {
    name: 'callback',
    data () {
      return {
        cb: require('@/assets/image/callback.png')
      }
    },
    methods: {
      // 获取商家列表
      getAllSuppliers (cb) { //此时的cb就是回调函数
        this.$http.common.getAllSuppliers().then( res => {
          this.$message.success('我已经成功的请求到了商家列表信息，下一步开始请求专题列表')
          setTimeout(cb, 3000)
        })
      },
      // 获取专题列表
      getOnlineTopicList () {
        this.$http.common.getOnlineTopicList().then( res => {
           this.$message.success('现在我在商家列表的回调函数里成功的请求到了专题列表信息')
        })
      }
    }
  }
</script>

