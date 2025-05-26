<template>
  <div class="confirm">
    <div style="height: 44px">
      <div
        style="
          background: var(--primary-background);
          border-bottom-color: var(--placeholder-color);
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
                color: var(--primary-color);
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
              color: var(--secondary-color);
            "
          ></div>
        </div>
      </div>
    </div>
    <div class="confirm-main">
      <div class="confirm-main-info">
        <div class="confirm-main-info-item">
          <div style="color: var(--primary-color); font-size: 14px">
            {{ tradeInfo?.followOrder || 0 }}
          </div>
          <div style="color: var(--secondary-color); font-size: 12; margin-top: 5px">带单天数</div>
        </div>
        <div class="confirm-main-info-item">
          <div style="color: var(--primary-color); font-size: 14px">
            {{ tradeInfo?.followUser || 0 }}
          </div>
          <div style="color: var(--secondary-color); font-size: 12; margin-top: 5px">跟单人数</div>
        </div>
        <div class="confirm-main-info-item">
          <div style="color: var(--primary-color); font-size: 14px">
            {{ tradeInfo?.rewardAmount || 0 }}
          </div>
          <div style="color: var(--secondary-color); font-size: 12; margin-top: 5px">
            收益(USDT)
          </div>
        </div>
      </div>
      <div class="confirm-main-type">
        <div class="confirm-main-type-top">
          <div style="color: var(--primary-color); font: 14px">跟单币种</div>
          <div style="color: var(--primary-border); font-size: 12px" @click="handleAll">全选</div>
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
      <div class="confirm-main-content">
        <div class="confirm-main-content-top">
          <div style="color: var(--primary-color); font: 14px">跟单模式</div>
        </div>
        <div class="confirm-main-content-tab">
          <div
            class="confirm-main-content-tab-item"
            :class="{ active: currentIndex == 0 }"
            @click="currentIndex = 0"
          >
            固定比例
          </div>
          <div
            class="confirm-main-content-tab-item"
            :class="{ active: currentIndex == 1 }"
            @click="currentIndex = 1"
          >
            固定金额
          </div>
        </div>
        <div class="confirm-main-content-input" v-show="currentIndex == 0">
          <img style="height: 36px; width: 36px" src="../../assets/img/dollar.png" alt="" />
          <input type="number" v-model="followRate" placeholder="跟单比例1-500" />
          <div>%</div>
        </div>
        <div class="confirm-main-content-input" v-show="currentIndex == 1">
          <img style="height: 36px; width: 36px" src="../../assets/img/dollar.png" alt="" />
          <input type="number" v-model="followAmount" placeholder="跟单金额" />
          <div>USDT</div>
        </div>
        <div class="confirm-main-content-tip">
          <div style="color: var(--secondary-color); font-size: 12px">
            可用：
            <span style="color: var(--primary-color)">{{ amountSum }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm-btn">
      <div class="confirm-btn-item" @click="handleFinish">结束跟单</div>
      <div class="confirm-btn-item" @click="handleConfirm">确认</div>
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
    showToast('请选择跟单币种')
    return
  }
  if (currentIndex.value == 0) {
    if (!followRate.value) {
      showToast('请输入跟单比例')
      return
    }
  }
  if (currentIndex.value == 1) {
    if (!followAmount.value) {
      showToast('请输入跟单金额')
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
      background: var(--regular-background);
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
      background: var(--regular-background);
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
          background-color: var(--secondary-color);
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
          background: linear-gradient(
            306deg,
            var(--primary-border) 0%,
            var(--secondary-background) 100%
          );
          color: var(--primary-background);
        }
      }
    }
    &-content {
      margin-top: 15px;
      padding: 20px 10px;
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      &-tab {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px 8px 8px 8px;
        background-color: var(--secondary-color);
        &-item {
          flex: 1;
          text-align: center;
          line-height: 32px;
          height: 32px;
        }
        .active {
          border-radius: 8px 8px 8px 8px;
          background: linear-gradient(
            306deg,
            var(--primary-border) 0%,
            var(--secondary-background) 100%
          );
          color: var(--primary-background);
        }
      }
      &-input {
        margin-top: 15px;
        padding: 0 10px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--secondary-color);
        display: flex;
        align-items: center;
        input {
          flex: 1;
        }
      }
      &-tip {
        margin-top: 15px;
      }
    }
  }
  &-btn {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-item {
      margin-top: 30px;
      width: 47%;
      height: 41px;
      background: linear-gradient(
        306deg,
        var(--primary-border) 0%,
        var(--secondary-background) 100%
      );
      border-radius: 21px 21px 21px 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      color: var(--primary-background);
    }
  }
}
</style>
