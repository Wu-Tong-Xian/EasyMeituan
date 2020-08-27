<template>
  <div>
    <div class="box fl j-between">
      <!--左边分类盒子-->
      <div class="p-a">
        <div v-for="(item,index) in url" :key="index">
         <img :src="item" alt />
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
        { img: "../../assets/classfy/1.png" },
        { img: "../../assets/classfy/2.png" },
        { img: "../../assets/classfy/3.png" },
        { img: "../../assets/classfy/4.png" },
        { img: "../../assets/classfy/5.png" },
        { img: "../../assets/classfy/6.png" },
        { img: "../../assets/classfy/7.png" },
        { img: "../../assets/classfy/8.png" },
        { img: "../../assets/classfy/9.png" },
        { img: "../../assets/classfy/10.png" },
        { img: "../../assets/classfy/11.png" },
        { img: "../../assets/classfy/12.png" },
        { img: "../../assets/classfy/13.png" },
        { img: "../../assets/classfy/14.png" },
        { img: "../../assets/classfy/15.png" },
        { img: "../../assets/classfy/16.png" },
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
</style>