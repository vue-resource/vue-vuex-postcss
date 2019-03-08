// 可以防止变量在未声明时使用
let name = 'BY'
const age = 20

const bob = {
  _name: "Bob",
  _friends: ['arrow'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

// 可以通过new来进行实例调用
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) { 
    super(geometry, materials);// 继承
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
  }
  update(camera) {
    super.update(); // 超级调用
  }
  static defaultMatrix() {// 静态方法
    return new THREE.Matrix4();
  }
}

// 增强的对象字面量
var obj = {
  // Sets the prototype. "__proto__" or '__proto__' would also work.
  __proto__: theProtoObj,
  // Computed property name does not set prototype or trigger early error for
  // duplicate __proto__ properties.
  ['__proto__']: somethingElse,
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
   // Super calls
   return "d " + super.toString();
  },
  // Computed (dynamic) property names
  [ "prop_" + (() => 42)() ]: 42
};

//模板字符串
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// 解构
  // 解构允许使用模式匹配进行绑定，并支持匹配数组和对象。解构是一种故障弱化，类似于标准对象查找 foo["bar"]，在未找到时生成 undefined。
  const [a, ,b] = [1,2,3]; // a=1,b=2
  const [a = 1] = []; // a === 1;
  // object matching
  const { op: a, lhs: { op: b }, rhs: c } = getASTNode()
  // parameter position
  const g = ({name: x}) => {
    console.log(x);
  }
  g({name: 5})
  // Destructuring + defaults arguments
  const r = ({x, y, w = 10, h = 10}) => {
    return x + y + w + h;
  }
  r({x:1, y:2}) === 23


// 扩展运算符
const f1 = (x, y=12) => {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f1(3) // 15
const f2 = (x, ...y) =>{
  // y is an Array
  return x * y.length;
}
f2(3, "hello", true) // 6
const f3 = (x, y, z) => {
  return x + y + z;
}
// Pass each elem of array as argument
f3(...[1,2,3]) // 6

// Iterators + For..Of 循环   迭代器
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
// 原型
// interface IteratorResult {
//   done: boolean;
//   value: any;
// }
// interface Iterator {
//   next(): IteratorResult;
// }
// interface Iterable {
//   [Symbol.iterator](): Iterator
// }

//  Generators 函数
var fibonacci2 = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}
for (var n of fibonacci2) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
// 原型
// interface Generator extends Iterator {
//   next(value?: any): IteratorResult;
//   throw(exception: any);
// }



// Modules 模块
  //  基本使用
  // export function sum(x, y) {
  //   return x + y;
  // }
  // export var pi = 3.141593; 

  // import * as math from "lib/math";
  // import {sum, pi} from "lib/math";

  // // export新特性
  // export * from "lib/math";
  // export var e = 2.71828182846;
  // export default function(x) {
  //     return Math.exp(x);
  // }

  // import exp, {pi, e} from "lib/mathplusplus";



// Map  Set  WeakMap  WeakSet
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

var ws = new WeakSet();
ws.add({ data: 42 });


// promise
function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
  })
}

var p = timeout(1000).then(() => {
  return timeout(2000);
}).then(() => {
  throw new Error("hmm");
}).catch(err => {
  return Promise.all([timeout(100), timeout(200)]);
})


// 异步函数
const doubleAfter2seconds = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2 * num)
    }, 2000)
  })
}

const testResult = async () => {
  try {
    let first = await doubleAfter2seconds(30)
    let second = await doubleAfter2seconds(50)
    let third = await doubleAfter2seconds(30)
    console.log(first + second + third)
  } catch (err) {
    console.log(err)
  }
}
testResult()

const named = async () => {
  return 'hello async!'
}
console.log(named())

// new API
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll("div")) // 返回类数组（js原生对象）
Array.of(1, 2, 3) // [1,2,3]
[0, 0, 0].fill(7, 1) // [0,7,7] 
[1,2,3].findIndex(x => x == 2) // 1 不能直接写数字
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"] 返回iterator对象
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) })