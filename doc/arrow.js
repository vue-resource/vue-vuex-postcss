/**
 * 箭头函数
 *   与一般的函数不同，箭头函数与包裹它的代码共享相同的this对象，
 *   如果箭头函数在其他函数的内部，它也将共享该函数的arguments变量
 */

/**
 * this 问题 
 */

const boy = {
  name: 'kobe',
  friends: ['antony', 'james', 'jordon'],
  getFriend: function () {
    this.friends.forEach(item => {
      console.log(`${item}是${this.name}的朋友`)
    })
  },
  getFriend2 () {
    this.friends.forEach(item => {
      console.log(`${item}是${this.name}的朋友`)
    })
  },
  getFriend3: () => {
    this.friends.forEach(item => {
      console.log(`${item}是${this.name}的朋友`)
    })
  }
}
boy.getFriend() // 能正常输出：antony是kobe的朋友
boy.getFriend2() // 能正常输出：antony是kobe的朋友
// boy.getFriend3() // 报错，此时this指向的是箭头函数所在层级的顶级箭头函数，此时找不到

/**
 * arguments 对象
 */
// const square1 = () => {
//   return (() => {
//     let numbers = []
//     for (let number of arguments) {
//       numbers.push(number * number)
//     }
//     return numbers
//   })()
// }
// square1(1, 2, 3, 4, 5) // 此时提示 arguments未定义,因为其父级是箭头函数，箭头函数的arguments具有集成上级的关系

function square () {
  return (() => {
    let numbers = []
    for (let number of arguments) {
      numbers.push(number * number)
    }
    console.log(numbers)
    return numbers
  })()
}
console.log(square2(1, 2, 3, 4, 5)) // [1, 4, 9, 16, 25]