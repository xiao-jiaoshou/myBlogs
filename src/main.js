import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import api from './utils/api'

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.use(ViewUI)

new Vue({
  render: h => h(App),
  // 挂载路由模块
  router: router
}).$mount('#app')
