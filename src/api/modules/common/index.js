/**
 * 公共接口
 */
import axios from 'axios'
import { api } from '@/api/config'

// 获取商家列表
const getAllSuppliers = (param) => {
  return axios.get(api.common.getAllSuppliers, {params:param})
}
// 获取专题列表
const getOnlineTopicList = (param) => {
  return axios.get(api.common.getOnlineTopicList, {params:param})
}
// 根据专题id获取专题详情
const getTopicDetail = (param) => {
  return axios.get(api.common.getTopicDetail, {params:param})
}
// 获取后台三级类目（所有启用类目）
const getBackendCategoryTree = (param) => {
  return axios.get(api.common.getBackendCategoryTree, {params:param})
}
// 根据suid查询有效的一起拼商品信息
const querySkuInfoById = (param) => {
  return axios.get(api.common.querySkuInfoById, {params:param})
}
// 从SCM服务中查询所有有效的SCM信息
const queryAllSCMTagList = (param) => {
  return axios.get(api.common.queryAllSCMTagList, {params:param})
}

export default {
  getAllSuppliers,
  getOnlineTopicList,
  getTopicDetail,
  getBackendCategoryTree,
  querySkuInfoById,
  queryAllSCMTagList
}
