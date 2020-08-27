<template>
  <div>
    <div class="stylish-box colw fl">
      <div class="fz18 mg-lr20">有格调</div>
      <div v-for="(item,index) in list " :key="index" >
        <div class="stylish-box1">
          <div @mouseenter="click(item,index)">{{item.title}}</div>
          <div v-if="flag === index" class="trigon"></div>
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
      list: [
        { title: "约会聚餐", name: "yh", },
        { title: "丽人spa", name: "lr",  },
        { title: "电影演出", name: "dy",  },
        { title: "品质出游", name: "pz", },
        { title: "全部", name: "qb", },
      ],
      flag:0
    };
  },
  methods: {
    click(item,index) {
      let title = item.title;
      let name = item.name;
      this.flag = index;
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.stylish-box {
  width: 100%;
  height: 49px;
  line-height: 30px;
  background: #f3bf48;
  margin-top: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.stylish-box1 {
  display: flex;
  flex-direction: column;
  width: 100px;
 align-items: center;
}
.trigon {
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 10px;
  border-color: transparent transparent rgb(247, 248, 247) transparent;
  border-style: solid dashed dashed dashed;
}
</style>