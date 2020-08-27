<template>
  <div>
    <div class="stylish-box colw fl">
      <div class="fz18 mg-lr20">有格调</div>
      <div v-for="(item,index) in list " :key="index" >
        <div class="stylish-box1">
          <div @mouseenter="click(item,index)">{{item.title}}</div>
          <div v-if="item.flag === index" class="trigon"></div>
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
        { title: "约会聚餐", name: "yh", flag: 0 },
        { title: "丽人spa", name: "lr", flag: 1 },
        { title: "电影演出", name: "dy", flag: 2 },
        { title: "品质出游", name: "pz", flag: 3 },
        { title: "全部", name: "qb", flag: 4 },
      ],
    };
  },
  methods: {
    click(item,index) {
      let title = item.title;
      let name = item.name;
      this.list[index].flag = index;
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
  height: 40px;
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
  border-color: transparent transparent rgb(50, 212, 77) transparent;
  border-style: solid dashed dashed dashed;
}
</style>