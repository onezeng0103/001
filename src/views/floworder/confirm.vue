<template>
  <div class="confirm">
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
              <span>跟单设置</span>
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
    <div class="confirm-main">
      <div class="confirm-main-info">
        <div class="confirm-main-info-item">
          <div style="color: #fff; font-size: 14px">{{ tradeInfo?.followOrder || 0 }}</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 12; margin-top: 5px">带单天数</div>
        </div>
        <div class="confirm-main-info-item">
          <div style="color: #fff; font-size: 14px">{{ tradeInfo?.followUser || 0 }}</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 12; margin-top: 5px">跟单人数</div>
        </div>
        <div class="confirm-main-info-item">
          <div style="color: #fff; font-size: 14px">{{ tradeInfo?.rewardAmount || 0 }}</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 12; margin-top: 5px">
            收益(USDT)
          </div>
        </div>
      </div>
      <div class="confirm-main-type">
        <div class="confirm-main-type-top">
          <div style="color: #fff; font: 14px">跟单币种</div>
          <div style="color: rgb(186, 236, 87); font-size: 12px" @click="handleAll">全选</div>
        </div>
        <div class="confirm-main-type-content">
          <div
            class="confirm-main-type-content-item"
            :class="{ active: activeList.includes(item.symbol) }"
            v-for="item in optionList"
            :key="item.id"
            @click="handleActive(item.symbol)"
          >
            {{ item.showSymbol }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import { useRouter, useRoute } from 'vue-router'
import {
  getTradeInfo,
  postAddTraderUser,
  postEditTraderUser,
  postDelTraderUserApi
} from '@/api/follow'
import { useTradeStore } from '@/store/trade'
import { useUserStore } from '@/store/user'
import { priceFormat } from '@/utils/decimal.js'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const transferStore = useTradeStore()
const userStore = useUserStore()
// 用户余额信息
const { asset } = storeToRefs(userStore)
const assetDetails = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    let obj = {}
    obj['keyong'] = priceFormat(item.availableAmount)

    obj['zhanyong'] = priceFormat(item.occupiedAmount)

    obj['zhehe'] = priceFormat(item.exchageAmount)
    if (item.symbol == 'usdt') {
      obj['icon'] = 'usdt'
      obj['loge'] = item.loge
      obj['title'] = 'USDT'
      list.unshift(obj)
    } else {
      obj['loge'] = item.loge
      obj['title'] = item.symbol?.replace('usdt', '').trim().toLocaleUpperCase()
      obj['icon'] = item.symbol?.replace('usdt', '').trim()
      list.push(obj)
    }
  })
  return list
})
// 计算账户余额
const amountSum = computed(() => {
  let sum = 0
  for (let i = 0; i < assetDetails.value.length; i++) {
    sum += Number(assetDetails.value[i].zhehe)
  }
  return priceFormat(sum)
})
const optionList = computed(() => {
  return transferStore.optionList
})
const activeList = ref([])
const handleActive = (symbol) => {
  if (activeList.value.includes(symbol)) {
    activeList.value = activeList.value.filter((item) => item !== symbol)
  } else {
    activeList.value.push(symbol)
  }
}
const handleAll = () => {
  activeList.value = optionList.value.map((item) => item.symbol)
}
const currentIndex = ref(0)
const followRate = ref()
const followAmount = ref()
const handleFinish = () => {
  postDelTraderUserApi({ traderId: route.params.id }).then((res) => {
    showToast(res.msg)
    setTimeout(() => {
      window.localStorage.removeItem('updateTrader')
      router.back()
    }, 1000)
  })
}
const handleConfirm = () => {
  if (activeList.value.length === 0) {
    showToast(t('pleaseSelectFollowCoin'))
    return
  }
  if (currentIndex.value == 0) {
    if (!followRate.value) {
      showToast(t('pleaseEnterFollowRate'))
      return
    }
  }
  if (currentIndex.value == 1) {
    if (!followAmount.value) {
      showToast(t('pleaseEnterFollowAmount'))
      return
    }
  }
  let obj = {
    followType: currentIndex.value,
    followRate: followRate.value,
    followAmount: followAmount.value,
    followSymbol: optionList.value.join(','),
    traderId: route.params.id
  }
  if (route.query.type === 'update') {
    postEditTraderUser(obj).then((res) => {
      showToast(res.msg)
      setTimeout(() => {
        router.back()
      }, 1000)
    })
  } else {
    postAddTraderUser(obj).then((res) => {
      showToast(res.msg)
      setTimeout(() => {
        router.back()
      }, 1000)
    })
  }
  window.localStorage.removeItem('updateTrader')
}
const tradeInfo = ref({})
const getTradeInfoFn = async () => {
  const res = await getTradeInfo(route.params.id)
  tradeInfo.value = res.data
}
onMounted(() => {
  getTradeInfoFn()
  if (route.query.type) {
    const updateTrader = JSON.parse(window.localStorage.getItem('updateTrader'))
    currentIndex.value = updateTrader.followType
    followRate.value = updateTrader.followRate
    followAmount.value = updateTrader.followAmount
    activeList.value = updateTrader.followSymbol.split(',')
  }
})
</script>
<style lang="scss" scoped>
.confirm {
  &-main {
    padding: 0 10px;
    &-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      padding: 20px 10px;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &-type {
      margin-top: 15px;
      padding: 20px 10px;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &-content {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 15px;
        &-item {
          background-color: rgba(153, 153, 153, 0.1);
          height: 32px;
          width: 30%;
          box-sizing: border-box;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          border: 1px solid transparent;
          margin-bottom: 10px;
        }
        .active {
          background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
          color: #000;
        }
      }
    }
  }
}
</style>
