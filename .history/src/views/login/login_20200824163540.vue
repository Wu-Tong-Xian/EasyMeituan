<template>
  <div>
    <div class="w960">
      <img class="logo" src="../../assets/logo.png" alt />
      <div class="fl j-between">
        <img :src="img.img1" alt />
        <div>
          <div class="box1">
            <el-input placeholder="手机号" v-model="phone">
              <template slot="prepend">+ 86 ></template>
            </el-input>
            <el-input placeholder="密码" v-model="input1">
              <template slot="prepend">
                <img class="ks-img" src="../../assets/ks.png" alt />
              </template>
            </el-input>
          </div>
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
  width: 400px;
}
.ks-img {
  width: 20px;
}
</style>