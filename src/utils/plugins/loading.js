const loading = {
  install (Vue) {
    let opt = {
      loading: true, // 是否显示loading图标
      showTxt: false, // 是否显示加载提示文字
      tipTxt: "加载中..." //加载提示文字
    }
    Vue.prototype.$BYLoading = {
      show (config) {
        if(!!document.getElementById('vue-loading')) return
        if(config){
          for(let pro in opt){
            config[pro]!== undefined && (opt[pro] = config[pro])
          }
        }
        let loadingTpl = Vue.extend({
            template: '<div class="vue-loading" id="vue-loading"><div class="tip-txt" v-if="'+opt.showTxt+'">' + opt.tipTxt + '</div><i v-if="'+opt.loading+'" class="tip-loading el-icon-loading"></i></div>'
        });
        let tpl = new loadingTpl().$mount().$el
        document.body.appendChild(tpl)
      },
      hide () {
        let ele = document.getElementById('vue-loading')
        document.body.removeChild(ele)
      }
    }
  }
}
module.exports = loading
