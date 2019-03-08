import Async from '@/modules/es6/async'
import Callback from '@/modules/es6/async/callback'
import Generators from '@/modules/es6/async/generator'
import Promises from '@/modules/es6/async/promise'

export default {
  path: '/async',
  name: 'async',
  meta: {
    pathName: 'async'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"async"
      },
      component: Async
    },{
      path: 'callback',
      meta:{
        pathName:"callback"
      },
      component: Callback
    },{
      path: 'generator',
      meta:{
        pathName:"generator"
      },
      component: Generators
    },{
      path: 'promise',
      meta:{
        pathName:"promise"
      },
      component: Promises
    }
  ]
}