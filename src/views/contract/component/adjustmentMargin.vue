<template>
  <van-popup
    v-model:show="props.adjustmentMarginBtn"
    round
    position="bottom"
    @close="emit('close')"
  >
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div></div>
      <div style="font-size: 14px">{{ t('adjustmentMargin') }}</div>
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
          color: var(--secondary-color);
        "
        :class="margin == 0 ? 'active' : ''"
        @click="handleTabs(0)"
      >
        {{ t('addMargin') }}
      </div>
      <div
        style="
          flex: 1;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-color);
        "
        :class="margin == 1 ? 'active' : ''"
        @click="handleTabs(1)"
      >
        {{ t('reduceMargin') }}
      </div>
    </div>
    <div
      style="
        border-radius: 9px;
        background: var(--primary-color);
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
      "
    >
      <img style="height: 36px; width: 36px" src="../../../assets/img/dollar.png" alt="" />
      <input
        style="width: 100%; color: var(--primary-background)"
        v-model.trim="money"
        type="number"
        maxlength="140"
        placeholder="请输入"
        step="0.000000000000000001"
        enterkeyhint="done"
        pattern="[0-9]*"
        autocomplete="off"
      />
      <span style="color: var(--secondary-color)">USDT</span>
    </div>
    <div style="margin-top: 15px; position: relative">
      <van-slider
        active-color="var(--primary-border)"
        inactive-color="var(--placeholder-border)"
        button-size="16"
        v-model="sliderValue"
      />
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          top: 10px;
        "
      >
        <div
          :style="{ color: sliderValue >= 25 ? 'var(--regular-color)' : 'var(--secondary-color)' }"
        >
          0%
        </div>
        <div
          :style="{ color: sliderValue >= 25 ? 'var(--regular-color)' : 'var(--secondary-color)' }"
        >
          25%
        </div>
        <div
          :style="{ color: sliderValue >= 50 ? 'var(--regular-color)' : 'var(--secondary-color)' }"
        >
          50%
        </div>
        <div
          :style="{ color: sliderValue >= 75 ? 'var(--regular-color)' : 'var(--secondary-color)' }"
        >
          75%
        </div>
        <div
          :style="{ color: sliderValue >= 100 ? 'var(--regular-color)' : 'var(--secondary-color)' }"
        >
          100%
        </div>
      </div>
    </div>
    <div style="margin-top: 40px">
      <span style="color: var(--secondary-color)">{{ t('atMost') }}：</span>
      <span style="color: var(--regular-color)">{{ atMostValue }} USDT</span>
    </div>
    <div style="margin-top: 15px">
      <span style="color: var(--secondary-color)">{{ t('qiangpingPrice') }}：</span>
      <span style="color: var(--regular-color)">{{ qiangpingPrice }} USDT</span>
    </div>
    <div style="width: 100%; display: flex; align-content: center; justify-content: center">
      <div class="btn2" @click="submit">
        <span>{{ t('confirm') }}</span>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { showToast } from 'vant'
import { _add, _div, _mul, _sub, _toFixed } from '@/utils/decimal'
import { useTradeStore } from '@/store/trade'
import { adjustAmount } from '@/api/trade/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const tradeStore = useTradeStore()
const props = defineProps({
  adjustmentMarginBtn: {
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
  }
})
const emit = defineEmits(['close'])
const money = ref('')
const sliderValue = ref(0)
const margin = ref(0)

watch(
  () => sliderValue.value,
  (n) => {
    if (n) {
      let rate = _div(n, 100)
      money.value = _mul(props.availableBalance, rate)
    } else {
      money.value = ''
    }
  }
)
const handleTabs = (value) => {
  margin.value = value
}
// 最多/最少增加
const atMostValue = computed(() => {
  let price
  // 最多增加
  if (!margin.value) {
    // type  0 买入 1 卖出
    if (props.info?.type) {
      price = _add(props.info?.openPrice, _div(props.info.adjustAmount, props.info.openNum))
      price = price > 0 ? price : 0
    } else {
      price = _sub(props.info?.openPrice, _div(props.info.adjustAmount, props.info.openNum))
      price = price > 0 ? price : 0
    }
  } else {
    // 最多减少
    // adjustAmount -amount   >  adjustAmount -amount  : 0
    price = _sub(props.info.adjustAmount, props.info.amount)
    price = price > 0 ? price : 0
  }

  return price
})
// 强平价格
const qiangpingPrice = computed(() => {
  var price
  var closeFee = 0
  if (tradeStore.contractCoinList.length > 0) {
    tradeStore.contractCoinList.forEach((element) => {
      if (element.coin === props.info.symbol) {
        closeFee = element.closeFee
      }
    })
  }
  // adjustAmount + 当前输入的值   ） / 持仓数量（openNum）
  let position
  if (!margin.value) {
    position = _div(
      _add(props.info?.adjustAmount, money.value ? money.value : 0),
      props.info.openNum
    )
  } else {
    position = _div(
      _sub(props.info.adjustAmount, money.value ? money.value : 0),
      props.info.openNum
    )
  }
  // 手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
  let commission = _mul(_add(props.info?.adjustAmount, money.value ? money.value : 0), closeFee)
  // 判断type 0  1
  if (props.info.type === 0) {
    // 开盘价（openPrice） - （adjustAmount + 当前输入的值   ） / 持仓数量（openNum） + 手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
    price = _add(_sub(props.info?.openPrice, position), commission)
  } else if (props.info.type === 1) {
    // （adjustAmount + 当前输入的值   ） / 持仓数量（openNum）  +   开盘价（openPrice）   -  手续费（（adjustAmount + 当前输入的值   ） * closeFee ）
    price = _sub(_add(position, props.info?.openPrice), commission)
  }
  price = price <= 0 ? 0 : price
  return _toFixed(price, 2)
})
const submit = () => {
  let data = {
    id: props.info.id,
    money: money.value,
    // 0 增加保证金 1 减少保证金
    flag: margin.value ? 1 : 0
  }
  if (Number(money.value)) {
    adjustAmount(data).then((res) => {
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
</script>
<style lang="scss" scoped>
.van-popup {
  background: var(--primary-color) !important;
  padding: 15px;
  color: var(--regular-color);
}
.active {
  color: var(--regular-color) !important;
}
.btn2 {
  margin-top: 30px;
  width: 347px;
  height: 41px;
  background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
  border-radius: 21px 21px 21px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: var(--regular-color);
}
</style>
