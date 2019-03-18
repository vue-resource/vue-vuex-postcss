import Precss from '@/modules/home/Precss'

export default {
  path: '/precss',
  name: 'precss',
  meta: {
    pathName: 'precss'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"precss"
      },
      component: Precss
    }
  ]
}