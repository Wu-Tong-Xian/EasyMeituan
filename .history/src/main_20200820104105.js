import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'//引入axios
Vue.prototype.$axios = axios;//把axios挂载到vue上
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
