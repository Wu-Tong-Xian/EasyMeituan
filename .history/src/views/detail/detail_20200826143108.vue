<template>
<div>
  <div style="display:flex;width:100%">
    <input type="text" v-model="address" />
    <button @click="search">搜索</button>
    <div id="result" class="amap_lib_placeSearch">
      <div class="amap_lib_placeSearch_list amap-pl-pc" v-for="(item,index) in poiArr" @click="openMarkerTipById1(index,$event)" @mouseout="onmouseout_MarkerStyle(index+1,$event)" :key="index">
        <div class="poibox" style="border-bottom: 1px solid #eaeaea">
          <div class="amap_lib_placeSearch_poi poibox-icon" :class="index==selectedIndex?'selected':''">{{index+1}}</div>
          <div class="poi-img" v-if="item.url" :style="'background-image:url('+item.url+'?operate=merge&amp;w=90&amp;h=56&amp;position=5)'"></div>
          <h3 class="poi-title">
            <span class="poi-name">{{item.name}}</span>
          </h3>
          <div class="poi-info">
            <p class="poi-addr">地址：{{item.address}}</p>
            <p class="poi-tel">电话：{{item.tel}}</p>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <div id="iCenter"></div>
  </div>
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
</style>
