<template>
  <layout>
    <transition name="el-fade-in-linear">
      <router-view />
    </transition>
  </layout>
</template>

<script>
  import layout from '@/components/layout'
  export default {
    name: 'app',
    components: {
      layout
    }
  }
</script>