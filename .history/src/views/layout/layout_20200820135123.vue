<template>
  <div>
    <div class="head1">
      <div class="w960 fl j-between fz14 colg">
        <!--头部左边-->
        <div class="fl left-head1 j-between">
          <div class="fl">
            <img class="position1" src="../../assets/position1.png" alt />
            <div>{{city}}</div>
          </div>
          <div class>切换城市</div>
          <div class="fl ">
            <div>[</div>
            <div class='mg-lr4'>新津县</div>
            <div>崇州</div>
            <div class='mg-lr4'>彭州</div>
            <div>]</div>
          </div>
          <div>立即登录</div>
          <div>注册</div>
        </div>
        <!--头部又边-->
        <div class="fl j-between left-head1">
          <div>我的美团</div>
          <div>手机APP</div>
          <div>商家中心</div>
          <div>美团规则</div>
          <div>网站导航</div>
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
  methods: {},
  mounted() {
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
</style>