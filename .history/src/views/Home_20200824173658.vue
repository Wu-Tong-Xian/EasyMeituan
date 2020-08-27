<template>
  <div>
    <div class="box">
    <div class="w960">
    <sortingRotations></sortingRotations>
    <stylish></stylish>
    </div>
      
    
    </div>
  </div>
</template>

<script>
import sortingRotations from '../components/home/sortingRotations'
import stylish from '../components/home/stylish'
export default {
  name: "",
  props: {},
  components: {
     sortingRotations,
     stylish,
  },
  data() {
    return {
      usreInfo:{},  
    };
  },
  methods: {},
  mounted() {
    
    console.log(JSON.parse(localStorage.getItem('userInfo')));
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  background: #f8f8f8;
  
}
.w960 {
  width: 960px;
  margin: 0 auto;
}
</style>
