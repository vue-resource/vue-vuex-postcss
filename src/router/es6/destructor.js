import Destructor from '@/modules/es6/destructor'

export default {
  path: '/destructor',
  name: 'destructor',
  meta: {
    pathName: 'destructor'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"destructor"
      },
      component: Destructor
    }
  ]
}