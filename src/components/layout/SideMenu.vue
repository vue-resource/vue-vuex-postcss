<template>
  <div class="side-menu">
    <div class="menu bg-dark">
      <ul class="menu-list">
        <li class="menu-item" v-for="(item,idx) in menuData" @click='menuChange(item)' :key="idx" :class="{active:item[menuConfig.key]=== active_menu_id}">
          <p>{{item[menuConfig.name]}}</p>
        </li>
      </ul>
    </div>
    <div class="sub-menu">
      <el-menu default-active="subMenu_active_id" :unique-opened="true">
        <menu-tree :tree-data="subMenu" :menu-config="menuConfig"></menu-tree>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import MenuTree from './MenuTree'
  export default {
    name: 'side-menu',
    props: {
      menuData: {
        type: Array,
        default: () => []
      },
      menuConfig: {
        type: Object,
        default: () => {
          return {
            key: 'id',
            name: 'name',
            target:'url',
            children: 'children'
          }
        }
      }
    },
    data () {
      return {
        subMenu_active_id: ''
      }
    },
    computed: {
      ...mapState('common', ['active_menu_id']),
      subMenu () {
        return this.menuData.filter( item => item[this.menuConfig.key] === this.active_menu_id)[0][this.menuConfig.children]
      }
    },
    components: {MenuTree},
    created () {
      // this.subMenu_active_id = this.subMenu.filter( item => item[this.menuConfig.target].split('#')[1] === this.$route.path )[0][this.menuConfig.key]
    },
    methods: {
      ...mapActions('common',[
        'updateActiveMenuIdAction',
        'updateActiveMenuNameAction'
      ]),
      menuChange (item) {
        this.updateActiveMenuIdAction(item[this.menuConfig.key])
        this.updateActiveMenuNameAction(item[this.menuConfig.name])
        // 多页面应用使用这个进行跳转；单页面应用使用this.$router.push增加路由栈
        window.location.href = item[this.menuConfig.target]
      }
    }
  }
</script>
<style scoped>
  .side-menu { position: fixed; top: 60px; bottom: 0; left: 0; background-color: #272a33; border-right:1px solid #ddd; z-index: 12;}
  .menu {width: 120px;height: 100% ; float: left; overflow-y: none;}
  .menu-item { width: 120px; font-size: 14px; line-height: 20px; border-top: 1px solid #444; padding: 8px 0; color: #9499a6; position: relative; text-align: center; line-height: 2; cursor: pointer }
  .menu-item.active { background: #1d2027; color: #eee}
  .menu-item.active::before{
    content: ""; position: absolute; left: 5px; top: 12px; height:20px; width: 4px; border-radius: 2px; background-color: #eee;
  }
  .menu-item.active::after{
    content: ""; position: absolute; right: 0; top: 12px; height: 0; width: 0; border: 10px solid transparent; border-right-color:#eee;
  }
  .sub-menu{ height: 100% ;float: left; overflow: auto; width: 200px; background-color: #fff; }
</style>
