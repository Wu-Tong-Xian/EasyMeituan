<template>
  <div>
    <div class="head-box">
      <div class="w960">
        <img class="logo" src="../../assets/logo.png" alt />
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
  line-height: 60px;
  border-bottom: 3px solid #d8d8d8;
  margin: 0 auto;
}
.w960 {
  width: 960px;
}
.logo {
  width: 100px;
}
</style>