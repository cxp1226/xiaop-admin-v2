<template>
  <el-container class="login">
    <el-header class="header">
      <div class="logo">
        <img src="../../public/assets/logo.png" style="width: 50px; height: 50px;">
        <span>XiaopAdmin</span>
      </div>
      <el-switch @change="themeChange" :value="theme" active-value="light" inactive-value="dark" active-color="#303133" inactive-color="#CCC"></el-switch>
    </el-header>
    <el-main class="main">
      <transition appear enter-active-class="animate__animated animate__fadeInLeft animate__delay-2s">
      <div class="left">
          <div>
            <img src="../../public/assets/logo.png" style="width: 50px; height: 50px;">
            <span>XiaopAdmin</span>
          </div>
          <div>
            <img src="../../public/assets/login-box-bg.svg" style="width: 50%">
          </div>
      </div>
      </transition>
      <div class="right">
        <div class="login-box">
          <transition appear enter-active-class="animate__animated animate__fadeInRight">
            <div class="title">登录</div>
          </transition>
          <el-form ref="loginForm" :model="loginForm">
            <el-form-item>
              <transition appear enter-active-class="animate__animated animate__fadeInRight animate__delay-1s">
                <el-input v-model="loginForm.username"></el-input>
              </transition>
            </el-form-item>
            <el-form-item>
              <transition appear enter-active-class="animate__animated animate__fadeInRight animate__delay-2s">
                <el-input v-model="loginForm.password"></el-input>
              </transition>
            </el-form-item>
            <el-form-item>
              <transition appear enter-active-class="animate__animated animate__fadeInRight animate__delay-3s">
                <el-button type="primary" style="width: 100%">登录</el-button>
              </transition>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'myLogin',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  computed: {
    ...mapGetters('systemSetting', ['theme'])
  },
  methods: {
    ...mapActions('systemSetting', ['setTheme']),
    // 主题切换
    themeChange (theme) {
      this.setTheme(theme)
    }
  }
}
</script>

<style scope lang="less">
@import "@/assets/css/mixin.less";
@import "@/assets/css/common.less";
.bg_image(){
  [data-theme=light] & {
    background-image: url(/public/assets/login-bg.svg);
    background-color: @background-color-light;
  }
  [data-theme=dark] & {
    background-image: url(/public/assets/login-bg-dark.svg);
    background-color: @background-color-h1-dark;
  }
}
.login {
  width: 100%;
  height: 100%;
  .bg_image();
  background-position: 125% 0;
  background-repeat: no-repeat;
  background-size: 300% 100%;
  .header{
    .flex_end_center();
    .logo{
      display: none;
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
      >span{
        margin-left: 20px;
      }
    }
  }
  .main{
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
    display: flex;
    .left{
      width: 50%;
      padding-left: 200px;
      div:nth-child(1){
        width: 100%;
        height: 50px;
        font-size: 30px;
        font-weight: bold;
        color: #FFF;
        cursor: pointer;
        .flex_start_center();
        >span{
          margin-left: 20px;
        }
      }
      div:nth-child(2){
        width: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .right{
      width: 50%;
      overflow: hidden;
      .flex_start_center();
      .login-box{
        width: 50%;
        .title{
          font-size: 30px;
          font-weight: bold;
          padding: 20px 0;
        }
      }
    }
  }
}
@media(max-width: 1200px) {
  .login{
    background-image: none !important;
    .header{
      justify-content: space-between;
      .logo{
        display: flex;
        align-items: center;
      }
    }
    .left{
      display: none;
    }
    .right{
      width: 100% !important;
      justify-content: center !important;
      .login-box{
        padding: 50px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0/.1),0 2px 4px -2px rgb(0 0 0/.1);
      }
    }
  }
}
@media(max-width: 575px) {
  .right{
    .login-box{
      width: 100% !important;
    }
  }
}
:root {
  --animate-delay: 0.1s;
}
</style>
