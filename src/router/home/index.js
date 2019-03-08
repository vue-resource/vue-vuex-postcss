import Vue from 'vue'
import Router from 'vue-router'

import hello from './hello'


Vue.use(Router)

const router = new Router({
  routes: [
    hello
  ]
})

export default router