<template>
  <div>
    <div class="box fl j-between">
      <!--左边分类盒子-->
      <div class="p-a">
        <div class="mg10 fz18 font-w">全部分类</div>
        <div class="fl fz12">
          <div class="mg-t">
            <div v-for="(item,index) in url" :key="index">
              <img class="img" :src="item.img" alt />
            </div>
          </div>
          <div class="mg-t1 p-r">
            <div class v-for="(item,index) in title" :key="index">
              <div class="fl hover-box j-between pd-r10">
                <div class="name">{{item.name}}</div>
                <div class="colg">></div>
                <!--鼠标浮到左边盒子对应的显示内容盒子-->
                <div class="positiong-a">
                  <div v-for="(item1,index1) in item.child" :key="index1">
                    <div class="fl j-between mg20">
                      <div class="fz14">{{item1.title}}</div>
                      <div class="gd">更多></div>
                    </div>
                    <div class="fl mg20 fl-wrap">
                      <div v-for="(item2,index2) in item1.child" :key="index2">
                        <div class="mg-r20 colg">{{item2}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fl box1 j-between">
        <!--中间轮播图-->
        <div>
          <div class="sweipe-box">
            <!--上 轮播图等2个图-->
            <div class="fl">
              
              <div></div>
            </div>
            <!--下 三个土-->
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <!--右边登录 分上下两个盒子-->
        <div class="login-box">
          <div></div>
          <div></div>
        </div>
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
      url: [
        { img: require("../../assets/classfy/1.png") },
        { img: require("../../assets/classfy/2.png") },
        { img: require("../../assets/classfy/3.png") },
        { img: require("../../assets/classfy/4.png") },
        { img: require("../../assets/classfy/5.png") },
        { img: require("../../assets/classfy/6.png") },
        { img: require("../../assets/classfy/7.png") },
        { img: require("../../assets/classfy/8.png") },
        { img: require("../../assets/classfy/9.png") },
        { img: require("../../assets/classfy/10.png") },
        { img: require("../../assets/classfy/11.png") },
        { img: require("../../assets/classfy/12.png") },
        { img: require("../../assets/classfy/13.png") },
        { img: require("../../assets/classfy/14.png") },
        { img: require("../../assets/classfy/15.png") },
        { img: require("../../assets/classfy/16.png") },
      ],
      title: [],
      urls: [
        {
          url:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          url:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          url:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          url:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
      ],
    };
  },
  methods: {
    getmenu() {
      this.$api
        .getmenu()
        .then((res) => {
          if (res.code === 200) {
            this.title = res.data.menu;
            console.log(this.title);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getmenu();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 960px;
  height: 450px;
}
.p-a {
  width: 200px;
  height: 500px;
  box-shadow: 0 0 5px slategray;
  position: absolute;
  top: 170px;
  background: white;
}
.img {
  margin-left: 10px;
  width: 20px;
  height: 22.8px;
}
.name {
  color: gray;
  margin-left: 20px;
  height: 26px;
  line-height: 26px;
}
.mg-t {
  margin-top: 30px;
}
.mg-t1 {
  width: 200px;
  margin-top: 30px;
}
.positiong-a {
  display: none;
  position: absolute;
  bottom: -8px;
  left: 192px;
  width: 350px;
  height: 447px;
  background: #ffffff;
}
.hover-box:hover {
  background: rgb(224, 169, 201);
  .positiong-a {
    display: block;
  }
}
.gd {
  margin-top: 3px;
}
/*中间跟左边的da盒子*/
.box1 {
  position: relative;
  left: 215px;
  width: 745px;
}
/*中间轮播图案等盒子*/
.sweipe-box {
  width: 530px;
  height: 450px;
  box-shadow: 0 0 5px rgb(233, 176, 176);
}
/*右边登录盒子*/
.login-box {
  margin-left: 15px;
  width: 200px;
  height: 450px;
  box-shadow: 0 0 5px rgb(216, 168, 168);
}
</style>