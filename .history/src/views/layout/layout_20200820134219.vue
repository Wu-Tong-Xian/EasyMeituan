<template>
  <div>
    <div class="head1">
      <div class="w960 fl">
        <div class="fl mg-r10">
          <img class="position1" src="../../assets/position1.png" alt />
          <div>{{city}}</div>
        </div>
        <div class="mg-r10">切换城市</div>
        <div class="fl">
          <div>[</div>
          <div>新津县</div>
          <div>崇州</div>
          <div>彭州</div>
          <div>]</div>
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
</style>