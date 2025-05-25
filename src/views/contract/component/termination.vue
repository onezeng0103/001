<template>
  <van-popup v-model:show="props.terminationBtn" round position="bottom" @close="emit('close')">
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div></div>
      <div style="font-size: 14px">{{ type === 0 ? '止盈' : '止损' }}</div>
      <div>
        <svg
          @click="emit('close')"
          t="1747853459405"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1494"
          width="24"
          height="24"
        >
          <path
            d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
            p-id="1495"
            fill="#000"
          ></path>
        </svg>
      </div>
    </div>
    <div
      style="
        background: rgb(251, 251, 251);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 9px;
      "
    >
      <div
        style="
          flex: 1;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(153, 153, 153);
        "
        :class="margin == 1 ? 'active' : ''"
        @click="handleTabs(1)"
      >
        {{ t('marketPrice') }}
      </div>
      <div
        style="
          flex: 1;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(153, 153, 153);
        "
        :class="margin == 0 ? 'active' : ''"
        @click="handleTabs(0)"
      >
        {{ t('limitPrice') }}
      </div>
    </div>
    <div
      style="
        margin-top: 10px;
        background: rgb(251, 251, 251);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 9px;
        padding: 10px 15px;
      "
    >
      <div style="color: #000000; font-weight: 500; font-size: 16px">
        {{ type === 0 ? '止盈' : '止损' }}触发价格
      </div>
      <div
        style="margin-top: 15px; display: flex; align-items: center; justify-content: space-between"
      >
        <img style="height: 36px; width: 36px" src="../../../assets/img/dollar.png" alt="" />
        <input
          style="width: 100%; color: #000"
          v-model.trim="earnPriceValue"
          type="number"
          maxlength="140"
          placeholder="请输入"
          step="0.000000000000000001"
          enterkeyhint="done"
          pattern="[0-9]*"
          class="uni-input-input"
          autocomplete="off"
        />
        <span style="color: rgb(153, 153, 153)">USDT</span>
      </div>
      <div style="color: #000000; font-weight: 500; font-size: 16px; margin-top: 15px">
        {{ type === 0 ? '止盈' : '止损' }}委托
      </div>
      <div
        style="margin-top: 15px; display: flex; align-items: center; justify-content: space-between"
      >
        <img style="height: 36px; width: 36px" src="../../../assets/img/dollar.png" alt="" />
        <input
          v-if="margin == 1"
          style="width: 100%; color: #000"
          type="number"
          maxlength="140"
          placeholder="以当前最优价格交易"
          step="0.000000000000000001"
          disabled
          enterkeyhint="done"
          pattern="[0-9]*"
          class="uni-input-input"
          autocomplete="off"
        />
        <input
          v-else
          v-model.trim="earnDelegatePriceValue"
          type="number"
          style="width: 100%; color: #000"
          maxlength="140"
          placeholder="请输入"
          step="0.000000000000000001"
          enterkeyhint="done"
          pattern="[0-9]*"
          autocomplete="off"
        />
        <span style="color: rgb(153, 153, 153)">USDT</span>
      </div>
    </div>
    <div style="margin-top: 15px">
      <span style="color: rgb(153, 153, 153)">持仓量：</span>
      <span style="color: #000">
        {{ info.openNum }}
        {{ info.showCoin ? matchText(info.showCoin, '/USDT') : info.symbol.toUpperCase() }}
      </span>
    </div>
    <div style="margin-top: 15px">
      <span style="color: rgb(153, 153, 153)">开仓均价：</span>
      <span style="color: #000">{{ info.openPrice }} USDT</span>
    </div>
    <div style="margin-top: 15px">
      <span style="color: rgb(153, 153, 153)">最新成交价：</span>
      <span style="color: #000">{{ coinPriceInfo.close }} USDT</span>
    </div>
    <div style="margin-top: 15px">
      <span style="color: rgb(255, 100, 100)">*</span>
      <span style="color: rgb(153, 153, 153)">市场价格至：</span>
      <span style="color: #000">{{ coinPriceInfo.close }} USDT</span>
      <span style="color: rgb(153, 153, 153)">
        时将触发止盈委托，成交后预计盈利{{ incomeValue }}USDT
      </span>
    </div>
    <div style="width: 100%; display: flex; align-content: center; justify-content: center">
      <div class="btn2" @click="submit">
        <span>确认</span>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { showToast } from 'vant'
import { useI18n } from 'vue-i18n'
import { _mul, _sub, _toFixed } from '@/utils/decimal'
import { useTradeStore } from '@/store/trade'
import { settLoss } from '@/api/trade/index'
const { t } = useI18n()
const tradeStore = useTradeStore()
const props = defineProps({
  terminationBtn: {
    type: Boolean,
    default: false
  },
  info: {
    type: Object,
    default: () => ({})
  },
  availableBalance: {
    type: Number,
    default: () => 0
  },
  type: {
    type: Number,
    default: () => 0
  }
})
const emit = defineEmits(['close'])
const margin = ref(1)
const earnPriceValue = ref('') // 止盈/止损触发价
const earnDelegatePriceValue = ref('') // 止盈/止损委托价
const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[props.info.symbol] || {}
})
/**
 * 收益
 */
const incomeValue = computed(() => {
  if (coinPriceInfo.value.close) {
    // 最新价 当买多时 最新价-开仓价均价（openPrice） * 持仓数量（openNum）
    if (!props.info.type) {
      var price = _mul(_sub(coinPriceInfo.value.close, props.info.openPrice), props.info.openNum)
      return _toFixed(price, 4)
    } else {
      // 卖出  开仓-最新 * 持仓
      var price = _mul(_sub(props.info.openPrice, coinPriceInfo.value.close), props.info.openNum)
      return _toFixed(price, 4)
    }
  }
})
const handleTabs = (value) => {
  margin.value = value
}
const submit = () => {
  var data = {}
  if (props.type == 0) {
    data = {
      positionId: props.info.id,
      earnPrice: earnPriceValue.value,
      earnNumber: props.info.openNum,
      lossType: 0,
      delegateType: margin.value
    }
    if (!data.delegateType) {
      data.earnDelegatePrice = earnDelegatePriceValue.value
    }
  } else {
    data = {
      positionId: props.info.id,
      losePrice: earnPriceValue.value,
      loseNumber: props.info.openNum,
      // 0 止盈 1止损
      lossType: 1,
      // 委托类型（0 限价 1 市价）
      delegateType: margin.value ? 0 : 1
    }
    if (!data.delegateType) {
      data.loseDelegatePrice = earnDelegatePriceValue.value
    }
  }
  if (!data.delegateType) {
    if (earnPriceValue.value && earnDelegatePriceValue.value) {
      settLoss(data).then((res) => {
        if (res.code === 200) {
          showToast(res.msg)
          emit('updateList')
          emit('updateUser')
          emit('close')
        } else {
          showToast(res.msg)
        }
      })
    }
  } else {
    if (earnPriceValue.value) {
      settLoss(data).then((res) => {
        if (res.code === 200) {
          showToast(res.msg)
          emit('updateList')
          emit('updateUser')
          emit('close')
        } else {
          showToast(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.van-popup {
  background: #fff !important;
  padding: 15px;
  color: #000;
}
.active {
  color: #000 !important;
}
.btn2 {
  margin-top: 30px;
  width: 347px;
  height: 41px;
  background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
  border-radius: 21px 21px 21px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
</style>
