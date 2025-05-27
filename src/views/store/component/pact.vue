<template>
  <div class="item" v-for="(item, index) in listResult" :key="index" @click="handleClick(item)">
    <div class="icon">
      <img :src="item.logo" alt="" />
      <div class="showSymbol">
        {{ item.showSymbol }}
        <div class="type">
          <svg
            v-if="
              tradeStore.allCoinPriceInfo[item.coin]?.openPrice <
              tradeStore.allCoinPriceInfo[item.coin]?.close
                ? true
                : false
            "
            t="1747856768965"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="23761"
            width="12"
            height="12"
          >
            <path
              d="M535.06048 895.0784m-40.96 0l0 0q-40.96 0-40.96-40.96l0-573.44q0-40.96 40.96-40.96l0 0q40.96 0 40.96 40.96l0 573.44q0 40.96-40.96 40.96Z"
              fill="#5bab7e"
              p-id="23762"
            ></path>
            <path
              d="M493.03552 242.21696L289.792 445.44a40.96 40.96 0 1 1-57.93792-57.93792L463.58528 155.81184a40.96 40.96 0 0 1 58.44992-0.45056l231.69024 231.69024a40.96 40.96 0 1 1-57.91744 57.93792l-202.77248-202.77248z"
              fill="#5bab7e"
              p-id="23763"
            ></path>
          </svg>
          <svg
            v-else
            t="1747857087668"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26472"
            width="12"
            height="12"
          >
            <path
              d="M450.56 143.36m40.96 0l0 0q40.96 0 40.96 40.96l0 573.44q0 40.96-40.96 40.96l0 0q-40.96 0-40.96-40.96l0-573.44q0-40.96 40.96-40.96Z"
              fill="#ec6759"
              p-id="26473"
            ></path>
            <path
              d="M492.58496 796.22144l203.22304-203.22304a40.96 40.96 0 1 1 57.91744 57.93792L522.0352 882.62656c-0.8192 0.8192-1.6384 1.57696-2.49856 2.29376a40.96 40.96 0 0 1-55.95136-1.8432L231.87456 651.38688a40.96 40.96 0 0 1 57.93792-57.93792l202.752 202.77248z"
              fill="#ec6759"
              p-id="26474"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div></div>
    <div class="price">
      <span>{{ priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close) }}</span>
      <div class="btn">{{t('trade')}}</div>
    </div>
  </div>
</template>
<script setup>
import { useTradeStore } from '@/store/trade'
import { priceFormat } from '@/utils/decimal.js'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $router = useRouter()
const tradeStore = useTradeStore()
/**
 * 币种列表
 */
const currentCoinList = computed(() => {
  let tempList = []
  tempList = tradeStore.contractCoinList
  return tempList
})
const handleClick = (item) => {
  router.replace(`contract?symbol=${item.coin}`)
}
const listResult = ref(currentCoinList.value)
</script>
<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  .icon {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .showSymbol {
      margin-left: 5px;
      font-size: 14px;
      color: var(--primary-color);
      display: flex;
      align-items: end;
      .type {
        margin-left: 5px;
      }
    }
  }
  .price {
    display: flex;
    align-items: center;
    .btn {
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      height: 22px;
      background: linear-gradient(
        306deg,
        var(--primary-border) 0%,
        var(--secondary-background) 100%
      );
      border-radius: 4px 4px 4px 4px;
      color: var(--primary-color);
      font-size: 12px;
    }
    margin-left: 10px;
    color: var(--primary-color);
  }
}
</style>
