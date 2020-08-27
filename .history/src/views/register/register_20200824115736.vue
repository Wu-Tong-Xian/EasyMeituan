<template>
  <div>
    <div class="head-box">
      <div class="w960 fl j-between">
        <img class="logo mg-t10" src="../../assets/logo.png" alt />
        <div class="fl login-box">
          <div class="colr">已有美团账号?</div>
          <div @click="goLogin" class="mg-l20 c-pointer mg-t t-center login">登录</div>
        </div>
      </div>
      <div class="w960">
        <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
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
    return {};
  },
  methods: {
    goLogin (){
      this.$router.push('login')
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.head-box {
  width: 100%;
  height: 60px;
  border-bottom: 3px solid #d8d8d8;
}
.w960 {
  margin: 0 auto;
  width: 960px;
}
.logo {
  
  width: 100px;
  height: 40px;
}
.login-box {
  line-height: 60px;
}
.login {
  width:60px ;
  height: 30px;
  line-height: 30px;
  background:#FFCC00;
}
.mg-t {
  
  margin-top: 15px;
}
</style>