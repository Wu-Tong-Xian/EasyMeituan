import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './http/api'  //引入http 里封装的api
import store from './store'  //引入vue x
import utils from './utils'  //引入vue x
// 因为封装了axios 在http引入了 
// import axios from 'axios'//引入axios
// Vue.prototype.$axios = axios;//把axios挂载到vue上
// import '@/iconfont/iconfont.js';/*引入iconfont图标*/

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$api =api    //引入封装的http 下API
Vue.prototype.$utils =utils   //引入封装的模块化
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
