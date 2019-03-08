<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>箭头函数</span>
      </div>
      <div>
        箭头函数用 => 来代表一个函数，语法上类似于C#, Java8和CoffeeScript中的相关特性。他同时支持表达式（Expression bodies）和语句（Statement bodies）的写法。
        值得注意的是，与一般的函数不同，<span class="color-danger">箭头函数与包裹它的代码共享相同的this对象，如果箭头函数在其他函数的内部，它也将共享该函数的arguments变量</span>
      </div>
    </el-card>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>箭头函数共享作用域</span>
      </div>
      点击以下按钮，查看控制台输出的日志信息。(只有第二种方式展示正常)
      <div class="ma-t-20">
        <el-button @click="getFriend">传统函数 + 传统函数</el-button>
        <el-button @click="getFriend2">传统函数 + 箭头函数</el-button>
        <el-button @click="getFriend3">箭头函数 + 传统函数</el-button>
        <el-button @click="getFriend4">箭头函数 + 箭头函数</el-button>
      </div>
    </el-card>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>箭头函数共享arguments</span>
      </div>
      <div>
        <el-button @click="square(1,2,3,4,5,6)">箭头函数共享arguments</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'arrow',
    data () {
      return {
        man: 'Kobe',
        players: ['antony', 'james', 'jordon']
      }
    },
    methods:{
      getFriend () {
        this.players.forEach(function (item) {
          console.log(`${item}是${this.man}的朋友`)
        })
      },
      getFriend2 () {
        this.players.forEach(item => {
          console.log(`${item}是${this.man}的朋友`)
        })
      },
      getFriend3: () => {
        this.players.forEach(function (item) {
          console.log(`${item}是${this.man}的朋友`)
        })
      },
      getFriend4: () => {
        this.players.forEach(item => {
          console.log(`${item}是${this.man}的朋友`)
        })
      },
      square () {
        return (() => {
          let numbers = []
          for (let number of arguments) {
            numbers.push(number * number)
          }
          console.log(numbers)
          return numbers
        })()
      }
    }
  }
</script>

