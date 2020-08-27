// import api from './http/api'  //需要在main.js 里面引入 里封装的api
// Vue.prototype.$api =api      //需要在main.js 里面引入 里封装的api

//是用来封装所有的请求 
import service from "./index" //http 下面叫index的 必须省略index.js
// import { get } from "core-js/fn/dict"
// import { get } from "core-js/fn/dict"

// export default{} 里面所有的属性就是请求方法  
export default {
  // 3. 分类查询(get)   /classification?mallSubId=${id}   参数:  id:默认分类的id
  getClassification(id) {
    return service.get(`/classification?mallSubId=${id}`)
  },
  // 14. 获取用户信息(post) /queryUser
  getqueryUser() {
    return service.post(`queryUser`)
  },
  // 15. 修改保存用户信息(post) //saveUser 参数: gender:性别 year:年 month:月 day:日 id:用户id nickname:昵称
  getsaveUser({    gender,    year,    month,    day,    id,    nickname
  }) {
    return service.post('saveUser', {  gender,  year,  month, day, id,  nickname
    })
  },
  // 16. 查询用户订单数量(get)  // /myOrder/orderNum
  getorderNum() {
    return service.get(`/myOrder/orderNum`)
  },
// 上面是pc 发请求get(有参数跟没参数示例) post(有参数,跟没参数)

  // ###  获取定位  ```js   http://localhost:8888/position ```
  getposition() {
    return service.get(`/position`)
  },

  // ### 获取所有省份 ```js   http://localhost:8888/province```
  getProvince() {
    return service.get(`/province`)
  },

  // ### 获取省份所有城市  http://localhost:8888/citys/省份id
  getCitys(id) {
    return service.get(`/citys?id=${id}`)
  },

  // ### 获取城市具体信息  ``` js   http://localhost:8888/crumbs?city=城市名
  getcrumbs(city) {
    return service.get(`/crumbs?city=${city}`)
  },

  // ### 省市关联   http://localhost:8888/city
  getcity() {
    return service.get(`/city`)
  },

  // ### 热门城市   http://localhost:8888/hotCity
  gethotCity() {
    return service.get(`/hotCity`)
  },
  // ### 全部分类   http://localhost:8888/menu
  getmenu() {
    return service.get(`/menu`)
  },
  // ### 热门搜索   http://localhost:8888/hotPlace?city=城市名```
  gethotPlace(city) {
    return service.get(`/hotPlace?city=${city}`)
  },
  // ### 搜索建议    http://localhost:8888/searchTop?city=城市名&input=关键词```
  getsearchTop(city,input) {
    return service.get(`/searchTop?city=${city}&input=${input}`)
  },
  // ### 根据关键词搜索  http://localhost:8888/results?city=城市名&keyword=关键词 ```
  getPosition(city,keyword) {
    return service.get(`results?city=${city}&input=${keyword}`)
  },
  // ### 商铺详情  http://localhost:8888/products?keyword=商铺名称&city=城市名```
  getproducts(keyword,city) {
    return service.get(`/products?keyword=${keyword}&city=${city}`)
  },
  // ### 有格调 (调关键词搜索接口)   #### 对应的tab
  // - 约会聚餐 => 美食   - 丽人spa => 丽人   - 电影演出 => 电影
  // - 品质出游 => 旅游   - 全部 => 景点    ### 登录

  // ### 登录 http://localhost:8888/users/login (post)  参数: username: 用户名 password: 密码
  postlogin({username,  password  }) {
    return service.post('/users/login', {      })
  },

  // ### 注册  http://localhost:8888/users/register (post)参数:
  //   - username: 用户名  - password: 密码  - email: 邮箱
  postregister({ username, password, email}) {
    return service.post('/users/register', {  username, password, email })
  },

  // ### 需要用到的图片路径

  //s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg
  //p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png
  //p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg
  //p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg
  //p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg
  //s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png
  //s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg

  // ### 协议链接   http://www.meituan.com/about/terms

  //登录 请求示例  第一种协防
  // login(params){
  //   //所有的方法必须return
  //   return service.post('/user/login',params)
  // },

  // 实例 第二种方法  解构赋值的写法
  // login(username,password) {
  //   return service.post('./user/login',{
  //     // username:username,
  //     username,   //简写其实是上面那样的 所以实参也是username
  //     password
  //   })
  // },

  //示例 获取所有文章  平时用字符转 ，如果有参数就用模板字符串
  // allArticle(id){
  //   return service.get(`./article/allArticle?id=${id}`)
  // },
  //示例 获取所有文章 get请求两个参数的情况
  // allArticle(){
  //   return service.get(`./article/allArticle?id=${id}&num=${num}`)
  // }
  // 上面是get post 封装请求的示例 封装完之后在main.js 里引用这个文件
  //   import api from "./http/api"
  //   Vue.pprototype 的原型链上自己取一个名字 特殊一点
  //   Vue.pprototype.$api =api
}