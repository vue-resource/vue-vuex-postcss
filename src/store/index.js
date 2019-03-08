/**
 * 参考地址：https://github.com/vuejs/vuex/tree/dev/examples
 *          https://github.com/vuejs
 */

import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
// import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 不要在发布环境下启用严格模式！**严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    common
    // home
  },
  plugins: []
})

// 挂载到vue原型上，方便vue实例调用 
Vue.prototype.$store = store

export default store