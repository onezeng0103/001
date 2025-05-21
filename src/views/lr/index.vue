<template>
  <div class="lr">
    <img src="../../assets/img/Frame 9304.png" alt="" />
    <div class="btn">
      <div class="register" @click="register">注册</div>
      <div class="login" @click="login">登录</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
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
  img {
    width: 346px;
    height: 331px;
    margin-bottom: 140px;
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
      background: rgba(255, 255, 255, 0.07);
      border-radius: 49px 49px 49px 49px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
    }
    .login {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 47px;
      background: #ffffff;
      border-radius: 49px 49px 49px 49px;
      font-size: 16px;
      font-weight: 400;
      color: #000000;
    }
  }
}
</style>
