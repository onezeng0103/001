<template>
  <van-popup v-model:show="props.showLeft" position="left" @close="emits('close')">
    <div style="height: 100vh; width: 300px; padding: 15px">
      <div class="search">
        <img src="../../../assets/img/search.png" alt="" />
        <input type="text" :placeholder="t('searchCoin')" v-model.trim="searchName" />
      </div>
      <div class="tip">
        <div>{{ t('name') }}</div>
        <div>{{ t('latestPrice') }}/{{ t('priceChangePercent') }}</div>
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
const handleClick = (item) => {
  router.push(`/contract?symbol=${item.coin}`)
  emits('close')
}
</script>
<style lang="scss" scoped>
.van-popup {
  background: var(--primary-color) !important;
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
  background: var(--placeholder-color);
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  input {
    color: var(--primary-background) !important;
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
  color: var(--primary-background);
  font-size: 12px;
  margin-top: 2%;
}
.list {
  height: calc(100vh - 100px);
  overflow-y: auto;
  color: var(--primary-background);
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
