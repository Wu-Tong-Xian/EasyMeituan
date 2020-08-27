<template>
<div>
  <div class="box fl j-between">
    <!--左边分类盒子-->
    <div class="p-a">
      <div class="mg10 fz18 font-w">全部分类</div>
      <div class="fl fz12">
        <div class="mg-t">
          <div v-for="(item,index) in url" :key="index">
            <img class="img" :src="item.img" alt />
          </div>
        </div>
        <div class="mg-t1 p-r">
          <div class v-for="(item,index) in title" :key="index">
            <div class="fl hover-box j-between pd-r10">
              <div class="name">{{item.name}}</div>
              <div class="colg">></div>
              <!--鼠标浮到左边盒子对应的显示内容盒子-->
              <div class="positiong-a">
                <div v-for="(item1,index1) in item.child" :key="index1">
                  <div class="fl j-between mg20">
                    <div class="fz14">{{item1.title}}</div>
                    <div class="gd">更多></div>
                  </div>
                  <div class="fl mg20 fl-wrap">
                    <div v-for="(item2,index2) in item1.child" :key="index2">
                      <div class="mg-r20 colg">{{item2}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fl box1 j-between">
      <!--中间轮播图-->
      <div>
        <div class="sweipe-box">
          <!--上 轮播图等2个图-->
          <div class="fl j-between">
            <el-carousel style="flex:1">
              <el-carousel-item v-for="(item,index) in urls" :key="index" class="imgz">
                <img class="imgx" :src="item.url1" alt />
              </el-carousel-item>
            </el-carousel>

            <img class="img1" src="https://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
          </div>
          <!--下 三个图  住酒店 涨姿势 我是商家-->
          <div class="fl">
            <img class="img2" src="https://p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png" alt />

            <img class="img2 mg-lr10" src="https://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />

            <img class="img3" src="https://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
          </div>
        </div>
      </div>
      <!--右边登录 分上下两个盒子-->
      <div class="login-box">
        <!-- 已经登陆状态 -->
        <div v-if="!usreInfo" class="box-login t-center">
          <img class="touxiang" src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
          <div class="t-center">Hi 你好@</div>
          <div class="mg-tb20">
            <el-button @click="goRegister" round>注册</el-button>
          </div>
          <div>
            <el-button @click="goLogin" round>登录</el-button>
          </div>
        </div>
        <!-- 未登录 -->
        <div v-if="usreInfo" class="box-login1 t-center">
          <img class="touxiang c-pointer" src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt />
          <div class="t-center">Hi 你好@</div>
          <div class="mg-tb20">
            <img class="yiLogin c-pointer" src="../../assets/yiLogin.png" alt="">
          </div>

        </div>

        <div class="erweima t-center">
          <img class="img5 mg-t10" src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
          <div class="fz18">美团App手机版</div>
          <div class="fl fz14 j-center">
            <div class="colr mg-r10">1元起</div>
            <div class>吃喝玩乐</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "",
  props: {
    usreInfo: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      url: [{
          img: require("../../assets/classfy/1.png")
        },
        {
          img: require("../../assets/classfy/2.png")
        },
        {
          img: require("../../assets/classfy/3.png")
        },
        {
          img: require("../../assets/classfy/4.png")
        },
        {
          img: require("../../assets/classfy/5.png")
        },
        {
          img: require("../../assets/classfy/6.png")
        },
        {
          img: require("../../assets/classfy/7.png")
        },
        {
          img: require("../../assets/classfy/8.png")
        },
        {
          img: require("../../assets/classfy/9.png")
        },
        {
          img: require("../../assets/classfy/10.png")
        },
        {
          img: require("../../assets/classfy/11.png")
        },
        {
          img: require("../../assets/classfy/12.png")
        },
        {
          img: require("../../assets/classfy/13.png")
        },
        {
          img: require("../../assets/classfy/14.png")
        },
        {
          img: require("../../assets/classfy/15.png")
        },
        {
          img: require("../../assets/classfy/16.png")
        },
      ],
      title: [],
      urls: [{
          url1: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          url1: "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url1: "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          url1: "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          url1: "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
      ],
    };
  },
  methods: {
    goRegister() {
      this.$router.push("register");
    },
    goLogin() {
      this.$router.push("login");
    },
    getmenu() {
      this.$api
        .getmenu()
        .then((res) => {
          if (res.code === 200) {
            this.title = res.data.menu;
            console.log(this.title);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getmenu();
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 960px;
  height: 450px;
}

.p-a {
  width: 200px;
  height: 500px;
  box-shadow: 0 0 5px slategray;
  position: absolute;
  top: 170px;
  background: white;
}

.img {
  margin-left: 10px;
  width: 20px;
  height: 22.8px;
}

.name {
  color: gray;
  margin-left: 20px;
  height: 26px;
  line-height: 26px;
}

.mg-t {
  margin-top: 30px;
}

.mg-t1 {
  width: 200px;
  margin-top: 30px;
}

.positiong-a {
  display: none;
  position: absolute;
  bottom: -8px;
  left: 182px;
  width: 350px;
  height: 447px;
  background: #ffffff;
  z-index: 33;
}

.hover-box:hover {
  background: rgb(224, 169, 201);

  .positiong-a {
    display: block;
  }
}

.gd {
  margin-top: 3px;
}

/*中间跟左边的da盒子*/
.box1 {
  position: relative;
  left: 215px;
  width: 745px;
}

/*中间轮播图案等盒子*/
.sweipe-box {
  width: 530px;
  height: 450px;
  box-shadow: 0 0 5px rgb(233, 176, 176);
}

/*右边登录盒子*/
.login-box {
  margin-left: 15px;
  width: 200px;
  height: 450px;
}

.imgx {
  width: 365px;
  height: 290px;
}

.img1 {
  width: 150px;
  height: 290px;
}

.img2 {
  width: 200px;
  height: 150px;
}

.img3 {
  width: 110px;
  height: 150px;
}

.box-login {
  width: 200px;
  height: 290px;
  box-shadow: 0 0 5px rgb(216, 168, 168);
}

.box-login1 {
  width: 200px;
  height: 290px;
  background: #FFFFFF;
  box-shadow: 0 0 5px rgb(92, 85, 85);
}

.erweima {
  margin-top: 10px;
  width: 200px;
  height: 150px;
  box-shadow: 0 0 5px rgb(216, 168, 168);
}

.touxiang {
  margin: 40px 60px 10px 60px;
  text-align: center;
  border-radius: 50%;
  width: 80px;
}

.img5 {
  width: 80px;
  height: 80px;
}

.yiLogin {
  width: 190px;
}
</style>
