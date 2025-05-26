<template>
  <div class="order-box">
    <div class="order-box-tab">
      <div
        class="order-box-tab-item"
        v-for="(item, index) in tabList"
        :key="index"
        :class="{ active: orderType === item.value }"
        @click="clickTab(item)"
      >
        <span v-if="item.value == 0">{{ item.label }}</span>
        <span v-if="item.value == 1">
          {{ item.num > 0 ? item.label + '(' + item.num + ')' : item.label }}
        </span>
      </div>
    </div>
    <div class="order-box-list">
      <template v-if="dataNewList.length > 0">
        <template v-for="(item, index) in dataNewList" :key="index">
          <div style="display: flex; align-items: center; justify-content: space-between">
            <div style="display: flex; align-items: center">
              <div
                style="
                  padding: 2px 5px;
                  background: var(--primary-border);
                  border-radius: 5px;
                  font-size: 10px;
                  margin-right: 5px;
                  color: var(--primary-color);
                "
              >
                <template v-if="item.type == 0">买入</template>
                <template v-if="item.type == 1">卖出</template>
              </div>
              <div>
                {{
                  item.showCoin
                    ? item.showCoin
                    : item.symbol?.toUpperCase() + '/' + item.coin?.toUpperCase()
                }}
              </div>
            </div>
            <div
              v-if="showChe && item.status == 0"
              @click="cancelOrder(item)"
              style="
                padding: 2px 5px;
                background: var(--primary-border);
                border-radius: 5px;
                font-size: 10px;
                margin-right: 5px;
                color: var(--primary-color);
              "
            >
              撤单
            </div>
          </div>
          <div
            v-if="item.delegateType"
            style="font-size: 10px; color: var(--secondary-color); margin-top: 10px"
          >
            {{ _timeFormat(item.params?.delegateTime, 'HH:mm MM/DD', true) }}
          </div>
          <div class="order-box-list-item">
            <div>委托价</div>
            <div class="order-box-list-item-price">{{ item.delegatePrice || 0 }}</div>
          </div>
          <div class="order-box-list-item">
            <div>委托量</div>
            <div class="order-box-list-item-price">{{ item.delegateTotal || 0 }}</div>
          </div>
          <div class="order-box-list-item">
            <div>数量</div>
            <div class="order-box-list-item-price">{{ item.dealNum || 0 }}</div>
          </div>
          <div class="order-box-list-item">
            <div>成交价</div>
            <div class="order-box-list-item-price">{{ item.dealPrice || 0 }}</div>
          </div>
          <div class="line"></div>
        </template>
      </template>
      <template v-else>
        <NoData />
      </template>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { getOrderListCurrencyApi } from '@/api/trade/index'
import { formatCurrentcurrency } from '@/utils/filters'
import { _timeFormat } from '@/utils/public'
import { cancelOrderCurrencyApi } from '@/api/trade/index'
import { showToast } from 'vant'
const { t } = useI18n()
const props = defineProps({
  coinInfo: {
    type: Object,
    default: () => {}
  }
})
const tabList = ref([
  { label: '当前委托', value: 0, num: 0 },
  { label: '历史委托', value: 1, num: 0 }
])
/**
 * 订单数据
 */
// 数据列表
const pageNum = ref(1)
const dataList = ref([])
const dataNewList = ref([])
const getOrderList = async (status) => {
  let params = `isAsc=desc&orderByColumn=updateTime&status=${status}&pageSize=1000&pageNum=1`
  const res = await getOrderListCurrencyApi(params)
  res.rows && dataList.value.push(...res.rows)
  filterEyes(props.coinInfo.coin)
  if (res.code == '200') {
    if (status == 0) {
      tabList.value[0].num = res.total
    } else if (status == 1) {
      tabList.value[1].num = res.total
    }
  }
}
const getNum = async (status) => {
  let params = `isAsc=desc&orderByColumn=updateTime&status=${status}&pageSize=1000&pageNum=1`
  const res = await getOrderListCurrencyApi(params)
  if (res.code == '200') {
    if (status == 0) {
      tabList.value[0].num = res.total
    } else if (status == 1) {
      tabList.value[1].num = res.total
    }
  }
}
// 切换列表
const orderType = ref(0)
const clickTab = (item) => {
  dataList.value = []
  dataNewList.value = []
  orderType.value = item.value
  getOrderList(orderType.value)
}
const init = () => {
  getOrderList(0)
  getNum(1)
}
onMounted(() => {
  init()
})
/**
 * 取消订单
 */
const hide = ref(false)
const showChe = ref(true)
// 撤单
const cancelOrder = async (item) => {
  const res = await cancelOrderCurrencyApi(item.id)
  if (res.code == 200) {
    showToast(res.msg)
    showChe.value = false
    hide.value = true
    refresh()
  } else {
    showToast(res.msg)
  }
}
//刷新订单
const refresh = () => {
  dataList.value = []
  dataNewList.value = []
  pageNum.value = 1
  if (orderType.value == 0) {
    getOrderList(0)
    getNum(1)
  }
  if (orderType.value == 1) {
    getOrderList(1)
    getNum(0)
  }
}
// 过滤当前币种订单
const filterEyes = (coin) => {
  dataNewList.value = formatCurrentcurrency(dataList.value, coin)
}
defineExpose({
  refresh
})
</script>

<style lang="scss" scoped>
.order-box {
  margin-top: 15px;
  background: var(--regular-background);
  border-radius: 8px 8px 8px 8px;
  padding: 14px;
  &-tab {
    display: flex;
    align-items: center;
    &-item {
      color: var(--secondary-color);
      margin-right: 10px;
    }
    .active {
      color: var(--primary-color);
    }
  }
  &-list {
    margin-top: 10px;
    &-item {
      font-size: 12px;
      color: var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      &-price {
        color: var(--primary-color);
      }
    }
    .line {
      margin: 10px 0;
      width: 100%;
      height: 1px;
      background: var(--regular-background);
    }
  }
}
</style>
