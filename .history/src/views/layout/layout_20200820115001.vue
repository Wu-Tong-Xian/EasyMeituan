<template>
  <div >
  <div class="head1">
    <div class="w960">
      <img class="position1" src="../../assets/position1.png" alt="">
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
  .head1 {
    width: 100%;
    height: 40px;
    background: #F8F8F8;
  }
  .w960 {
    margin: 0 auto;
    width: 960px;
    height: 40px;
  }
  .position1 {
    width: 20px;
    height:20px ;
    margin-top: 10px;
  }
</style>