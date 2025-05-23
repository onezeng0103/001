<template>
  <div class="list-item">
    <div class="row">
      <div class="row-left">
        <div
          style="
            background-color: rgb(186, 236, 87);
            font-size: 10px;
            color: #000;
            border-radius: 5px;
            padding: 2px 5px;
            margin-right: 5px;
          "
        >
          <span>
            {{ !item?.type ? t('goingLong') : t('openBlank') }}
          </span>
        </div>
        <span>
          {{ item?.showCoin ? item?.showCoin : item?.symbol.toUpperCase() + '/USDT' }}
        </span>
        <div style="font-size: 10px; margin-left: 5px">{{ item?.leverage }}X</div>
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('income') }}
      </div>
      <div class="value">{{ incomeValue }} USDT</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('yieldRate') }}
      </div>
      <div class="value">{{ yieldValue }}%</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('positionAmount') }}
      </div>
      <div class="value">
        {{ item.openNum }}
        {{ item.showCoin ? matchText(item?.showCoin, '/USDT') : item?.symbol.toUpperCase() }}
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('marginAmount') }}
      </div>
      <div class="value">{{ item.adjustAmount }} USDT</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('guaranteeAssetRatio') }}
      </div>
      <div class="value">{{ guaranteePrice }}%</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('openAveragePrice') }}
      </div>
      <div class="value">{{ item.openPrice }} USDT</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('latestPrice') }}
      </div>
      <div class="value">{{ coinPriceInfo.close }} USDT</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div class="name">
        {{ t('estimatedQiangpingPrice') }}
      </div>
      <div class="value">{{ item.closePrice <= 0 ? '--' : item.closePrice }} USDT</div>
    </div>
    <div class="item-footer">
      <div class="item-footer-item" @click="showDetail(item.id)">{{ t('fastClose') }}</div>
      <div class="item-footer-item" @click="handleAdjustmentMarginBtn(item)">
        {{ t('adjustmentMargin') }}
      </div>
      <div class="item-footer-item" @click="handleTerminationBtn(item, 0)">
        {{ t('stopProfit') }}
      </div>
      <div class="item-footer-item" @click="handleTerminationBtn(item, 1)">
        {{ t('stopLoss') }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { showToast, showLoadingToast } from 'vant'
import { useTradeStore } from '@/store/trade'
import { stopOrder } from '@/api/trade/index'
import { _add, _div, _mul, _sub, _toFixed } from '@/utils/decimal'
const { t } = useI18n()
const tradeStore = useTradeStore()
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  /**可用余额 */
  availableBalance: {
    type: Number,
    default: () => 0
  }
})
const emits = defineEmits(['updateList', 'updateUser', 'openAdjustmentMargin'])
const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[props.item.symbol] || {}
})
/**
 * 收益
 */
const incomeValue = computed(() => {
  if (coinPriceInfo.value.close) {
    // 最新价 当买多时 最新价-开仓价均价（openPrice） * 持仓数量（openNum）
    if (!props.item.type) {
      var price = _mul(_sub(coinPriceInfo.value.close, props.item.openPrice), props.item.openNum)
      return _toFixed(price, 4)
    } else {
      // 卖出  开仓-最新 * 持仓
      var price = _mul(_sub(props.item.openPrice, coinPriceInfo.value.close), props.item.openNum)
      return _toFixed(price, 4)
    }
  }
})
// (现金+信用账户内证券市值)/(融资买入金额+融券卖出证券数量*市价+利息及费用)
// （账户余额+ （当前价*数量openNum） ） / （购买金额（adjustAmount）+ 数量openNum*当前+  利息openFee  ）
const guaranteePrice = computed(() => {
  if (coinPriceInfo.value.close) {
    let price = _div(
      _add(props.availableBalance, _mul(coinPriceInfo.value.close, props.item.openNum)),
      _add(
        _add(props.item.adjustAmount, _mul(props.item.openNum, coinPriceInfo.value.close)),
        props.item.openFee
      )
    )
    return _toFixed(price)
  }
})
/**
 * 收益率
 */
const yieldValue = computed(() => {
  if (coinPriceInfo.value.close) {
    if (!props.item.type) {
      let price = _mul(
        _mul(
          _div(_sub(coinPriceInfo.value.close, props.item.openPrice), props.item.openPrice),
          100
        ),
        props.item.leverage
      )
      return _toFixed(price, 4)
    } else {
      var price = _mul(
        _mul(
          _div(_sub(props.item.openPrice, coinPriceInfo.value.close), props.item.openPrice),
          100
        ),
        props.item.leverage
      )
      return _toFixed(price, 4)
    }
  }
})
const _isRGB = (price) => {
  let tempVal = ''
  price = Number(price)
  if (0 < price) {
    // buy 涨 sell 跌D
    tempVal = 'color-primary'
  } else if (0 > price) {
    // buy 跌 sell 涨
    tempVal = 'color-red'
  }
  return tempVal
}
const showDetail = (curId) => {
  try {
    showLoadingToast({
      forbidClick: true,
      duration: 0
    })
    stopOrder({
      id: curId
    }).then((res) => {
      if (res.code === 200) {
        showToast(res.msg)
        emits('updateList')
        emits('updateUser')
      } else {
        closeToast()
        showToast(res.msg)
      }
    })
  } catch (error) {
    closeToast()
  }
}
const handleAdjustmentMarginBtn = (value) => {
  emits('openAdjustmentMargin', value)
}
const handleTerminationBtn = (value, type) => {
  emits('openTermination', value, type)
}
</script>
<style scoped lang="scss">
.list-item {
  width: 100%;
  height: auto;
  padding: 12px 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .row {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    &-left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .name {
    font-size: 12px;
    color: rgb(153, 153, 153);
  }
  .value {
    color: #fff;
    font-size: 12px;
  }
  .item-footer {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    .item-footer-item {
      padding: 2px 5px;
      border-radius: 5px;
      background-color: rgb(186, 236, 87);
      color: #000;
      font-size: 12px;
    }
  }
}
.rise {
  color: var(--color-text-green) !important;
}
</style>
