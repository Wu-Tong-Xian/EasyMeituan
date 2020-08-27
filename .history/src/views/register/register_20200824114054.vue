<template>
  <div>
    <div class="head-box">
      <div class="w960 fl j-between">
        <img class="logo" src="../../assets/logo.png" alt />
        <div class="fl">
          <div class="colr">已有美团账号?</div>
          <div class="mg-l20 t-center login">登录</div>
        </div>
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.head-box {
  width: 100%;
  height: 60px;

  border-bottom: 3px solid #d8d8d8;
}
.w960 {
  margin: 0 auto;
  width: 960px;
  line-height: 60px;
}
.logo {
  width: 100px;
  height: 60px;
}
.login {
  width:100px ;
  height: 30px;
  
  background:#FFCC00;
  
}
</style>