<template>
  <div class="fullpage">
    <div class="login-container">
      <div class="header">
        <header>
          <img class="logo" width="50" height="42" src="./logo-blue.png" alt="">
          <span class="title">贸易信息
            <i>查询系统</i>
          </span>
        </header>
      </div>
      <div class="decrate-img">
        <img src="./login-img.png" alt="">
      </div>
      <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
        <h3 class="title">登录</h3>
        <el-form-item prop="email" :class="{active: userIsOrNotOnFocus}">
          <span class="svg-container">
            <wscn-icon-svg icon-class="touxiang" />
          </span>
          <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="用户名" v-on:focus="userIsOrNotOnFocus=true" v-on:blur="userIsOrNotOnFocus=false"></el-input>
        </el-form-item>
        <el-form-item prop="password" :class="{active: passIsOrNotOnFocus}">
          <span class="svg-container">
            <wscn-icon-svg icon-class="mima" />
          </span>
          <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" v-on:focus="passIsOrNotOnFocus=true" v-on:blur="passIsOrNotOnFocus=false" autoComplete="on" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="border:none">
          <el-button class="loginBtn" type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
        <el-row style="margin: -10px 0 20px">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-checkbox v-model="checked" class="remenberPassword">记住密码</el-checkbox>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light" style="font-size: 14px">
              <router-link to="" class="forget-pwd" style="display:inline-block; width:100%; text-align: right">
                忘记密码?
              </router-link>
            </div>
          </el-col>
        </el-row>
        <div>
  
        </div>
        <div class='tips'>user账号:user@zs5s.com 密码数字随便填</div>
  
      </el-form>
      <el-dialog title="第三方验证" :visible.sync="showDialog">
        邮箱登录成功,请选择第三方验证
        <socialSign></socialSign>
      </el-dialog>
      <footer class="footer">Copyright 2016-2020 杭州海数科技有限公司©版权所有 客服热线：0571-56599105</footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { isWscnEmail } from 'utils/validate';
// import { getQueryObject } from 'utils';
import socialSign from './socialsignin';

export default {
  components: { socialSign },
  name: 'login',
  data() {
    const validateEmail = (rule, value, callback) => {
      if (!isWscnEmail(value)) {
        callback(new Error('请输入正确的合法邮箱'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: 'admin@zs5s.com',
        password: ''
      },
      loginRules: {
        email: [
          { required: true, trigger: 'blur', validator: validateEmail }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePass }
        ]
      },
      loading: false,
      showDialog: false,
      checked: true,
      userIsOrNotOnFocus: false,
      passIsOrNotOnFocus: false
    }
  },
  computed: {
    ...mapGetters([
      'auth_type'
    ])
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
            this.loading = false;
            this.$router.push({ path: '/' });
            // this.showDialog = true;
          }).catch(err => {
            this.$message.error(err);
            this.loading = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1);
      // const hashObj = getQueryObject(hash);
      // const originUrl = window.location.origin;
      // history.replaceState({}, '', originUrl);
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // };
      // const codeName = hashObj[codeMap[this.auth_type]];
      // if (!codeName) {
      //   alert('第三方登录失败');
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' });
      //   });
      // }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan);
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan);
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
.tips {
  font-size: 14px;
  color: red;
  margin-bottom: 5px;
}

.fullpage {
  width: 100%;
  height: 100%;
  background: url(./login-banner.jpg) no-repeat;
  background-size: cover;
}

.login-container {
  @include relative;
  height: 100vh;
  max-width: 1920px;
  min-width: 1024px;
  margin: 0 auto;

  .header {
    height: 74px;
    background: #fff;
    padding: 15px 20px;
    font-size: 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

    header {
      max-width: 1920px;
      min-width: 1024px;
      margin: 0 auto;
    }

    .logo {
      width: 50px;
      vertical-align: top;
      margin-right: 20px;
    }

    .title {
      display: inline-block;
      vertical-align: top;
      line-height: 42px;
      padding-left: 15px;
      color: #333333;
      font-size: 26px;
      border-left: 1px solid #ccc;

      i {
        font-style: normal;
        font-size: 16px;
      }
    }
  }

  .decrate-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 80px;
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 74px;
    text-align: center;
    line-height: 74px;
    font-size: 14px;
    color: #333333;
    background: #fff;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    -webkit-text-fill-color: #222 !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #222222;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 84%;
    background: #fff;
  }
  .svg-container {
    display: inline-block;
    padding: 6px 14px 6px 14px;
    color: #889aa4;
    font-size: 14px;
    background: #bfbfbf;
  }

  .login-form {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 80px;
    width: 350px;
    overflow: hidden;
    border-radius: 10px;
    padding: 0 30px 15px 30px;
    color: #222222;
    background: #fff; // margin: 120px auto;
    .title {
      height: 54px;
      line-height: 54px;
      color: #333333;
      margin: 0 -35px 30px;
      text-align: center;
      letter-spacing: 2px;
      font-size: 18px;
      font-weight: 400;
      background: #dee3ec;
    }
  }

  .el-form-item {
    border: 1px solid #bfbfbf;
    background: #fff;
    color: #222222;

    &.active {
      border: 1px solid #077fef;
    }
    .loginBtn {
      background-color: 077fef;
    }
  }

  .forget-pwd {
    color: #222;
  }

  .remenberPassword.el-checkbox {
    background: transparent!important;
    font-weight: 400;
  }

  .el-checkbox__inner {
    width: 16px;
    height: 16px;
    border-radius: 0;

    &:after {
      left: 4px;
      top: 1px;
    }
  }
}
</style>
