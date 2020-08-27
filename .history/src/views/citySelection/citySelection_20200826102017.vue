<template>
<div>
  <div class="w960">
    <div class="mg-lr10">
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
                      <div @click="citys(item.name)" class="fz12 c-pointer colg mg10">{{item.name}}</div>
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
      <div class="fl fz14 mg-b20">
        <div>热门城市：</div>
        <div v-for="(item,index) in hots" :key="index">
          <div v-if="index <3" @click="citys(item.province)" class="mg-l10 c-pointer fz14 colg">{{item.province}}</div>
          <div v-if="index >= 3" @click="citys(item.name)" class="mg-l10 c-pointer fz14 colg">{{item.name}}</div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="fl fz14 mg-b20">
        <div>最近访问：</div>
        <div v-for="item in history" :key="item.id">
          <div @click="citys1(item)" class="mg-l10 c-pointer fz14 colg">{{item}}</div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="fl fz16 mg-b20">
        <div>按拼音首字母选择：</div>
        <!-- 横向的字母-->
        <div v-for="(item,index) in letter" :key="index">
          <a :href="`#${index}`" class="c-pointer mg-l15">{{item.id}}</a>
          <div></div>
        </div>
      </div>

      <div class="fl mg-t20 fl-wrap fz14 j-between" v-for="(item,index) in city1" :key="index">
        <!-- 左侧竖直的字母 跟右侧城市对应得城市名-->
        <div :id="index" class="index-box t-center mg-t10">{{index}}</div>
        <div class="fl citys-box fl-wrap">
          <div v-for="(item1) in item" :key="item1.id" @click="citys1(item1.name)" class="c-pointer fl">
            <!-- 右侧得城市名 跟左侧字母对应的城市-->
            <div class="item1-box h-hover colg mg-t10 mg-l15">{{item1.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import city1 from "../../可能要用的js文件/city";
import letter from "../../可能要用的js文件/letter";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      province: [], //省份
      input: "", //搜索框
      value: "", //没用但是必须定义
      hots: [], //热门城市
      history: [], //访问记录
      letter: [], //字母
      city1: [], //字母对应得城市
    };
  },
  methods: {
    gethotCity() {
      //热门城市
      this.$api
        .gethotCity()
        .then((res) => {
          console.log(res);
          this.hots = res.data.hots;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProvince() {
      //所有省份
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
    // 点击最近访问城市  存在vuex 跳转
    citys1(browse) {
      // 拿到点击城市拿到的地址
      this.$router.push("home");

      this.$store.commit("setCity", browse);
    },
    // 点击城市，把每次点击城市存起来，跳转到home页面
    citys(browse) {
      this.$router.push("home");
      this.$store.commit("setCity", browse); //把点击的城市存在vueX
      // 把最近点击得城市存起来，用作历史记录
      if (!localStorage.browse) {
        let arr = [];
        arr.push(browse);
        localStorage.setItem("browse", JSON.stringify(arr));
      } else {
        let arr = JSON.parse(localStorage.browse);
        arr.push(browse);
        localStorage.setItem("browse", JSON.stringify(arr));
      }
    },
  },
  mounted() {
    this.letter = letter.data.list;
    this.city1 = city1.data.cities;

    this.gethotCity();
    this.getProvince();
    this.history = JSON.parse(localStorage.getItem("browse"));
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.w960 {
  width: 960px;
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

.mg-l15 {
  margin-left: 18px;
}

.citys-box {
  width: 880px;
}

.item1-box {
  width: 70px;
  height: 20px;
}

.index-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgb(228, 140, 140);
  line-height: 60px;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
