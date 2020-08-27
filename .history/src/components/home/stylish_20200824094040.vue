<template>
  <div>
    <div class="stylish-box colw fl">
      <div class="fz18 mg-lr20">有格调</div>
      <div v-for="(item,index) in list " :key="index" class="stylish-box1 fl p-r">
        <div>{{item.title}}</div>
        <div v-if="item.flag === true" class="trigon"></div>
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
        { title: "约会聚餐", name: "yh", flag: true },
        { title: "丽人spa", name: "lr", flag: false },
        { title: "电影演出", name: "dy", flag: false },
        { title: "品质出游", name: "pz", flag: false },
        { title: "全部", name: "qb", flag: false },
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
.stylish-box {
  width: 100%;
  height: 50px;
  line-height: 40px;
  background: #f3bf48;
  margin-top: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.stylish-box1 {
  width: 80px;
}
.trigon {
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 10px;
  border-color: transparent transparent rgb(248, 246, 246) transparent;
  border-style: solid dashed dashed dashed;
  position: absolute;
  top: 30px;
  right: 25px;
}
</style>