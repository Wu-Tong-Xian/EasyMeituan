<template>
  <div >
  <div class="head1">
    <div class="w960">
    
    </div>
  </div>
    <router-view></router-view>
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
  .head1 {
    width: 100%;
    height: 40px;
    background: #F8F8F8;
  }
  .w960 {
    width: 960px;
    height: 40px;
    background: #b34f4f;
  }
</style>