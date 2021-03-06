import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element组件库
import '@/plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import '@/assets/css/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
