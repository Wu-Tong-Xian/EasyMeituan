<template>
  <div>
    <div class="w960">
      <img class="logo" src="../../assets/logo.png" alt />
      <div class="">
        <img :src="img.img1" alt="">
        <div></div>
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
      img: { img1: "http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" },
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
</style>