<template>
  <div class="title">
    <div class="title-item">名称</div>
    <div class="title-item">最新价</div>
    <div class="title-item">今日跌涨</div>
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
import { _isRFD } from '@/utils/public'
import { useRouter } from 'vue-router'
const tradeStore = useTradeStore()
const listResult = ref()
const router = useRouter()
const toRafSort = () => {
  listResult.value = tradeStore.secondContractCoinList.filter((it, inx) => {
    return it.coinType == 2
  })
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
    color: rgba(153, 153, 153, 1);
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
    color: rgba(255, 255, 255, 1);
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
