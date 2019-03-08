// import arrow from './arrow'
// import callback from './callback'
// import FTO from './extends'

// export default {
//   arrow,
//   callback,
//   FTO
// }

import Vue from 'vue'
import App from '@/App'

import router from '@/router/es6'
import store from '@/store'
import '@/config'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
})
