import Vue from 'vue'
import Router from 'vue-router'

import cls from './class'
import async from './async'
import arrow from './arrow'
import destructor from './destructor'
import mapset from './mapset'
import api from './api'

Vue.use(Router)

const router = new Router({
  routes: [
    cls,
    async,
    arrow,
    destructor,
    mapset,
    api
  ]
})

export default router