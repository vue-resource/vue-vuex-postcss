<template>
  <div class="lg">
    <top></top>
    <el-container>
      <side-menu :menu-data="menuData"></side-menu>
      <topic-area>
        <slot></slot>
      </topic-area>
    </el-container>
  </div>
</template>
<script>
  import Top from './Top'
  import SideMenu from './SideMenu'
  import TopicArea from './TopicArea'
  export default {
    name: 'layout',
    components: {
      Top,SideMenu,TopicArea
    },
    data () {
      return {
        menuData:[
          {
            id:'1',
            name:'es6',
            url: '/es6#/cls',
            children:[
              {
                id:'1-1',
                name:'class',
                url: '/cls/'
              },{
                id:'1-2',
                name:'async',
                url: '/async',
                children:[
                  {
                    id:'1-2-1',
                    name:'callback',
                    url: '/async/callback'
                  },{
                    id:'1-2-2',
                    name:'promise',
                    url: '/async/promise'
                  },{
                    id:'1-2-3',
                    name:'generator',
                    url: '/async/generator'
                  },{
                    id:'1-2-4',
                    name:'async',
                    url: '/async/'
                  }
                ]
              },{
                id:'1-3',
                name:'arrow',
                url: '/arrow/'
              },{
                id:'1-4',
                name:'destructor',
                url: '/destructor/'
              },{
                id:'1-5',
                name:'mapset',
                url: '/mapset/'
              },{
                id:'1-6',
                name:'api',
                url: '/api/'
              }
            ]
          },{
            id:'2',
            name:'首页管理',
            url: '/home#/hello',
            children:[
              {
                id:'2-1',
                name:'hello',
                url: '/hello/'
              }
            ]
          }
        ]
      }
    }
  }
</script>

