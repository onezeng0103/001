<template>
  <div class="forget">
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
              <span>忘记密码</span>
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

    <div class="body-wrap">
      <div class="login-mode">
        <div class="item">邮箱</div>
      </div>
      <div class="login-label">
        <div class="form-item">
          <div class="form-item-label">邮箱账号</div>

          <div class="input-box">
            <input
              style="flex: 1"
              v-model.trim="email"
              placeholder="请输入邮箱"
              autocomplete="off"
            />
            <div class="icon">
              <svg
                @click="close"
                t="1747822847376"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9047"
                width="20"
                height="20"
              >
                <path
                  d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m239.6672-671.7952a56.4736 56.4736 0 0 0-79.872-79.9232L512 432.0768 352.2048 272.2816a56.5248 56.5248 0 1 0-79.9232 79.9232L432.0768 512l-159.7952 159.7952a56.4736 56.4736 0 0 0 79.9232 79.872L512 591.872l159.7952 159.7952a56.4736 56.4736 0 0 0 79.872-79.872L591.872 512z"
                  p-id="9048"
                  fill="#999999"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="button-box">
        <div class="btn" @click="next">下一步</div>
      </div>

      <div class="black" v-if="showBottom" @click="showBottom = !showBottom"></div>

      <div class="rule_box" :class="showBottom ? 'downwards' : 'upwards'">
        <div class="rule_title">
          安全验证
          <div style="position: absolute; right: 0" class="icon">
            <svg
              @click="showBottom = !showBottom"
              t="1747853459405"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1494"
              width="24"
              height="24"
            >
              <path
                d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
                p-id="1495"
                fill="#000"
              ></path>
            </svg>
          </div>
        </div>

        <div class="form-item-label" style="color: #000000; font-weight: 500; font-size: 16px">
          验证码
        </div>
        <div class="input-box" style="background: #f5f5f5">
          <input
            v-model="code"
            type="number"
            maxlength="140"
            placeholder="请输入验证码"
            class="uni-input-input"
            autocomplete="off"
            style="color: #000000 !important"
          />
          <div class="icon">
            <span v-if="!flag" @click="emailCode('FIND_PASSWORD', email)">重新发送</span>
            <span v-else>
              <van-count-down :time="time" format="ss" @finish="finish"></van-count-down>
            </span>
          </div>
        </div>

        <div class="btn2" @click="confirm">确认</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { emailCode } from '@/api/user'

const router = useRouter()
const email = ref('')
const code = ref('')
const showBottom = ref(false)
// const showBottom = ref(true)

const close = () => {
  email.value = ''
}

const next = () => {
  if (!email.value) {
    showToast('请输入邮箱')
    return
  }
  emailCode('FIND_PASSWORD', email.value).then((res) => {
    if (res.code === 500) {
      showToast(res.msg)
    } else {
      showToast(res.msg)
      time.value = 300 * 1000
      showBottom.value = true
      flag.value = true
    }
  })
}
const flag = ref(false)
const time = ref(0)
const finish = () => {
  flag.value = false
}
const confirm = () => {
  if (!code.value) {
    showToast('请输入验证码')
    return
  }
  showBottom.value = false
  router.push('/setpwd?email=' + email.value + '&code=' + code.value)
}
</script>

<style lang="scss" scoped>
.btn2 {
  margin-top: 30px;
  width: 347px;
  height: 41px;
  background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
  border-radius: 21px 21px 21px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
.form-item {
  &-label {
    margin-top: 30px;
    margin-bottom: 15px;
    color: #fff;
  }

  &-text {
    margin-top: 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
  }
}

.input-box {
  height: 46px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.07);
  padding: 0px 18px;
  display: flex;
  align-items: center;

  .area-code {
    width: 50px;
    font-size: 14px;
    color: rgba(153, 153, 153, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid rgba(153, 153, 153, 1);

    .fui-icon {
      margin-left: 8px;
    }
  }

  input {
    flex: 1;
  }

  .icon {
    color: #999;
    font-size: 14px;
  }
}

.forget .body-wrap {
  width: 100%;
  height: auto;
  padding: 15px;
  box-sizing: border-box;
}

.forget .body-wrap .login-mode {
  width: 100%;
  height: 34px;
  border-radius: 4px;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #121212;
}

.forget .body-wrap .login-mode .item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.form-item-label {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #fff;
  font-size: 12px;
}

//.form-item .input-box {
//  height: 46px;
//  border-radius: 10px;
//  background: rgba(255, 255, 255, 0.07);
//  padding: 0px 18px;
//  display: flex;
//  align-items: center;
//
//  .icon {
//    color: #999;
//    font-size: 14px;
//  }
//}

.btn {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 24px 24px 24px 24px;
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  font-style: normal;
  text-transform: none;
  cursor: pointer;
}

.black {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}

.rule_box {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 101;
  box-sizing: border-box;
  background: #fff;
  transform: translateY(100%);
  transition: all 0.3s;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 30px;

  .rule_title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    //color: #ffffff;

    .icon {
      color: #fff;
      font-size: 14px;
    }

    .close {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
    }
  }
}

.downwards {
  transform: translateY(0);
}

.upwards {
  transform: translateY(100%);
}
</style>
