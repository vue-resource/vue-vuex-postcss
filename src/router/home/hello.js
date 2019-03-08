import Hello from '@/modules/home/Hello'

export default {
  path: '/hello',
  name: 'hello',
  meta: {
    pathName: 'hello'
  },
  component: {render: h => h('router-view', '')},
  children: [
    {
      path: '',
      meta:{
        title:"hello"
      },
      component: Hello
    }
  ]
}