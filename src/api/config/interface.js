
import Vue from 'vue'
let mockUrl = '/static/mock'

// 线上环境需要 /app 路径
if (!Vue.config.productionTip) {
  mockUrl = '/dist' + mockUrl
}

const interfaceConf = {
  mockUrl,
  serverUrl: 'http://cmsapp.biyao.com',
  proxyUrl: '/cmsapp',
  paths: {
    common:{
      getBackendCategoryTree: '/category/getBackendCategoryTree',// 获取后台三级类目
      getAllSuppliers: '/common/getAllSuppliers',// 获取所有商家
      getOnlineTopicList: '/topic/getOnlineTopicList', //获取专题列表
      getTopicDetail:'/topic/getTopicDetail',// 根据专题id获取专题详情
      querySkuInfoById:'/activity/toggroupChannelPage/querySpuInfoById', // 根据spuid查询有效的一起拼商品信息
      queryAllSCMTagList:'/activity/toggroupChannelPage/queryAllSCMTagList'// 从SCM服务中查询所有有效的SCM信息
    }
  },
  mockPaths: {
    common:{
     
    }
  }
}

export default interfaceConf
