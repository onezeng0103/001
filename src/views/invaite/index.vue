<template>
  <div class="invaite">
    <div class="invaite-top">
      <div>
        <div class="invaite-top_1">团队人数</div>
        <div class="invaite-top_2">{{ agentInfo.childCount || 0 }}</div>
        <div class="invaite-top_3">直属成员 {{ agentInfo.childCount || 0 }}</div>
      </div>
      <div>
        <img src="@/assets/img/Frame5.png" style="width: 120px; height: 85px" />
      </div>
    </div>

    <div class="invaite-middle">
      <div style="font-weight: 500; font-size: 12px; color: #ffffff; margin-bottom: 10px">
        下级成员
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between">
        <div>
          <img src="@/assets/img/Frame3.png" style="width: 20px; height: 20px" />
        </div>
        <div style="font-weight: 400; font-size: 12px; color: #ffffff">
          {{ agentInfo.childAllCount || 0 }}
        </div>
      </div>
    </div>

    <div class="invaite-below">
      <div class="below">
        <div style="font-weight: 500; font-size: 12px; margin: 10px 0 0 10px">邀请码</div>
        <div style="font-size: 10px; color: #999999; margin: 5px 0 3px 10px">
          {{ userInfo?.user?.activeCode }}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end">
          <div>
            <img src="@/assets/img/Frame1.png" style="width: 74px; height: 69px" />
          </div>
          <div class="copy-but" @click="toCopy(userInfo?.user?.activeCode)">
            复制
            <svg
              t="1747978644685"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3894"
              width="12"
              height="12"
            >
              <path
                d="M616.0384 485.376L417.792 353.1776a32 32 0 0 0-49.7152 26.624v264.3968a32 32 0 0 0 49.7152 26.624l198.2976-132.1984a32 32 0 0 0 0-53.248z"
                fill="#1D2129"
                p-id="3895"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="below">
        <div style="font-weight: 500; font-size: 12px; margin: 10px 0 0 10px">我的邀请链接</div>
        <div
          style="
            font-size: 10px;
            color: #999999;
            margin: 5px 10px 3px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
          @click="handleShowCenter(shareLink + userInfo?.user?.activeCode)"
        >
          <div>希望您的加入</div>
          <svg
            t="1747979240102"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4900"
            width="8"
            height="8"
          >
            <path
              d="M688.211968 512.444416 291.510272 114.944c-8.660992-7.86432-8.660992-21.260288 0-29.124608 7.878656-7.86432 21.245952-7.86432 29.126656 0l411.654144 411.656192c7.878656 7.86432 7.878656 21.260288 0 29.124608L320.638976 938.254336c-7.880704 8.6528-21.248 8.6528-29.126656 0-8.660992-7.86432-8.660992-21.25824 0-29.12256L688.211968 512.444416z"
              p-id="4901"
              fill="#BAEC57"
            ></path>
          </svg>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end">
          <div>
            <img src="@/assets/img/Frame2.png" style="width: 74px; height: 69px" />
          </div>
          <div class="copy-but" @click="toCopy(shareLink + userInfo?.user?.activeCode)">
            复制
            <svg
              t="1747978644685"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3894"
              width="12"
              height="13"
            >
              <path
                d="M616.0384 485.376L417.792 353.1776a32 32 0 0 0-49.7152 26.624v264.3968a32 32 0 0 0 49.7152 26.624l198.2976-132.1984a32 32 0 0 0 0-53.248z"
                fill="#1D2129"
                p-id="3895"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="invaite-below">
      <div
        class="below"
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 30px 10px 10px;
          width: 174px;
        "
      >
        <div>
          <div style="font-size: 10px; margin-bottom: 8px">今日注册</div>
          <div>
            <img src="@/assets/img/Frame4.png" style="width: 14px; height: 14px" />
          </div>
        </div>
        <div style="font-weight: 500; font-size: 20px">{{ agentInfo.todayCount || 0 }}</div>
      </div>

      <div
        class="below"
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 30px 10px 10px;
          width: 174px;
        "
      >
        <div>
          <div style="font-size: 10px; margin-bottom: 8px">昨日注册</div>
          <div>
            <img src="@/assets/img/Frame4.png" style="width: 14px; height: 14px" />
          </div>
        </div>
        <div style="font-weight: 500; font-size: 20px">{{ agentInfo.yesterdayCount || 0 }}</div>
      </div>
    </div>
  </div>

  <van-popup v-model:show="showCenter" round>
    <div style="background-color: #ffffff;padding: 20px">
      <div style="color: #000000;font-size: 13px">立即加入，一起赚钱</div>
      <div class="code-box">
        <img :src="QRCodeIMG" class="code-canvas" />
        <div class="color-gray">邀请码</div>
        <div class="color-black">{{ userInfo?.user?.activeCode }}</div>
      </div>
    </div>

  </van-popup>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store'
import { getAgentInfo } from '@/api/invaite/index.js'
import Copy from 'vue-clipboard3'
import QRCode from 'qrcode'

const router = useRouter()
const useStore = useUserStore()
const mainStore = useMainStore()
const { toClipboard } = Copy()
const { userInfo } = storeToRefs(useStore)
const shareLink = `${location.origin}/#/i&`
const agentInfo = ref({})
const toCopy = async (text) => {
  try {
    await toClipboard(`${text}`)
    showToast('复制成功')
  } catch (e) {
    showToast('复制失败')
  }
}
const showCenter = ref(false)
const handleShowCenter = (value) => {
  getQR(value)
  showCenter.value = true
}
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const VITE_APP_EXCHANGE_NAME = import.meta.env.VITE_APP_EXCHANGE_NAME
const QRCodeIMG = ref()
const getQR = (address) => {
  console.log(address)
  if (address) {
    QRCode.toDataURL(address, {
      version: '',
      errorCorrectionLevel: 'H',
      maskPattern: 2,
      margin: 2,
      scale: 3,
      height: 120,
      width: 120,
      scal: 200,
      color: {
        dark: '#000',
        light: '#fff'
      }
    }).then((url) => {
      QRCodeIMG.value = url
    })
  }
}
onMounted(() => {
  getAgentInfo().then((res) => {
    agentInfo.value = res.data
  })
})
</script>

<style scoped lang="scss">
.code-box {
  padding: 30px 30px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  .code-canvas{
    width: 120px;
    height: 120px;
    background-color: #f5f5f5;
    margin-bottom: 10px;
  }
  .color-gray{
    margin-bottom: 10px;
    font-size: 13px;
    color: #a0a0a0;
  }
  .color-black{
    font-size: 14px;
    color: #000000;
  }
}

.invaite {
  margin: 0 10px;

  .invaite-below {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    .below {
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;

      .copy-but {
        background: #baec57;
        border-radius: 20px 20px 20px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px 10px 20px;
        padding: 5px 19px;
        font-weight: 400;
        font-size: 10px;
        color: #000000;
      }
    }
  }

  .invaite-middle {
    margin-top: 15px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 8px 8px 8px 8px;
  }

  .invaite-top {
    //margin-top: 20px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .invaite-top_1 {
      font-weight: 400;
      font-size: 16px;
      color: #999999;
    }

    .invaite-top_2 {
      font-weight: 500;
      font-size: 28px;
      color: #ffffff;
      margin: 5px 0;
    }

    .invaite-top_3 {
      font-weight: 400;
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
