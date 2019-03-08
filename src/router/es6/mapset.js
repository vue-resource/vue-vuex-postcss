import Mapset from '@/modules/es6/mapset'

export default {
  path: '/mapset',
  name: 'mapset',
  meta: {
    pathName: 'mapset'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"mapset"
      },
      component: Mapset
    }
  ]
}