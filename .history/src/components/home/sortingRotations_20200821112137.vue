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
        { img:require("../../assets/classfy/2.png")},
        { img:require("../../assets/classfy/3.png")},
        { img:require("../../assets/classfy/4.png")},
        { img:require("../../assets/classfy/5.png")},
        { img:require("../../assets/classfy/6.png")},
        { img:require("../../assets/classfy/7.png")},
        { img:require("../../assets/classfy/8.png")},
        { img:require("../../assets/classfy/9.png")},
        { img:require("../../assets/classfy/10.png")},
        { img:require("../../assets/classfy/11.png")},
        { img:require("../../assets/classfy/12.png")},
        { img:require("../../assets/classfy/13.png")},
        { img:require("../../assets/classfy/14.png")},
        { img:require("../../assets/classfy/15.png")},
        { img:require("../../assets/classfy/16.png")},
        
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
  
}
.p-a {
  width: 200px;
  height: 450px;
  box-shadow: 0 0 5px slategray;
}
.img {
  width: 20px;
  height: 20px;
}
</style>