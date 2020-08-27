<template>
  <div>
    <div class="stylish-box colw fl">
      <div class="fz18 mg-l20">有格调</div>
      <div class="stylish-box1 fl j-around">
        <div>约会聚餐</div>
        <div>丽人spa</div>
        <div>电影演出</div>
        <div>品质出游</div>
        <div>全部</div>
      </div>
    </div>
    <div class="trigon"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
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
  height: 40px;
  line-height: 40px;
  background: #f3bf48;
  margin-top: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.stylish-box1 {
  width: 400px;
}
.trigon {
  width: 10px;
  height: 0;
  overflow: hidden;
  border-width: 10px;
  border-color: rgb(223, 208, 208) transparent transparent transparent;
  border-style: solid dashed dashed dashed;
}
</style>