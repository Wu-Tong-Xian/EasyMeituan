<template>
  <div>
    <div class="head1">
      <div class="w960 fl j-between fz12 colg c-pointer">
        <!--头部左边-->
        <div class="fl left-head1 j-between">
          <div @click="open1" class="fl">
            <img class="position1" src="../../assets/position1.png" alt />
            <div>{{city}}</div>
          </div>
          <div @click="citySelection" class="h-hover">切换城市</div>
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
          <div class="h-hover nav">网站导航</div>
          <!-- 网站导航 鼠标移入的样式 -->
          <div class="navigation fl j-around">
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
                <div class="box1">
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
              <div class="colb " >吃美食</div>
              <div class="fl">
                <div class="box1 ">
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
              <div class="colb " >看电影</div>
              
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
              <div class="colb">手机应用</div>
                <div class="box1 ">
                  <div><img src="../../assets/mei1.png" alt=""></div>
                  <div><img src="../../assets/mei2.png" alt=""></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: "",
    };
  },
  methods: {
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
          this.city = JSON.parse(res.data).city;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    citySelection() {
      this.$router.push("citySelection");
    },
  },
  mounted() {
    this.getpotions();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
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
  background: rgb(231, 224, 224);
}
.navigation {
  position: absolute;
  left: -174.4%;
  top: 100%;
  width: 960px;
  height: 250px;
  background: #ce2f2f
}
.box1 {
  line-height: 30px;
}
</style>