import Api from '@/modules/es6/api'

export default {
  path: '/api',
  name: 'api',
  meta: {
    pathName: 'api'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"api"
      },
      component: Api
    }
  ]
}