<template>
  <div>
    <div class="head1">
      <div class="w960 fl j-between fz12 colg c-pointer">
        <!--头部左边-->
        <div class="fl left-head1 j-between">
          <div class="fl">
            <img class="position1" src="../../assets/position1.png" alt />
            <div>{{city}}</div>
          </div>
          <div @click="citySelection" class="h-hover">切换城市</div>
          <div class="fl">
            <div>[</div>
            <div @click="open"  class="mg-lr4 h-hover">新津县</div>
            <div @click="open" class="h-hover">崇州</div>
            <div @click="open" class="mg-lr4 h-hover">彭州</div>
            <div>]</div>
          </div>
          <div class="h-hover ys">立即登录</div>
          <div class="h-hover">注册</div>
        </div>
        <!--头部又边-->
        <div class="fl j-between left-head1">
          <div class="h-hover">我的美团</div>
          <div class="h-hover">手机APP</div>
          <div class="h-hover">商家中心</div>
          <div class="h-hover">美团规则</div>
          <div class="h-hover">网站导航</div>
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
     open() {
        this.$message('这是一条消息提示');
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
      this.$router.push('citySelection')
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
  color:#FFBB36;
}
</style>