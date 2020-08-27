<template>
<div class="m0">
  <!--头部公共-->
  <div class="head1">
    <div class="w960 fl j-between fz12 colg c-pointer">
      <!--头部左边-->
      <div class="fl left-head1 j-between">
        <div @click="open1" class="fl">
          <img class="position1" src="../../assets/position1.png" alt />
          <div>{{citys}}</div>
        </div>
        <div @click="citySelection1" class="h-hover">切换城市</div>
        <div @click="open" class="fl">
          <div>[</div>
          <div class="mg-lr4 h-hover">新津县</div>
          <div class="h-hover">崇州</div>
          <div class="mg-lr4 h-hover">彭州</div>
          <div>]</div>
        </div>
        <div @click="gologin" class="h-hover ys">立即登录</div>
        <div @click="goregister" class="h-hover">注册</div>
      </div>
      <!--头部又边-->
      <div class="fl p-r j-between left-head1">
        <!-- 下拉菜单 -->
        <el-dropdown size="mini">
          <span class="el-dropdown-link h-hover colg fz12">
            我的美团
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的订单</el-dropdown-item>
            <el-dropdown-item>我的收藏</el-dropdown-item>
            <el-dropdown-item>抵用卷</el-dropdown-item>
            <el-dropdown-item>账户设置</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div @click="gophoneApp" class="h-hover">手机APP</div>
        <!-- 下拉菜单 -->
        <el-dropdown size="mini">
          <span class="el-dropdown-link h-hover colg fz12">
            商家中心
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>美团商饮餐户</el-dropdown-item>
            <el-dropdown-item>登录商家中心</el-dropdown-item>
            <el-dropdown-item>美团只能收银</el-dropdown-item>
            <el-dropdown-item>我想合作</el-dropdown-item>
            <el-dropdown-item>手机免费开店</el-dropdown-item>
            <el-dropdown-item>餐饮代理商招募</el-dropdown-item>
            <el-dropdown-item>商家免费开票</el-dropdown-item>
            <el-dropdown-item>免费合作美团合作</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 下拉菜单 -->
        <el-dropdown size="mini">
          <span class="el-dropdown-link h-hover colg fz12">
            美团规则
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>美团中心</el-dropdown-item>
            <el-dropdown-item>美团规则</el-dropdown-item>
            <el-dropdown-item>美团评议员</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="h-hover nav fl">
          <div>网站导航</div>
          <div class="navigation">
            <div class="fl j-around">
              <div class="fz14 colg">
                <div class="colb t-center">酒店旅游</div>
                <div class="fl">
                  <div class="box1">
                    <div>国际机票</div>
                    <div>经济型酒店</div>
                    <div>公寓</div>
                    <div>青年旅舍</div>
                    <div>农家院</div>
                  </div>
                  <div class="box1 mg-lr20">
                    <div>火车站</div>
                    <div>主体酒店</div>
                    <div>豪华酒店</div>
                    <div>度假酒店</div>
                  </div>
                  <div class="box1">
                    <div>民宿</div>
                    <div>商务酒店</div>
                    <div>客栈</div>
                    <div>别墅</div>
                  </div>
                </div>
              </div>

              <div class="fz14 colg">
                <div class="colb t-center">吃美食</div>
                <div class="fl">
                  <div class="box1 mg-r20">
                    <div>烤鱼</div>
                    <div>烧烤</div>
                    <div>火锅</div>
                  </div>
                  <div class="box1">
                    <div>特色</div>
                    <div>自助小吃</div>
                    <div>代金卷</div>
                  </div>
                </div>
              </div>

              <div class="fz14 colg">
                <div class="colb t-center">看电影</div>
                <div class="box1">
                  <div>热映电影</div>
                  <div>热门电影</div>
                  <div>热映电影口碑榜</div>
                  <div>最受期待电影</div>
                  <div>国内票行榜</div>
                  <div>欧美票行榜</div>
                  <div>电影排行榜</div>
                </div>
              </div>

              <div class="fz14 colg">
                <div class="colb t-center">手机应用</div>
                <div class="box1">
                  <div>
                    <img src="../../assets/mei1.png" alt />
                  </div>
                  <div>
                    <img src="../../assets/mei2.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 网站导航 鼠标移入的样式 -->
    </div>
  </div>
  <!--logo 搜索公共部分-->
  <div class="search-box">
    <div class="w9601">
      <div class="fl j-between">
        <img @click="gohome" class="logo" src="../../assets/logo.png" alt />
        <div class="input-box j-between p-r">
          <el-input @input="search1" @focus="focus" @blur="blur" placeholder="请输入内容" v-model="keyword" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>

          <div v-if="flag === true" class="fl history j-between">
            <div class="mg-l20">搜索历史</div>
            <div @click="a11" class="mg-r20">删除历史记录</div>
          </div>
          <div v-if="keyword !== ''" class="name-box">
            <div v-for="(item,index) in searchList" :key="index">
              <div @click="detail(item)" v-if="index < 11" class="name1 mg-l10">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="fl j-around">
        <div></div>
        <div class="fl bottom-box j-between">
          <div>美团外卖</div>
          <div>猫眼电影</div>
          <div>美团酒店</div>
          <div>民宿 / 公寓</div>
          <div>商家入驻</div>
          <div>美团公益</div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <div class="dbl-box1">
    <div class="dbl-box">
      <img class="dbl c-pointer" src="../../assets/底部栏.png" alt />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      flag: false,
      keyword: "",
      citys: "",
      searchList: [], //搜索列表
      searchTopList: [], //搜索建议
    };
  },
  methods: {
    gohome() {
      this.$router.push('home')
    },
    a11() {
      console.log(111);
    },
    focus() {
      this.flag = true;
      console.log(this.flag);
    },
    blur() {
      // setTimeout(function() {
      this.flag = false;
      // }, 5000);
    },
    detail(item) {
      this.$message("你点你爹呢,瓜皮,");
    },

    // 搜索建议
    search1() {
      if (this.keyword !== "") {
        this.$api
          .getresults(this.city, this.keyword)
          .then((res) => {
            console.log(res);
            this.searchList = res.data.pois;
          })
          .catch((err) => {
            console.log(err);
          });
        // 搜索关键字  因为这里传城市 跟关键字 不处理就是成都市 我只要成都
        //  this.city.slice(2,3);
        // console.log(this.city);
        // this.$api
        //   .getsearchTop(this.city, this.keyword)
        //   .then((res) => {
        //     console.log(res);
        //     this.searchTopList = res.data.pois;
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      }
    },
    gophoneApp() {
      this.$router.push("phoneApp");
    },
    gologin() {
      this.$router.push("login");
    },
    goregister() {
      this.$router.push("register");
    },
    open() {
      this.$message("想太多,这里只是装饰");
    },
    open1() {
      this.$message("请点击又边的切换城市");
    },
    getpotions() {
      this.$api
        .getposition()
        .then((res) => {
          console.log(res);
          this.citys = JSON.parse(res.data).city;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    citySelection1() {
      this.$router.push('citySelection')
    },
  },
  mounted() {
    // return 里定义得 ''  在显示器就是 打印 undefined
    // 如果this.city只是定义了 就调用获取城市得请求 否则就用手动选择城市存起来的城市
    if (this.citys === '') {
      this.getpotions();
    } else {
      this.citys = this.city
    }

  },
  watch: {},
  computed: {
    city() {
      return this.$store.state.city
    }
  },
};
</script>

<style lang="scss" scoped>
// 头部样式
.head1 {
  width: 100%;
  height: 40px;
  background: #f8f8f8;
}

.w960 {
  margin: 0 auto;
  width: 960px;
  height: 40px;
  line-height: 40px;
}

.position1 {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}

.left-head1 {
  width: 350px;
}

.mg-lr4 {
  margin: 0 4px 0 4px;
}

.ys {
  color: #ffbb36;
}

.el-dropdown-item {
  color: #ffbb36;
}

.nav:hover {
  background: #ffffff;

  .navigation {
    display: block;
  }
}

.navigation {
  position: absolute;
  left: -174.4%;
  top: 100%;
  width: 960px;
  height: 320px;
  background: #ffffff;
  display: none;
  z-index: 11;
}

.box1 {
  margin-top: 20px;
  line-height: 35px;
  text-align: center;
}

// 搜索盒子样式
.search-box {
  width: 100%;
  height: 180px;
  background: #ffffff;
}

.w9601 {
  margin: 0 auto;
  width: 960px;
  height: 180px;
  line-height: 110px;
}

.logo {
  margin-top: 31px;
  height: 50px;
}

.input-box {
  width: 450px;
}

.history {
  box-shadow: 0 0 5px rgb(32, 29, 29);
  width: 391px;
  height: 105px;
  background: #ffffff;
  color: #201d1d;
  font-size: 16px;
  line-height: 25px;
  position: absolute;
  top: 77px;
  border-radius: 5px;
}

.name-box {
  box-shadow: 0 0 5px rgb(32, 29, 29);
  width: 391px;
  height: 256px;
  background: #ffffff;
  color: #807878;
  font-size: 14px;
  position: absolute;
  top: 77px;
}

.name1 {
  line-height: 26px;
}

.bottom-box {
  font-size: 18px;
  width: 550px;
  line-height: 70px;
}

.dbl-box1 {
  width: 100%;
  background: #f8f8f8;
}

.dbl-box {
  margin: 0 auto;
  width: 960px;
  background: #f8f8f8;
}

.dbl {
  margin: 0 auto;
  width: 960px;
}
</style>
