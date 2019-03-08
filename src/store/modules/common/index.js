import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

/**
 * 可以通过根节点rootState来访问根节点
 */

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}