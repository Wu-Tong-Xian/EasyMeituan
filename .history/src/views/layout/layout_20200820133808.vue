<template>
  <div >
  <div class="head1">
    <div class="w960">
      <div class="fl">
        <img class="position1" src="../../assets/position1.png" alt="">
        <div>{{city}}</div>
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
      city:''
    };
  },
  methods: {
  },
  mounted() {
     this.$api.getposition().then(res =>{
        console.log(res);
        this.city =JSON.parse(res.data).city
      }).catch(err =>{
        console.log(err);
      })
  },
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
    line-height: 40px;
  }
  .position1 {
    width: 15px;
    height:15px ;
    margin-top: 8px;
  }
</style>