<template>
<div>
  <div>
    <div class="stylish-box colw fl">
      <div class="fz18 ygd mg-lr20">有格调</div>
      <div v-for="(item,index) in list " :key="index">
        <div class="stylish-box1">
          <div @mouseenter="click(item,index)">{{item.title}}</div>
          <div v-if="flag === index" class="trigon"></div>
        </div>
      </div>
    </div>
    <div>
      <img class="mtdh mg-tb20 c-pointer" src="../../assets/mtdh.png" alt />
    </div>
  </div>
  <div class="w960">
    <div v-for='(item,index) in stylishList' :key="index">
      <img class="url-img" :src="item.photos[0].url" alt="">
      <div>{{item.adname}}</div>
      <div>{{item.address}}</div>
      <div>{{item.type}}</div>
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
      stylishList: [],
      list: [{
          title: "约会聚餐",
          name: "美食",
        },
        {
          title: "丽人spa",
          name: "丽人",
        },
        {
          title: "电影演出",
          name: "电影",
        },
        {
          title: "品质出游",
          name: "旅游",
        },
        {
          title: "全部",
          name: "景点",
        },
      ],
      city: "成都",
      flag: 0,
      name: "美食",
    };
  },
  methods: {
    click(item, index) {
      this.name = item.name;
      this.flag = index;
      this.getresults();
    },
    getresults() {
      this.$api
        .getresults(this.city, this.name)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            this.stylishList = res.data.pois;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getresults();
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.stylish-box {
  width: 100%;
  height: 49px;

  background: #f3bf48;
  margin-top: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.ygd {
  margin-top: 10px;
}

.stylish-box1 {
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: center;
}

.trigon {
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 8px;
  border-color: transparent transparent rgb(247, 248, 247) transparent;
  border-style: solid dashed dashed dashed;
}

.mtdh {
  width: 960px;
}

.w960 {
  margin: 0 auto;
  width: 960px;
  height: 1000px;
  background: #FFFFFF;
}

.url-img {
  width: 300px;
  height: 200px;
}
</style>
