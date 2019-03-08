<template>
  <div class="menu-tree">
    <div v-for="(item, idx) in treeData" :key="idx" >
      <el-submenu  v-if="item[menuConfig.children] && item[menuConfig.children].length>0" :index="item[menuConfig.key]">
        <template slot="title">
          <span @click="menuChange(item[menuConfig.target])">{{item[menuConfig.name]}}</span>
        </template>
        <menu-tree :tree-data="item[menuConfig.children]" :menu-config="menuConfig"></menu-tree>
      </el-submenu>
      <el-menu-item :index="item[menuConfig.key]" v-else @click="menuChange(item[menuConfig.target])" :class="[menuPaths === item[menuConfig.target] ?'is-active' : '']">
        <span slot="title">{{item[menuConfig.name]}}</span>
      </el-menu-item>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'menu-tree',
    props: {
      treeData: {
        type: Array,
        default: () => []
      },
      menuConfig: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        menuPaths: ''
      }
    },
    watch: {
      $route (nv, ov) {
        this.menuPaths = nv.matched.map( ele => ele.path ).pop()
      }
    },
    methods: {
      menuChange (url) {
        const arr = this.$route.matched.filter( item => item.meta.pathName).map(item => {
          return {
            name:item.meta.pathName
          }
        })  
        this.$router.push(url)
      }
    }
  }
</script>



 