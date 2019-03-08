import * as Type from './consts'

export default {
  [Type.UPDATE_ACTIVE_MENU_ID] (state, id) {
    window.localStorage.setItem('active_menu_id', id)
  },
  [Type.UPDATE_ACTIVE_MENU_NAME] (state, name) {
    window.localStorage.setItem('active_menu_name', name)
  },
  [Type.UPDATE_BREADCRUMBS] (state, arr) {
    state.breadcrumbs = [{name:state.active_munu_name}].concat(arr)
  }
}