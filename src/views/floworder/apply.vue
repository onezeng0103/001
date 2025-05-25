<template>
  <div class="apply">
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
              <span>成为交易专家</span>
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
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { postMineTraderApi, postApplyTrader } from '@/api/follow'
import { priceFormat } from '@/utils/decimal.js'
const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const VITE_APP_EXCHANGE_NAME = import.meta.env.VITE_APP_EXCHANGE_NAME
// 用户余额信息
const { asset } = storeToRefs(userStore)
const assetDetails = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (true) {
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
    }
  })
  return list
})
const amountSum = computed(() => {
  let sum = 0
  for (let i = 0; i < assetDetails.value.length; i++) {
    sum += Number(assetDetails.value[i].zhehe)
  }
  return priceFormat(sum)
})
const mineProfitList = ref([])
const postMineTrader = () => {
  postMineTraderApi().then((res) => {
    mineProfitList.value = res.rows
  })
}
const handleTrader = () => {
  if (amountSum.value <= 1000) {
    showToast(t('accountAmountDesc'))
    return
  }
  if (mineProfitList.value.length <= 0) {
    showToast(t('noFollowTrader'))
    return
  }
  postApplyTrader().then((res) => {
    showToast(res.msg)
  })
}
onMounted(() => {
  postMineTrader()
})
</script>
<style lang="scss" scoped></style>
