<template>
<div>
  <div class="w960">
    <div class="fl j-around mg-tb20">
      <div class="fl">
        <div class="box1">按省份选择：</div>
        <el-row>
          <el-col :span="12">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <div class="sf fl j-around">
                  <div>省份</div>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="name-box fl-wrap fl">
                  <div v-for="item in province" :key="item.id " class>
                    <div class="fz12 colg mg10">{{item.name}}</div>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <div class="box2 mg-l20">
          <el-select v-model="value" disabled placeholder="城市"></el-select>
        </div>
      </div>

      <div class="fl">
        <div class="box1">直接搜索：</div>
        <el-input v-model="input" placeholder="请输入中文城市或拼音"></el-input>
      </div>
    </div>
    <el-divider></el-divider>
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
      input: "",
      value: "",
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

.box1 {
  width: 110px;
  height: 37px;
  line-height: 37px;
}

.sf {
  width: 140px;
  height: 37px;
  line-height: 37px;
  border-radius: 4px;
  border: 1px solid rgb(207, 193, 193);
}

.box2 {
  width: 140px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #818385;
}

.el-icon-arrow-down {
  font-size: 12px;
  margin-top: 9px;
}

.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.name-box {
  width: 250px;
  height: 380px;
}
</style>
