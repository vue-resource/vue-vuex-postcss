import axios from 'axios'
import Vue from 'vue'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10*1000
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // 接口参数，权限问题，统一提示，然后错误（业务模块选择性处理）
  if (response.data.success === 0) {
    Vue.prototype.$message.error(response.data.error.message)
    return Promise.reject(response.data.error)
  }
  return response.data
}, function (error) {
  console.log(error.toString())
  // 网络问题，通过2种方式提示，业务不处理
  Vue.prototype.$message.error(error.toString())
})
