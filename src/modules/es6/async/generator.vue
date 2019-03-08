<template>
  <div>
    generator来处理异步，从形式上就是用同步的代码书写方式来表达异步的处理效果。这相比较传统的异步处理操作有了质的飞越。定义的时候使用【*】和【yield】来定义。
    使用的时候使用【next】方法来调用。
    <div><img :src="gener" alt=""></div>
    <a style="color:blue;margin-top:20px;" href="https://www.cnblogs.com/imwtr/p/5913294.html" target="_blank">Generator生成器函数</a>
    <div>
      <el-button @click="tar.next()">依次点击看看</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'generator',
    data () {
      return {
        tar:null,
        gener: require('@/assets/image/generator.png')
      }
    },
    created () {
      this.initGenerator()
    },
    methods: {
      initGenerator () {
        let self = this
        function * testGenerator() {
          console.log("开始进入程序,进入下一步")
          let suppliers = yield self.getAllSuppliers()
          console.log("开始进入执行第二个异步函数")
          let topics    = yield self.getOnlineTopicList()
          console.log(suppliers, topics)
          console.log('程序执行结束')
        }
        this.tar = testGenerator()
      },
      // 获取商家列表
      getAllSuppliers () { //此时的cb就是回调函数
        console.log('开始请求商家列表')
        this.$http.common.getAllSuppliers().then( res => {
          console.log("执行完商家列表")
          return res
        })

      },
      // 获取专题列表
      getOnlineTopicList () {
        console.log('开始请求专题列表')
        this.$http.common.getOnlineTopicList().then( res => {
          console.log("执行完专题列表")
          return res
        })
      }
    }
  }
</script>

