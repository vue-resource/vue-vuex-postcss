<template>
  <div>
    <div>
      map/set为常见算法的实现提供了更有效的数据结构。WeakMaps提供了对对象的弱引用（不会被垃圾回收计数）
    </div>
    <el-card class="box-card ma-t-20">
      <div slot="header">
        <span>Set + Map + WeakMap + WeakSet</span>
      </div>
      <div class="pa-l-20">
       <ul class="list">
         <li>
          <span>1、Set：</span>
          <div>
            var set = new Set() => set.add('hello').add('world').add('hello') =>  set.size = {{ set.size }} => set.has('hello') => {{ set.has('hello') }}
          </div>
         </li>
         <li>
          <span>1、Map：</span>
          <div>
            var map = new Map() => map.set('name', 'henyu') =>  map.get('name') => {{ map.get('name') }}
          </div>
         </li>
         <li>
          <span>3、WeakSet：</span>
          <div>
            var ws = new WeakSet() => ws.add({ data: 42 }) =>  ws.has('data') => {{ ws.has('data') }}
          </div>
         </li>
         <li>
          <span>4、WeakMap：</span>
          <div>
            var wm = new WeakMap() => wm.set('name', { extra: 42 }) =>  wm.get('name') => 
          </div>
         </li>
       </ul>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'arrow',
    data () {
      return {
        set:new Set(),
        map: new Map(),
        ws: new WeakSet(),
        wm: new WeakMap()
      }
    },
    created () {
      this.set.add('hello').add('world').add('hello')
      this.map.set('name', 'henyu')
      this.ws.add({ data: 42 })
      this.wm.set('name', { extra: 42 })
    },
    methods: {
      
    }
  }
</script>
<style scoped>
  .list li{ padding:10px 0;}
  .list li span {font-size: 16px;font-weight: 600;}
</style>


