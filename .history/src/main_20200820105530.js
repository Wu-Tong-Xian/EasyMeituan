import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'  //引入http 里封装的api
// 因为封装了axios 在http引入了 
// import axios from 'axios'//引入axios
// Vue.prototype.$axios = axios;//把axios挂载到vue上

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 引入api
Vue.prototype.$api =api
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
