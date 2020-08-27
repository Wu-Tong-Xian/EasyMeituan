<template>
  <div>
    <div class="w960">
      <img class="logo" src="../../assets/logo.png" alt />
      <div class="fl j-between">
        <img :src="img.img1" alt />
        <div>
          <div class="box1">
            <div class="fl mg-b20 j-between c-pointer colg fz14">
              <div class>账号登陆</div>
              <div class="fz12">手机动态码登录</div>
            </div>
            <el-input prefix-icon="el-icon-phone-outline" placeholder="手机号" v-model="phone"></el-input>
            <el-input class="mg-t20" prefix-icon="el-icon-lock" placeholder="密码" v-model="input1"></el-input>
          </div>
          <div class="fl mg-t20 fz12 c-pointer j-between colr">
            <div></div>
            <div>忘记密码？</div>
          </div>
          <div class="login">立即登录</div>
        </div>
      </div>
      <img class="dbl1" src="../../assets/dbl1.png" alt />
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
      phone: "",
      password: "",
      img: {
        img1:
          "http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg",
      },
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.w960 {
  width: 960px;
  margin: 0 auto;
}
.logo {
  width: 130px;
  margin-top: 40px;
}
.dbl1 {
  margin-top: 50px;
  width: 960px;
}
.box1 {
  width: 250px;
}
.ks-img {
  width: 20px;
}
.login {
  width: 250px;
  height: 30px;
  line-height: 30px;
  background: #FFCC00;
  border-radius: 2px;
  text-align: center;
}
</style>