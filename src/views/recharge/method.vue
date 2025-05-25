<template>
  <div class="method">
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
                t="1747892392635"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="27855"
                width="25"
                height="25"
              >
                <path
                  d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
                  fill="#ffffff"
                  p-id="27856"
                ></path>
              </svg>
            </span>
          </div>
<<<<<<< HEAD
          <div style="text-transform: capitalize" @click="showBottom = true">
=======
          <div style="text-transform: capitalize">
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
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
<<<<<<< HEAD
              <span>{{ info?.title }}</span>
=======
              <span>充币</span>
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: rgba(153, 153, 153, 1);
            "
          ></div>
        </div>
      </div>
    </div>

    <div class="method-main">
<<<<<<< HEAD
      <div style="font-size: 12px; color: rgba(168, 168, 168, 1); margin-bottom: 15px">网络</div>
      <div
        @click="isNetwork = true"
        style="
          font-size: 16px;
          color: #fff;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        "
      >
        <div>{{ extraInfo?.coinName }}</div>
        <div style="margin-left: 10px">
          <svg
            t="1748074565219"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1445"
            width="15"
            height="15"
          >
            <path
              d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
              fill="#ffffff"
              p-id="1446"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <img :src="qrCodeImg" alt="" style="border-radius: 8px" />
      </div>
      <div
        style="
          margin-top: 15px;
          background: rgba(255, 255, 255, 0.07);
          width: 100%;
          padding: 10px;
          border-radius: 8px;
        "
      >
        <div style="font-size: 12px; color: #999999">地址</div>
        <div style="display: flex; align-items: center; justify-content: space-between">
          <div style="width: 80%; word-break: break-word; white-space: normal">
            {{ extraInfo?.coinAddress }}
          </div>
          <div
            @click="handleCopy"
            style="
              background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
              border-radius: 15px;
              padding: 5px 12px;
              color: #000;
            "
          >
            复制
          </div>
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 15px;
        "
      >
        <div style="color: #a8a8a8; font-size: 12px">最小充币额</div>
        <div style="color: #fff; font-size: 12px">0.01 USDT</div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 15px;
        "
      >
        <div style="color: #a8a8a8; font-size: 12px">充币到账时间</div>
        <div style="color: #fff; font-size: 12px">约 1 分钟</div>
      </div>
    </div>
  </div>
  <van-popup v-model:show="showBottom" position="bottom" style="width: 100vw; height: 100vh">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      "
    >
      <div @click="router.back()">
        <svg
          t="1747892392635"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="27855"
          width="25"
          height="25"
        >
          <path
            d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
            fill="#ffffff"
            p-id="27856"
          ></path>
        </svg>
      </div>
      <div style="font-size: 14px; color: #fff">选择充值币种</div>
      <div style="width: 25px"></div>
    </div>
    <div
      v-for="(item, index) in coinList"
      :key="index"
      class="popup-item"
      @click="handleClose(item)"
    >
      <div style="display: flex; align-items: center">
        <img :src="getImageUrl(item?.icon)" alt="" style="width: 40px; height: 40px" />
        <div style="margin-left: 10px">
          <div>{{ item?.title?.toUpperCase() }}</div>
          <div style="font-size: 10px; color: rgba(168, 168, 168, 1); margin-top: 5px">
            最小充币额：0.01USDT
          </div>
          <div style="font-size: 10px; color: rgba(168, 168, 168, 1); margin-top: 5px">
            预计 约 1分钟 内到账
          </div>
        </div>
      </div>
      <div>
        <svg
          data-v-51bd7c18=""
          t="1748071959491"
=======
      <div class="method-main-form" @click="showBottom = true">
        <div class="method-main-form-label">充值币种</div>
        <div class="method-main-form-input">
          <div>
            <img
              v-if="info?.icon"
              :src="getImageUrl(info?.icon)"
              alt=""
              class="coin-icon"
              style="height: 20px"
            />
          </div>
          <div class="text">{{ info?.title || '请选择币种' }}</div>
          <div>
            <svg
              t="1748074565219"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1445"
              width="15"
              height="15"
            >
              <path
                d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
                fill="#ffffff"
                p-id="1446"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="method-main-form" @click="isNetwork = true">
        <div class="method-main-form-label">充值网络</div>
        <div class="method-main-form-input">
          <div class="text">{{ extraInfo?.coinName || '请选择网络' }}</div>
          <div>
            <svg
              t="1748074565219"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1445"
              width="15"
              height="15"
            >
              <path
                d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
                fill="#ffffff"
                p-id="1446"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="method-main-form">
        <div class="method-main-form-label">充值地址</div>
        <div class="method-main-form-input">
          <div class="text">{{ extraInfo?.coinAddress }}</div>
          <div @click="handleCopy">
            <svg
              t="1748074674871"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3313"
              width="15"
              height="15"
            >
              <path
                d="M878.250667 981.333333H375.338667a104.661333 104.661333 0 0 1-104.661334-104.661333V375.338667a104.661333 104.661333 0 0 1 104.661334-104.661334h502.912a104.661333 104.661333 0 0 1 104.661333 104.661334v502.912C981.333333 934.485333 934.485333 981.333333 878.250667 981.333333zM375.338667 364.373333a10.666667 10.666667 0 0 0-10.922667 10.965334v502.912c0 6.229333 4.693333 10.922667 10.922667 10.922666h502.912a10.666667 10.666667 0 0 0 10.922666-10.922666V375.338667a10.666667 10.666667 0 0 0-10.922666-10.922667H375.338667z"
                fill="#ffffff"
                p-id="3314"
                data-spm-anchor-id="a313x.search_index.0.i6.3b493a8155xAxM"
                class="selected"
              ></path>
              <path
                d="M192.597333 753.322667H147.328A104.661333 104.661333 0 0 1 42.666667 648.661333V147.328A104.661333 104.661333 0 0 1 147.328 42.666667H650.24a104.661333 104.661333 0 0 1 104.618667 104.661333v49.962667c0 26.538667-20.309333 46.848-46.848 46.848a46.037333 46.037333 0 0 1-46.848-46.848V147.328a10.666667 10.666667 0 0 0-10.922667-10.965333H147.328a10.666667 10.666667 0 0 0-10.965333 10.965333V650.24c0 6.229333 4.693333 10.922667 10.965333 10.922667h45.269333c26.538667 0 46.848 20.309333 46.848 46.848 0 26.538667-21.845333 45.312-46.848 45.312z"
                fill="#ffffff"
                p-id="3315"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="method-main-form">
        <div class="method-main-form-label">充值数量</div>
        <div class="method-main-form-input">
          <input type="text" v-model.trim="amount" @input="formatAmount" />
        </div>
      </div>
      <div class="method-main-form">
        <div class="method-main-form-label">请填写ID后5位</div>
        <div class="method-main-form-input">
          <input type="text" v-model.trim="remark" />
        </div>
      </div>
      <div class="method-main-btn">
        <div class="btn" @click="submit">提交</div>
      </div>
    </div>
  </div>
  <van-popup v-model:show="showBottom" position="bottom" round>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div></div>
      <div style="font-size: 14px; color: #000">选择充值币种</div>
      <div>
        <svg
          @click="showBottom = !showBottom"
          t="1747853459405"
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
          p-id="1480"
          width="15"
          height="15"
        >
          <path
            data-v-51bd7c18=""
            d="M707.61856 495.14624l-357.5296-357.5296c-9.30816-9.30688-24.40064-9.30688-33.70752 0-9.30816 9.30816-9.30816 24.40064 0 33.7088L657.056 512 316.38144 852.67456c-9.30816 9.30688-9.30816 24.40064 0 33.7088 4.65408 4.65536 10.75328 6.98112 16.85376 6.98112 6.10048 0 12.19968-2.32576 16.85376-6.98112l357.5296-357.5296C716.92672 519.5456 716.92672 504.4544 707.61856 495.14624z"
            p-id="1481"
            fill="#ffffff"
=======
          p-id="1494"
          width="24"
          height="24"
        >
          <path
            d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
            p-id="1495"
            fill="#000"
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
          ></path>
        </svg>
      </div>
    </div>
<<<<<<< HEAD
=======
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      "
    >
      <div
        v-for="(item, index) in coinList"
        :key="index"
        class="popup-item"
        @click="handleClose(item)"
      >
        {{ item?.title?.toUpperCase() }}
      </div>
    </div>
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
  </van-popup>
  <ShowNetwork
    :isNetwork="isNetwork"
    :extra="extra"
    :isSwitch="isSwitch"
    @handleSwitch="handleSwitch"
    @networkClose="handleNetworkClose"
  />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/index'
import { filterCoin2 } from '@/utils/public'
import Copy from 'vue-clipboard3'
import { showToast } from 'vant'
<<<<<<< HEAD
import QRCode from 'qrcode'
import ShowNetwork from './component/showNetwork.vue'
const router = useRouter()
const showBottom = ref(true)
=======
import { rechargeSubmit } from '@/api/account.js'
import ShowNetwork from './component/showNetwork.vue'
const router = useRouter()
const showBottom = ref(false)
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
const mainStore = useMainStore()
const { toClipboard } = Copy()
const coinList = ref()
const info = ref()
const extraInfo = ref()
const extra = ref()
const isSwitch = ref(false)
const isNetwork = ref(false)
const handleSwitch = (value) => {
  isSwitch.value = value
}
<<<<<<< HEAD
const qrCodeImg = ref()
const createQRImage = (address) => {
  if (address) {
    QRCode.toDataURL(address, {
      version: '', // 二维码版本。如果未指定，将计算更合适的值。
      errorCorrectionLevel: 'H', // 纠错级别。low, medium, quartile, high , L, M, Q, H
      maskPattern: 2, // 二维码内边距，0、1、2、3、4、5、6、7
      margin: 2, // 边距
      scale: 3, // 每一个黑点的宽度
      height: 200, //二维码高度
      width: 200, //二维码宽度
      scal: 200,
      //圆角
      radius: 10,
      color: {
        dark: '#000', // 二维码背景颜色
        light: '#fff' // 二维码前景颜色
      }
    }).then((url) => {
      qrCodeImg.value = url
    })
  }
}
=======
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
const handleNetworkClose = (value) => {
  if (value) {
    extraInfo.value = value
  }
  isNetwork.value = false
}
const handleCopy = async () => {
  try {
    await toClipboard(`${extraInfo.value.coinAddress}`)
    showToast('复制成功')
  } catch (e) {
    showToast('复制失败')
  }
}
const handleClose = (value) => {
  handleSwitch(true)
  isSwitch.value = true
  info.value = value
  if (value.extra.length > 0) {
    extra.value = value.extra
    extraInfo.value = value.extra[0]
  } else {
    extra.value = [
      {
        coinName: value.title,
        coinAddress: value.address
      }
    ]
    extraInfo.value = {
      coinName: value.title,
      coinAddress: value.address
    }
  }
<<<<<<< HEAD
  createQRImage(extraInfo.value.coinAddress)
  showBottom.value = false
}
=======
  showBottom.value = false
}
const amount = ref()
const remark = ref()
const submit = () => {
  let num = Number(amount.value)
  if (!num) {
    showToast('请填写充值数量')
    return
  }
  if (num <= 0) {
    showToast('充值数量不能小于0')
    return
  }
  if (!remark.value.trim()) {
    showToast('请填写ID后5位')
    return
  }
  let params = {
    address: extraInfo.value.coinAddress,
    amount: num,
    coin: info.value?.icon,
    type: info.value?.title,
    remark: remark.value
  }
  rechargeSubmit(params).then((res) => {
    if (res.code == '200') {
      showToast('充值成功')
    } else {
      showToast(res.msg)
    }
  })
}
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
const getImageUrl = (name) => {
  return new URL(`../../assets/img/${name}.png`, import.meta.url).href
}
onMounted(() => {
  let arr = mainStore.getRechargeList.map((item, index) => {
    return {
      icon: filterCoin2(item.coin),
      type: 0, //充值
      title: item.coinName,
      address: item.coinAddress,
      extra: item.extra
    }
  })
  info.value = arr[0]
  if (arr[0].extra.length > 0) {
    extra.value = arr[0].extra
    extraInfo.value = arr[0].extra[0]
  } else {
    extra.value = [
      {
        coinName: arr[0].title,
        coinAddress: arr[0].address
      }
    ]
    extraInfo.value = {
      coinName: arr[0].title,
      coinAddress: arr[0].address
    }
  }
  coinList.value = arr
<<<<<<< HEAD
=======
  console.log('1111', info.value)
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
})
</script>
<style lang="scss" scoped>
.method {
  &-main {
    padding: 15px;
<<<<<<< HEAD
    display: flex;
    align-items: center;
    flex-direction: column;
=======
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
    &-form {
      margin-bottom: 30px;
      &-label {
        color: #fff;
        font-size: 12px;
        margin-bottom: 15px;
      }
      &-input {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.07);
        border-radius: 10px;
        height: 40px;
        padding: 0 10px;
        input {
          flex: 1;
          color: #fff !important;
        }
        .text {
          margin-left: 10px;
          flex: 1;
          color: #fff !important;
        }
      }
    }
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        margin-top: 30px;
        width: 80%;
        height: 40px;
        background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
        border-radius: 21px 21px 21px 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
      }
    }
  }
}
.van-popup {
<<<<<<< HEAD
  padding: 15px;
  color: #fff;
  .popup-item {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
=======
  background-color: #fff !important;
  padding: 15px;
  color: #000;
  .popup-item {
    width: 80%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgb(240, 240, 240);
    border-radius: 6px;
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
  }
}
</style>
