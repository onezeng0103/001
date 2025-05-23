<template>
  <van-popup v-model:show="props.showLeft" position="left" @close="emits('close')">
    <div style="height: 100vh; width: 300px; padding: 15px">
      <div class="search">
        <img src="../../../assets/img/search.png" alt="" />
        <input type="text" placeholder="搜索币种" v-model.trim="searchName" />
      </div>
      <div class="tip">
        <div>名称</div>
        <div>最新价/涨跌幅</div>
      </div>
      <div class="list">
        <div
          class="list-item"
          v-for="(item, index) in filterKeyCoin(listResult, searchName)"
          @click="handleClick(item)"
        >
          <div class="list-item-left">
            <img :src="item.logo" alt="" />
            <div class="showSymbol">{{ item.showSymbol }}</div>
          </div>
          <div
            class="list-item-right"
            :class="
              tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
              tradeStore.allCoinPriceInfo[item.coin]?.close
                ? 'price_up'
                : 'price_down'
            "
          >
            <div class="list-item-right-price">
              <span>{{ priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close) }}</span>
            </div>
            <div class="list-item-right-price">
              <span>
                {{
                  tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
                  tradeStore.allCoinPriceInfo[item.coin]?.close
                    ? '+'
                    : '-'
                }}{{ tradeStore.allCoinPriceInfo[item.coin]?.priceChangePercent }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useTradeStore } from '@/store/trade'
import { priceFormat } from '@/utils/decimal.js'
import { filterKeyCoin } from '@/utils/filters'
import { letterLargeToSmall, letterSmallToLarge } from '@/utils/filters'
const { t } = useI18n()
const router = useRouter()
const tradeStore = useTradeStore()
const props = defineProps({
  showLeft: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])
const list = computed(() => {
  return tradeStore.contractCoinList
})
const searchName = ref('')
let arrowList = reactive({
  firstIcon: 0
})
const listResult = ref(tradeStore.contractCoinList)
const toDealSort = () => {
  if (arrowList.firstIcon === 0) {
    arrowList.firstIcon = 1
    listResult.value = letterSmallToLarge(list.value, 'coin')
  } else if (arrowList.firstIcon === 1) {
    arrowList.firstIcon = 2
    listResult.value = letterLargeToSmall(list.value, 'coin')
  } else if (arrowList.firstIcon === 2) {
    arrowList.firstIcon = 0
    listResult.value = list.value
  }
}
const handleClick = (item) => {
  router.push(`/contract?symbol=${item.coin}`)
  emits('close')
}
</script>
<style lang="scss" scoped>
.van-popup {
  background: #fff !important;
}
.search {
  margin-bottom: 10px;
  width: 100%;
  height: 38px;
  border-radius: 8px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  input {
    color: #000 !important;
  }
}
.tip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 0 10px;
  box-sizing: border-box;
  color: #000;
  font-size: 12px;
  margin-top: 2%;
}
.list {
  height: calc(100vh - 100px);
  overflow-y: auto;
  color: #000;
  font-size: 12px;
  margin-top: 10px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    &-left {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
      .showSymbol {
        margin-left: 10px;
        font-size: 14px;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &-price {
        font-size: 12px;
      }
    }
  }
}
</style>
