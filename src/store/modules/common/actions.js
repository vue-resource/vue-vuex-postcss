/**
 * 1、通过dispatch触发action
 * 2、action通过commit来触发mutation
 * 3、action可用于处理异步；mutation只能处理处理同步
 * 4、action 结合 dispatch以及 async或者promise等来处理异步回调
 */
import * as Type from './consts'

export default {
  [Type.UPDATE_ACTIVE_MENU_ID + "Action"] ({commit}, n) {
    commit(Type.UPDATE_ACTIVE_MENU_ID, n)
  },
  [Type.UPDATE_ACTIVE_MENU_NAME + "Action"] ({commit}, name) {
    commit(Type.UPDATE_ACTIVE_MENU_NAME, name)
  },
  [Type.UPDATE_BREADCRUMBS + "Action"] ({commit}, arr) {
    commit(Type.UPDATE_BREADCRUMBS, arr)
  }
  // async
  // async actionA ({ commit }) {
  //   commit('gotData', await getData())
  // },
  // async actionB ({ dispatch, commit }) {
  //   await dispatch('actionA') // 等待 actionA 完成
  //   commit('gotOtherData', await getOtherData())
  // },
  // // promise
  // actionC ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // commit('someMutation')
  //       resolve()
  //     }, 1000)
  //   })
  // },
  // actionD ({ dispatch, commit }) {
  //   return dispatch('actionC').then(() => {
  //     // commit('someOtherMutation')
  //   })
  // }
}