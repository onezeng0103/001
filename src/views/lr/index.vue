<template>
  <div class="lr">
    <div class="title">{{ VITE_APP_TITLE }}</div>
    <div class="text">专注于每一次交易的价值</div>
    <div class="img-box">
      <img src="../../assets/img/Frame 9304.png" alt="" />
      <div class="dizzy01">
        <img src="../../assets/img/dizzy01.png" alt="" />
      </div>
      <div class="dizzy02">
        <img src="../../assets/img/dizzy02.png" alt="" />
      </div>
    </div>

    <div class="btn">
      <div class="register" @click="register">注册</div>
      <div class="login" @click="login">登录</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
const register = () => {
  router.push('/register')
}
const login = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.lr {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  .title {
    font-size: 30px;
    font-family: 'Rowdies-Regular';
    color: var(--primary-color);
  }
  .text {
    font-size: 24px;
    color: var(--primary-color);
    margin-bottom: 50px;
  }
  .img-box {
    position: relative;
    width: 346px;
    height: 331px;
    margin-bottom: 100px;
    .dizzy01 {
      width: 190px;
      height: 190px;
      position: absolute;
      top: 0;
      right: -50px;
      z-index: 9999;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dizzy02 {
      position: absolute;
      bottom: -50px;
      left: -40px;
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btn {
    width: 346px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .register {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 47px;
      background: var(--regular-background);
      border-radius: 49px 49px 49px 49px;
      font-size: 16px;
      font-weight: 400;
      color: var(--primary-color);
    }
    .login {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 47px;
      background: var(--primary-color);
      border-radius: 49px 49px 49px 49px;
      font-size: 16px;
      font-weight: 400;
      color: var(--primary-background);
    }
  }
}
</style>
