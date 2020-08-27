<template>
  <div>
    <div class="box">
      <sortingRotations></sortingRotations>
    
    </div>
  </div>
</template>

<script>
import sortingRotations from '../components/home/sortingRotations'
export default {
  name: "",
  props: {},
  components: {
     sortingRotations
  },
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
.box {
  width: 100%;
  background: #f8f8f8;
  height: 1000px;
}
</style>
