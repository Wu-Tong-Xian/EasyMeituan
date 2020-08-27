import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      redirect:'/'
    },
  {
    path: '/',
    name: 'layout',
    component: layout,
    children:[{
      path:'',
      name:'/home',
      component:Home,
      meta:{
        title:'首页',
      },
    },  
    {
      path: '/citySelection',
      name: 'citySelection',
      component: () => import( '../views/citySelection/citySelection.vue'),
      meta:{
        title:'城市选择',
      },
    }, 
      
  ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login'),
    meta:{
      title:'登录页',
    },
  }, 
  {
    path: '/phoneApp',
    name: 'phoneApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/phoneApp/phoneApp'),
    meta:{
      title:'手机App',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/register'),
    meta:{
      title:'注册',
    },
  },
  {
    path:'*',
    component: () => import(/* webpackChunkName: "about" */ '../views/err/err'),
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//  设置 白名单： 登陆 注册  找回密码/
// let whitePath = [ '/login','/register','/findPwd']
// // let whitePath = [ '/login']

router.beforeEach((to,from,next) =>{
//   // 通过路由源信息（meta（写在路由后 在上面））给浏览器绑定名字
  document.title =to.meta.title
//   let user =JSON.parse(localStorage.getItem('user'))
//   // 如果用户跳转的就是登录页面就让他直接去
//   // 设置了白名单 这里就可以修改为
//   if(whitePath.includes(to.path)) {
//   // if(to.path === '/login') {
    next()
//   }else {
//     // 如果有user就让他调转其他页面 否则就调转到本页面
//       user ? next() : next('/login')
//     }
})


export default router
