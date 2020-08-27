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
      <div class="w400">
        <div>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="手机号" prop="mobile">
              <div>
                <el-input v-model.number="ruleForm.mobile"></el-input>
                <div @click="yzm" class="p-a fz12 colg c-pointer">免费获取动态验证码</div>
              </div>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
            >
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="confirm" type="primary" @click="submitForm('ruleForm')">同意一下协议并注册</el-button>
              <div class="fl fz14 colr c-pointer">
                <div @click="goXieyi">《美团点评用户服务协议》</div>
                <div @click="goYinsi">《美团点评隐私政策》</div>
              </div>
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
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          let phone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
          if (!phone.test(value)) {
            callback(new Error("请输出正确手机号"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        mobile: "",
        email: "",
      },
      rules: {
        mobile: [{ validator: checkMobile, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    goXieyi(){
      this.$router.push('')
    },
    goLogin() {
      this.$router.push("login");
    },
    yzm() {
      const h = this.$createElement;
      this.$notify({
        title: "验证码提示",
        message: h(
          "i",
          { style: "color: red" },
          "想太多了,老大没给这个验证码接口,最为小弟我也没办法,直接下一步吧"
        ),
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  width: 60px;
  height: 30px;
  line-height: 30px;
  background: #ffcc00;
}
.mg-t {
  margin-top: 15px;
}
.w400 {
  width: 450px;
  margin: 50px 0 50px 280px;
}
.p-a {
  width: 110px;
  height: 14px;
  line-height: 14px;
  background: #eeeeee;
  margin: 5px 0 2px 0;
}
.confirm {
  width: 200px;
  height: 40px;
  line-height: 20px;
  background: #ffcd00;
  color: black;
  font-weight: 700;
}
.goXieyi{

}
.goYinsi {

}
</style>