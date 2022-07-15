import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import store from './store'
// 引入rem
import 'amfe-flexible'
// 引入图标css
import '@/assets/font/iconfont.css'
// 引入初始化样式
import './styles/base.css'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
