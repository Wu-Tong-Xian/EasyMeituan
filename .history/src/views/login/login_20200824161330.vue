<template>
  <div>
    <div class="w960">
      <img src="../../assets/logo.png" alt />
      <div class="fl j-between">
        <img src="img.img1" alt="">
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
      img: { img1: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg" },
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
</style>