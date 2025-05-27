<template>
  <div class="title">
    <div class="title-item">{{ t('name') }}</div>
    <div class="title-item">{{ t('latestPrice') }}</div>
    <div class="title-item">{{ t('priceChangePercent24') }}</div>
  </div>
  <div class="list">
    <template v-if="listResult?.length > 0">
      <div
        class="list-item"
        v-for="(item, index) in listResult"
        :key="index"
        @click="handleCoinDetail(item)"
      >
        <div class="list-item-name">
          <img :src="item.logo" alt="" />
          <span>{{ item.showSymbol }}</span>
        </div>
        <div class="list-item-price">
          <span>{{ priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close) }}</span>
        </div>
        <div class="list-item-price2">
          <div
            class="box"
            :class="
              tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
              tradeStore.allCoinPriceInfo[item.coin]?.close
                ? 'badge_up'
                : 'badge_down'
            "
          >
            {{
              tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
              tradeStore.allCoinPriceInfo[item.coin]?.close
                ? '+'
                : '-'
            }}{{ tradeStore.allCoinPriceInfo[item.coin]?.priceChangePercent }}%
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <NoData />
    </template>
  </div>
</template>
<script setup>
import { useTradeStore } from '@/store/trade/index'
import { priceFormat } from '@/utils/decimal.js'
import { LatestpriceLargeToSmall } from '@/utils/filters'
import { _isRFD } from '@/utils/public'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const tradeStore = useTradeStore()
const currentCoinList = ref(tradeStore.secondContractCoinList)
const listResult = ref()
const router = useRouter()
const toRafSort = () => {
  listResult.value = LatestpriceLargeToSmall(
    currentCoinList.value,
    tradeStore.allCoinPriceInfo,
    'change',
    1
  ).filter((item) => {
    return isShow(
      tradeStore.allCoinPriceInfo[item.coin]?.openPrice,
      tradeStore.allCoinPriceInfo[item.coin]?.close
    )
  })
}
const isShow = (openPrice, close) => {
  if (_isRFD(openPrice, close) == 'price_down') {
    return true
  } else {
    return false
  }
}
const handleCoinDetail = (item) => {
  router.push(`/flash?symbol=${item.coin}`)
}
toRafSort()
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
  .title-item {
    color: var(--secondary-color);
    font-size: 10px;
    &:nth-child(1) {
      width: 20%;
      text-align: left;
    }
    &:nth-child(2) {
      width: 50%;
      text-align: right;
    }
    &:nth-child(3) {
      text-align: right;
      width: 30%;
    }
  }
}
.list {
  .list-item {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: var(--primary-color);
    font-size: 12px;
    &-name {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 20%;
      img {
        width: 21px;
        height: 21px;
        margin-right: 8px;
        border-radius: 50%;
      }
    }
    &-price {
      width: 50%;
      text-align: right;
    }
    &-price2 {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .box {
        text-align: center;
        width: 63px;
        height: 25px;
        line-height: 25px;
        border-radius: 4px 4px 4px 4px;
      }
    }
  }
}
</style>
