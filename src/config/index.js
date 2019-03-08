import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/base.css'

import services from '@/api'
import Tools from '@/utils/tools' // 工具集
import Filters from '@/utils/filters' // 引入自定义过滤器
import Directives from '@/utils/directives' // 引入自定义指令
import Plugins from '@/utils/plugins' // 引入自定义插件

for(let key in Directives){
  Vue.directive(key,Directives[key]);
}

for(let key in Filters){
  Vue.filter(key,Filters[key]);
}

for(let key in Plugins){
  Vue.use(key);
}

Vue.prototype.axios = axios
Vue.prototype.$tools = Tools
Vue.prototype.$http = services

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })