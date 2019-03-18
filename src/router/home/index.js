import Vue from 'vue'
import Router from 'vue-router'

import precss from './precss'


Vue.use(Router)

const router = new Router({
  routes: [
    precss
  ]
})

export default router