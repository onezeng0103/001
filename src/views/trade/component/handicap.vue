<template>
  <div class="price-list" v-show="showType.value != 2">
    <div
      class="cell"
      @click="emits('setTradePrice', asksList[index]?.price)"
      v-for="(item, index) in rows"
      :key="`asks${index}`"
    >
      <div
        class="bg-box bg-red"
        :style="`width:${_toFixed(_mul(_div(asksList[index]?.count || 0, maxAskCount), 100), 2)}%;`"
      ></div>
      <span>
        <span>{{ priceFormat(asksList[index]?.price) }}</span>
      </span>
      <span>
        <span>{{ priceFormat(asksList[index]?.count) }}</span>
      </span>
    </div>
  </div>
  <div class="price-center" @click="emits('setTradePrice', tradeDetailInfo?.close)">
    <span class="font-14 price_up font-weight">
      <span>{{ priceFormat(tradeDetailInfo?.close) }}</span>
    </span>
    <span class="font-10 color-gray">
      <span>≈${{ tradeDetailInfo?.close }}</span>
    </span>
  </div>
  <div class="price-list" v-show="showType.value != 1">
    <div
      class="cell"
      @click="emits('setTradePrice', bidsList[index]?.price)"
      v-for="(item, index) in rows"
      :key="`bids${index}`"
    >
      <div
        class="bg-box bg-green"
        :style="`width:${_toFixed(_mul(_div(bidsList[index]?.count || 0, maxBidCount), 100), 2)}%;`"
      ></div>
      <span>
        <span>{{ priceFormat(bidsList[index]?.price) }}</span>
      </span>
      <span>
        <span>{{ priceFormat(bidsList[index]?.count) }}</span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import _ from 'lodash'
import PubSub from 'pubsub-js'
import { socketDict } from '@/config/dict'
import { useTradeStore } from '@/store/trade'
import { _add, _div, _mul, _sub, _toFixed, priceFormat } from '@/utils/decimal'
import { matchText } from '@/utils/filters'
const { t } = useI18n()
const emits = defineEmits(['setTradePrice'])
const props = defineProps({
  coinInfo: {
    type: Object
  },
  /**
   * 行数 最大30 默认4
   */
  rows: {
    type: Number,
    default: 4
  }
})
/**
 * 盘口显示类型
 */
const showTypeList = [
  // 默认
  { label: t('default'), value: 0, icon: 'morenpan' },
  // 卖出盘
  { label: t('sell2'), value: 1, icon: 'maichupan' },
  // 买入盘
  { label: t('buy2'), value: 2, icon: 'mairupan' }
]
/**
 * 当前显示类型
 */
const showType = ref(showTypeList[0])
/**
 * 显示Popup变量
 */
const showTypePopup = ref(false)
/**
 * 显示行数
 */
const rows = computed(() => (showType.value.value != 0 ? props.rows * 2 : props.rows))
/**
 * 选中盘口显示类型
 */
const _checkedShowType = (item) => {
  if (item.value != showType.value.value) {
    showType.value = item
  }
  showTypePopup.value = false
}
/**
 * 盘口显示类型
 */
const showDepthListDict = [
  { label: '0.00000001', value: 0, min: 0.00000001 },
  { label: '0.0000001', value: 1, min: 0.0000001 },
  { label: '0.000001', value: 2, min: 0.000001 },
  { label: '0.00001', value: 3, min: 0.00001 },
  { label: '0.0001', value: 4, min: 0.0001 },
  { label: '0.001', value: 5, min: 0.001 },
  { label: '0.01', value: 6, min: 0.01 },
  { label: '0.1', value: 7, min: 0.1 },
  { label: '1', value: 8, min: 10 },
  { label: '10', value: 9, min: 100 },
  { label: '100', value: 10, min: 1000 }
]
const showDepthList = ref([])
/**
 * 当前显示类型
 */
const showDepth = reactive({})

/**
 * 显示Popup变量
 */
const showDepthPopup = ref(false)
/**
 * 选中盘口显示类型
 */
const _checkedShowDepth = (item) => {
  if (item.value != showDepth.value) {
    Object.assign(showDepth, item)
  }
  showDepthPopup.value = false
}

// 最大卖出数量
const maxAskCount = ref(0)
// 最大买入数量
const maxBidCount = ref(0)
/**
 * 买入列表
 */
const bidsList = reactive([])
/**
 * 卖出列表
 */
const asksList = reactive([])

// 生成 区间 随机整数
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/**
 * 获取最小单位值
 */
function getIntegerPart(number) {
  var integerPart = Math.floor(number) // 获取整数部分
  let temp = Math.pow(10, integerPart.toString().length - 1)
  if (integerPart < 10) {
    temp = Math.pow(10, 5 - number.toString().split('.')[1]?.length)
  }
  return temp
}
/**
 * 根据当前价格随机成交量
 */
const getMockDataList = () => {
  setTimeout(getMockDataListThrottle, getRandomInteger(900, 1600))

  let price = tradeDetailInfo.value?.close
  let coefficient = 1 / getIntegerPart(price)
  let aggregationFactor = showDepth?.min
  let countFactor = aggregationFactor * 1000
  if (price < 1000) {
    countFactor = aggregationFactor * 10 ** (`${price}`.length - 1)
  }

  if (!price || !Number(aggregationFactor)) {
    maxAskCount.value = 0
    maxBidCount.value = 0
    Object.assign(
      asksList,
      asksList.map((elem) => {
        elem.close = 0
        elem.count = 0
        return elem
      })
    )
    Object.assign(
      bidsList,
      asksList.map((elem) => {
        elem.price = 0
        elem.count = 0
        return elem
      })
    )
    return
  }
  // 生成数量 大 -> 小
  let tempAsksList = []
  let tempBidsList = []
  let hashCount = _mul(_mul(Math.random(), coefficient), countFactor)
  if (price < 10) {
    hashCount = _mul(_mul(Math.random(), coefficient), countFactor)
  }

  for (let i = 1; i <= props.rows * 2; i++) {
    let randomCount = _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient)
    let tempObj = {
      price: _add(_add(price, i * aggregationFactor), 0),
      count: randomCount
    }
    tempAsksList.push(tempObj)
    tempAsksList = tempAsksList.sort((a, b) => a.price - b.price)
  }

  for (let i = 1; i <= props.rows * 2; i++) {
    let randomCount = _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient)

    let tempObj = {
      price: _sub(_sub(price, i * aggregationFactor), 0),
      count: randomCount
    }
    tempBidsList.push(tempObj)
    tempBidsList = tempBidsList.sort((a, b) => b.price - a.price)
  }
  maxAskCount.value = Math.max(...tempAsksList.filter((e, i) => i < props.rows).map((e) => e.count))
  maxBidCount.value = Math.max(...tempBidsList.filter((e, i) => i < props.rows).map((e) => e.count))
  Object.assign(asksList, tempAsksList)
  Object.assign(bidsList, tempBidsList)
}
/**
 * 交易详情数据
 */
const tradeDetailInfo = computed(() => tradeStore.allCoinPriceInfo[props.coinInfo?.coin])
const tradeStore = useTradeStore()
watch(
  () => props.coinInfo?.coin,
  () => {
    if (tradeDetailInfo.value?.close > 0) {
      showDepthList.value = showDepthListDict
        .filter((elem) => elem.min * 30 < tradeDetailInfo.value.close)
        .slice(-4)
      Object.assign(showDepth, showDepthList.value[0])
      getMockDataListThrottle()
      // getMockDataList()
    }
  }
)

/**
 * 更新数据 限流
 */
const getMockDataListThrottle = _.throttle(() => {
  getMockDataList()
}, 1000)

const subKey = PubSub.subscribe(socketDict.DETAIL, (key, data) => {
  if (data.symbol && data.symbol == props.coinInfo.coin) {
    if (tradeDetailInfo.value.close && showDepthList.value.length) {
      getMockDataListThrottle()
    } else {
      showDepthList.value = showDepthListDict
        .filter((elem) => elem.min * 30 < tradeDetailInfo.value.close)
        .slice(-4)
      Object.assign(showDepth, showDepthList.value[0])
      getMockDataList()
    }
  }
})

onUnmounted(() => {
  subKey && PubSub.unsubscribe(subKey)
})
</script>
<style lang="scss" scoped>
.price-list {
  width: 100%;
  .cell {
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    .bg-box {
      width: 100%;
      height: 24px;
      transition: all 0.5s linear;
      opacity: 0.7;
      position: absolute;
      right: 0;
    }
  }
}
.price-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    display: inline-block;
  }
  .font-14 {
    font-size: 14px;
  }
  .font-10 {
    font-size: 10px;
  }
}
.bg-red {
  background-color: #ff5c51;
}
.bg-green {
  background-color: #35ad7a;
}
</style>
