<template>
  <div>
    <div class="box fl j-between">
      <!--左边分类盒子-->
      <div class="p-a">
        <div v-for="(item,index) in url" :key="index">
         <img class="img" :src="item.img" alt />
        </div>
       
      </div>
      <!--中间轮播图-->
      <div></div>
      <!--右边登录注册-->
      <div></div>
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
      url: [
        { img:require("../../assets/classfy/1.png")},
        
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 960px;
  height: 400px;
  background: sandybrown;
}
.img {
  width: 10px;
  height: 10px;
}
</style>