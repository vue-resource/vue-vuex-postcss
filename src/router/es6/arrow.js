import Arrow from '@/modules/es6/arrow'

export default {
  path: '/arrow',
  name: 'arrow',
  meta: {
    pathName: 'arrow'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"arrow"
      },
      component: Arrow
    }
  ]
}