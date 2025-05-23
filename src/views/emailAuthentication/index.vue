<!-- 绑定邮箱 -->
<template>
  <div style="height: 44px">
    <div
      style="
          background: #000;
          border-bottom-color: rgb(238, 238, 238);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
          position: fixed;
          width: 100%;
          box-sizing: border-box;
          top: 0;
        "
    >
      <div style="height: 0px; width: 100%; box-sizing: border-box"></div>
      <div
        style="
            height: 44px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
          "
      >
        <div
          @click="router.back()"
          style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-start;
              align-items: center;
            "
        >
            <span style="cursor: pointer">
              <svg
                t="1747825997144"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="22723"
                width="30"
                height="30"
              >
                <path
                  d="M330.666667 512c0-14.933333 4.266667-29.866667 14.933333-40.533333l234.666667-277.33333399c23.466667-27.733333 64-29.866667 89.6-8.53333301 27.733333 23.466667 29.866667 64 8.53333299 89.6L477.866667 512l200.53333299 236.8c23.466667 27.733333 19.19999999 68.266667-8.53333299 89.6-27.733333 23.466667-68.266667 19.19999999-89.6-8.53333301l-234.666667-277.33333399c-10.666667-10.666667-14.933333-25.6-14.933333-40.533333z"
                  fill="#ffffff"
                  p-id="22724"
                ></path>
              </svg>
            </span>
        </div>
        <div style="text-transform: capitalize">
            <span
              style="
                font-size: 16px;
                color: #fff;
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>邮箱认证</span>
            </span>
        </div>
        <div
          style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
            "
        ></div>
      </div>
    </div>
  </div>

  <div class="content-box">
    <div v-if="!bind" class="bind-not">
      <div class="item">
        <div class="text">邮箱</div>
        <div class="input">
          <input style="width: 100%;" v-model="formData.email" type="text" placeholder="请输入" />
        </div>
      </div>
      <div class="item">
        <div class="text">验证码</div>
        <div class="input">
          <input v-model="formData.code" type="text" placeholder="请输入" />
          <div class="code-box">
            <div v-if="flag" class="wait-code">
              <van-count-down :time="time" format="ss" @finish="finish" />
            </div>
            <div v-else class="send-code" @click="send">发送</div>
          </div>
        </div>
      </div>
      <div class="btnBox" @click="submit">
        确定
      </div>
    </div>
    <div v-else class="bind-yes">
      <div class="top">
        <img src="@/assets/img/cg.png" alt="" style="width: 150px; height: 150px;" />
        <div class="text">恭喜您，邮箱绑定成功</div>
        <div class="email">你的邮箱：{{ email }}</div>
      </div>

      <div class="change-email" @click="bind = false">更改邮箱</div>
      <div class="back" @click="$router.push('/')">返回首页</div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { emailBind, emailCode } from '@/api/user'
import { useUserStore } from '@/store/user/index'

const router = useRouter()

const userStore = useUserStore()
userStore.getUserInfo()
// 用户信息
const { userInfo } = storeToRefs(userStore)
const cuttentRight = { iconRight: [{ iconName: 'kefu', clickTo: 'event_serviceChange' }] }
const email = ref(userInfo.value.user?.email)
const bind = ref(email.value)
//表单信息
const formData = ref({
  email: '',
  code: ''
})
/**
 * 倒计时
 */

// 倒计时
const time = ref(0)
const flag = ref(false)
const send = () => {
  // 邮箱发送验证码
  if (formData.value.email == '') {
    showToast('请补充邮箱地址')
    // _toast('login_please_emailCode')
    return
  }
  emailCode('BIND', formData.value.email).then((res) => {
    console.log(res)
    if (res.code == '200') {
      flag.value = true
      time.value = 60 * 1000
    } else {
      showToast(res.msg)
    }
  })
}
// 倒计时结束
const finish = () => {
  flag.value = false
}
const submit = () => {
  // bind.value = true
  // email.value=formData.value.email
  if (formData.value.email == '') {
    showToast('请补充邮箱地址')
    // _toast('login_please_emailCode')
    return
  }
  if (formData.value.code == '') {
    showToast('验证码')
    // _toast('verification_code')
    return
  }
  emailBind(formData.value.email, formData.value.code).then((res) => {
    if (res.code == '200') {
      showToast('绑定成功')
      // _toast('email_bind_success')
      email.value = formData.value.email
      bind.value = true
    } else {
      showToast(res.msg)
    }
  })
}
</script>
<style lang="scss" scoped>
.btnBox {
  margin: 40px 0 30px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  text-align: left;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
  border-radius: 20px 20px 20px 20px;
  //margin-top: 50px;
}
* {
  font-size: 16px;
  color: var(--ex-default-font-color);
}
.header {
  display: flex;
  .title {
    margin-left: 10px;
  }
}
.content-box {
  width: 100%;

  .bind-not {
    padding: 0 15px;
    .item {
      width: 100%;

      .text {
        margin: 20px 0;
        font-size: 15px;
        color: #a7afb7;
      }

      .input {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.07);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
          height: 100%;
          //background: rgba(255, 255, 255, 0.07);
          border: none;
          font-size: 14px;
        }
        .code-box {
          position: absolute;
          right: 26px;
          min-width: 80px;
          height: 35px;
          background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
          border-radius: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000000;
          div {
            font-size: 14px;
          }
        }
      }
    }
    .btnBox {
      margin-top: 50px;
    }

    .back {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background: var(--ex-default-background-color);
      border: 1px solid var(--ex-border-color4);
      color: var(--ex-font-color9);
      font-size: 14px;
    }
  }

  .bind-yes {
    padding: 0 15px;
    .top {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 132px;
        height: 100px;
      }
      .text {
        color: var(--ex-font-color6);
        text-align: center;
        font-size: 16px;
        margin: 30px 0 20px 0;
      }
      .email {
        text-align: center;
        font-size: 14px;
        color: var(--ex-font-color17);
      }
    }
    .change-email {
      margin: 50px 0 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      color: #000000;
      background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
      font-size: 14px;
      border-radius: 8px;
      opacity: 1;

    }
    .back {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      height: 50px;
      border: 1px solid #ffe415;
    }
  }
}
</style>
