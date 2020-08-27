<template>
<div>
  <div class="w960">
    <div>
      <div>按省份选择：</div>
      <el-row class="block-col-2">

        <el-col :span="12">

          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="sf">省份</div>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <div v-for='item in province' :key="item.id">
                <div>{{item.name}}</div>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
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
      province: [],
    };
  },
  methods: {
    getProvince() {
      this.$api
        .getProvince()
        .then((res) => {
          console.log(res);
          this.province = res.data.province;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProvince();
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.w960 {
  width: 960px;
  height: 2000px;
  margin: 0 auto;
  background: white;
  border: 1px solid rgb(229, 231, 230);
}

.sf {
  width: 140px;
  height: 40px;
  border: 1px solid red;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  border: 1px solid steelblue;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.demonstration {

  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
