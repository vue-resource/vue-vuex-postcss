
import Vue from 'vue'
import App from '@/App'

import router from '@/router/home'
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
