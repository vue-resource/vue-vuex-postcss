<template>
  <div>
    async是generator的升级版本。使用上不用像generator函数那样每次都调用next来触发下一次执行。而是设置一个节点，自己去执行。
    <span style='color:red;'>注意：async总是返回一个promise对象</span>
    <ul>
      <li><a style="color:blue;" href="https://segmentfault.com/a/1190000015488033" target="_blank">理解async/await</a></li>
      <li><a style="color:blue;" href="https://segmentfault.com/a/1190000013292562" target="_blank">Async/await学习</a></li>
    </ul>
    <div>
      <el-button @click="initAsync">体验async</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'async',
    methods: {
      initAsync () {
        let self = this
        async function test () {
          console.log("开始进入程序,进入下一步")
          let suppliers = await self.$http.common.getAllSuppliers().then( res => {
            console.log("执行完商家列表")
            return res
          })
          console.log("开始进入执行第二个异步函数")
          let topics  = await self.$http.common.getOnlineTopicList().then( res => {
            console.log("执行完专题列表")
            return res
          })
          console.log(suppliers, topics)
          console.log('程序执行结束')
        }
        test()
      }
    }
  }
</script>

