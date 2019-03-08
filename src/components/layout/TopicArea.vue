<template>
  <el-main class="main">
    <slot name='breadcrumb'>
      <div class="breadcumb">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-nav">
          <el-breadcrumb-item  v-for="(bread,idx) in breadcrumbs" :key="idx" >{{ bread.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </slot>
    <div class="content"><slot></slot></div>
  </el-main>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'topic-area',
    watch: {
      $route (nv,ov) {
        const arr = nv.matched.filter( item => item.meta.pathName).map(item => {
          return {
            name:item.meta.pathName
          }
        })
        this.updateBreadcrumbsAction(arr)
      }
    },
    computed: {
      ...mapState('common', ['breadcrumbs'])
    },
    created () {
      const arr = this.$route.matched.filter( item => item.meta.pathName).map(item => {
        return {
          name:item.meta.pathName
        }
      })
      this.updateBreadcrumbsAction(arr)
    },
    methods: {
      ...mapActions('common', ['updateBreadcrumbsAction'])
    }
  }
</script>
<style scoped>
  .main { margin: 60px 0 0 320px}
  .content { padding: 20px 0; border-top: 1px solid #ccc;}
  .breadcumb {overflow: hidden;}
  .breadcrumb-nav { padding-bottom: 10px; height: 30px; line-height: 30px;float:left; position: relative}
</style>


