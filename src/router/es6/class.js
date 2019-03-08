import Cls from '@/modules/es6/class'

export default {
  path: '/cls',
  name: 'class',
  meta: {
    pathName: 'class'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"class"
      },
      component: Cls
    }
  ]
}