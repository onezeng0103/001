<template>
  <div class="flashExchangeWrap">
    <div style="height: 44px">
      <div
        style="
          background: var(--primary-background);
          border-bottom-color: var(--placeholder-color);
          padding-left: 8px;
          padding-right: 8px;
          z-index: 9;
          position: fixed;
          width: 100%;
          box-sizing: border-box;
          top: 0;
        "
      >
        <div style="height: 0px; width: 100%; box-sizing: border-box"></div>
        <div
          style="
            height: 44px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
          "
        >
          <div
            @click="router.back()"
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span style="cursor: pointer">
              <svg
                t="1747825997144"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="22723"
                width="30"
                height="30"
              >
                <path
                  d="M330.666667 512c0-14.933333 4.266667-29.866667 14.933333-40.533333l234.666667-277.33333399c23.466667-27.733333 64-29.866667 89.6-8.53333301 27.733333 23.466667 29.866667 64 8.53333299 89.6L477.866667 512l200.53333299 236.8c23.466667 27.733333 19.19999999 68.266667-8.53333299 89.6-27.733333 23.466667-68.266667 19.19999999-89.6-8.53333301l-234.666667-277.33333399c-10.666667-10.666667-14.933333-25.6-14.933333-40.533333z"
                  fill="#ffffff"
                  p-id="22724"
                ></path>
              </svg>
            </span>
          </div>
          <div style="text-transform: capitalize">
            <span
              style="
                font-size: 16px;
                color: var(--primary-color);
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>{{ t('flashExchange') }}</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
            "
          ></div>
        </div>
      </div>
    </div>

    <div style="margin: 15px 10px; font-size: 14px; color: var(--primary-color)">
      {{ t('realTimeOptimalPriceExchange') }}
    </div>

    <div class="item">
      <div class="item-top">
        <div>{{ t('consume') }}</div>
        <div>{{ t('balance') }}:{{ availableAmount }}</div>
      </div>
      <div class="item-unb">
        <div style="display: flex; align-items: center" @click="showAction('from')">
          <img
            :src="list1Current?.icon"
            alt=""
            style="width: 30px; height: 30px; border-radius: 50%"
          />
          <div class="unb">{{ list1Current?.coin?.toUpperCase() }}</div>
          <div>
            <svg
              t="1747908840700"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4215"
              width="9"
              height="9"
            >
              <path
                d="M508.411925 903.34339c-38.921487 0-75.288752-19.825632-96.33068-52.544008L55.828008 297.262858c-22.74474399-35.272598-24.325929-80.15393799-4.257038-116.886091 20.190521-36.732153 58.74712-59.720157 100.709348-59.720157L864.543532 120.65661c41.962228 0 80.518826 22.866374 100.587719 59.720157s18.487706 81.613493-4.257038 116.886091l-356.131607 553.414895c-21.163559 32.840005-57.409193 52.665637-96.330681 52.665637z"
                p-id="4216"
                fill="#BAEC57"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <input
            v-model="fromNum"
            type="number"
            maxlength="140"
            style="text-align: right"
            :placeholder="t('transferAmount')"
          />
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: center">
      <svg
        t="1747909226658"
        class="icon"
        viewBox="0 0 1217 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6984"
        data-spm-anchor-id="a313x.search_index.0.i8.646b3a81fgfRJC"
        width="15"
        height="15"
        style="transform: rotate(90deg); padding: 12px"
        @click="jiaohuan"
      >
        <path
          d="M81.279482 403.912645l1.601294-0.055217 1054.866326-0.110434h0.55217a54.112699 54.112699 0 0 0 54.057482-53.33966 52.732273 52.732273 0 0 0-23.246374-44.78102L775.026368 35.780642a55.051389 55.051389 0 0 0-74.211701 11.871663l-1.766945 2.374333a52.014451 52.014451 0 0 0-8.503424 39.424966 51.904017 51.904017 0 0 0 21.755513 33.903263l253.611863 173.712806H83.101645a53.450094 53.450094 0 0 0-1.822163 106.844972zM1137.471016 619.976921H82.273389a54.112699 54.112699 0 0 0-54.057482 53.394877 52.897924 52.897924 0 0 0 23.301591 44.781019l394.028795 269.790456v0.055217c9.276463 6.294743 20.099002 9.607765 31.308061 9.607765h0.165651a55.051389 55.051389 0 0 0 44.449717-22.528552l1.104341-1.546077a52.621839 52.621839 0 0 0-14.35643-72.996927l-253.611863-173.712806H1137.471016a53.450094 53.450094 0 0 0 0-106.844972z"
          fill="#BAEC57"
          p-id="6985"
          data-spm-anchor-id="a313x.search_index.0.i7.646b3a81fgfRJC"
          class="selected"
        ></path>
      </svg>
    </div>

    <div class="item">
      <div class="item-top">
        <div>{{ t('get') }}</div>
        <div>{{ t('balance') }}:{{ availableAmount2 }}</div>
      </div>
      <div class="item-unb">
        <div style="display: flex; align-items: center" @click="showAction('to')">
          <img :src="list2Current?.icon" alt="" style="width: 30px; height: 30px" />
          <div class="unb">{{ list2Current?.coin?.toUpperCase() }}</div>
          <div>
            <svg
              t="1747908840700"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4215"
              width="9"
              height="9"
            >
              <path
                d="M508.411925 903.34339c-38.921487 0-75.288752-19.825632-96.33068-52.544008L55.828008 297.262858c-22.74474399-35.272598-24.325929-80.15393799-4.257038-116.886091 20.190521-36.732153 58.74712-59.720157 100.709348-59.720157L864.543532 120.65661c41.962228 0 80.518826 22.866374 100.587719 59.720157s18.487706 81.613493-4.257038 116.886091l-356.131607 553.414895c-21.163559 32.840005-57.409193 52.665637-96.330681 52.665637z"
                p-id="4216"
                fill="#BAEC57"
              ></path>
            </svg>
          </div>
        </div>
        <div>{{ toNum }}</div>
      </div>
    </div>

    <div class="item" style="margin-top: 10px">
      <div class="item-top">
        <div>{{ t('fee') }} 0.05%</div>
        <div style="color: var(--primary-color)">
          {{ t('exchangePrice') }} 1 {{ list1Current?.coin?.toUpperCase() }} = {{ curRate }}
          {{ list2Current?.coin?.toUpperCase() }}
        </div>
      </div>
    </div>

    <div class="btn" @click="submit">{{ t('startExchange') }}</div>

    <div style="margin: 0 0 15px 10px; font-size: 14px; color: var(--primary-color)">
      {{ t('exchangeRecord') }}
    </div>

    <div class="list">
      <template v-for="item in texChangeList" :key="item">
        <div class="list-item">
          <div style="display: flex; align-items: center">
            <div style="display: flex; align-items: center">
              <div style="font-size: 10px; color: var(--primary-color)">
                {{ item?.fromCoin?.toUpperCase() }}
              </div>
              <svg
                t="1747913222179"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7992"
                width="10"
                height="8"
                style="margin: 0 10px"
              >
                <path
                  d="M1024 512a42.666667 42.666667 0 0 0-42.666667-42.666667H42.666667a42.666667 42.666667 0 1 0 0 85.333334h938.666666a42.666667 42.666667 0 0 0 42.666667-42.666667z"
                  p-id="7993"
                  fill="#999999"
                ></path>
                <path
                  d="M1011.498667 542.165333a42.666667 42.666667 0 0 0 0-60.330666l-256-256a42.666667 42.666667 0 1 0-60.330667 60.330666L921.002667 512l-225.834667 225.834667a42.666667 42.666667 0 0 0 60.330667 60.330666l256-256z"
                  p-id="7994"
                  fill="#999999"
                ></path>
              </svg>
              <div style="font-size: 10px; color: var(--primary-color)">
                {{ item?.toCoin?.toUpperCase() }}
              </div>
            </div>
          </div>
          <div style="text-align: right">
            <div class="get">+{{ 1 }}</div>
            <div class="minus">-{{ _numberWithCommas(item?.amount) }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '100%' }">
    <CurrencyList :showBottom="showBottom" @close="handleClose" :list="action" :info="info" />
  </van-popup>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { debounce } from 'lodash'
import { storeToRefs } from 'pinia'
import { showToast } from 'vant'
import { rate, toExchange, getTexChangeListApi } from '@/api/account'
import { useAccountStore } from '@/store/account/index'
import { useUserStore } from '@/store/user/index'
import { priceFormat } from '@/utils/decimal.js'
import CurrencyList from './currencyList.vue'
import { _numberWithCommas } from '@/utils/public'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()
const accountStore = useAccountStore()
const userStore = useUserStore()
userStore.getUserInfo()
// 用户余额信息
const { asset } = storeToRefs(userStore)
const { swapCoinList } = storeToRefs(accountStore)
const showBottom = ref(false) //sheet面板隐显
const action = ref({}) //面板数据(flag:from上，to下)
const flag = ref('from') //面板展示数据from/to
const jiaohuanFlag = ref(true) //交换按钮（true初始状态）
const list1 = ref([]) //币种列表
const list2 = ref([])
const list1Current = ref({}) //显示的币种列表
const list2Current = ref({})
const list1Coin = ref(0) //显示的币种
const list2Coin = ref(0)
// 当前币种的余额（一定取最新的）
const availableAmount = computed(() => {
  let data = ''
  asset.value.forEach((item, index) => {
    if (item.symbol == list1Current.value.coin && item.type == 1) {
      data = item.availableAmount
    }
  })
  return data
})
// 当前币种的余额（一定取最新的）
const availableAmount2 = computed(() => {
  let data = ''
  asset.value.forEach((item, index) => {
    if (item.symbol == list2Current.value.coin && item.type == 1) {
      data = item.availableAmount
    }
  })
  return data
})
const texChangeList = ref([])
const getTexChangeList = async () => {
  const res = await getTexChangeListApi()
  texChangeList.value = res.rows
}
const init = async () => {
  await accountStore.getSwapCoinList()
  let template1 = []
  asset.value.forEach((item, index) => {
    let obj = {}
    if (item.type == '1') {
      obj['id'] == index + 1
      obj['amount'] = item.availableAmount
      if (item.symbol == 'usdt') {
        obj['coin'] = 'usdt'
        obj['icon'] = item.loge
        // console.log('USDT图标',item.loge)
        template1.unshift(obj)
      }
      if (item.symbol != 'usdt') {
        obj['coin'] = item.symbol?.replace('usdt', '').trim()
        obj['icon'] = item.loge
        // console.log('非USDT图标',item.loge)
        template1.push(obj)
      }
    }
  })
  // **************************
  // 兑换成什么列表添加金额
  swapCoinList.value.forEach((item) => {
    template1.forEach((items) => {
      if (items.coin == item.coin) {
        item['amount'] = items.amount
      }
    })
  })
  list1.value = template1

  // console.log('列表2',swapCoinList.value)

  if (['cdex'].includes(__config._APP_ENV)) {
    list1Current.value = template1.find((item, idx) => {
      return item.coin === 'btc'
    })
  } else {
    list1Current.value = template1[0]
  }
  list1Coin.value = list1Current.value?.coin
  list2.value = swapCoinList.value?.filter((item) => {
    return item.coin != list1Current.value?.coin
  })
  list2Current.value = swapCoinList.value?.filter((item) => {
    return item.coin != list1Current.value?.coin
  })[0]
  list2Coin.value = list2Current.value?.coin
}
const curRate = ref(0)
// 获取汇率
const getRate = (from, to) => {
  from = filterCoin(from)
  to = filterCoin(to)
  rate(from, to).then((res) => {
    if (res.code == '200') {
      let resFrom = res.data[`${from}`]
      let resTo = res.data[`${to}`]
      if (resFrom == null) {
        resFrom = 1
      }
      if (resTo == null) {
        resTo = 1
      }
      curRate.value = priceFormat(resFrom / resTo, 8)
    }
  })
}
//面板中对上面货币更改
watch([list1Coin], ([newValue], [oldValue]) => {
  if (jiaohuanFlag.value) {
    //上面默认显示的货币
    list1.value.forEach((item) => {
      if (item.coin == newValue) {
        list1Current.value = item
      }
    })
    //下面货币列表
    list2.value = swapCoinList.value.filter((item) => {
      return item.coin != list1Current.value.coin
    })
    // 下面货币列表排他
    if (newValue == list2Coin.value) {
      list2Current.value = swapCoinList.value.filter((item) => {
        return item.coin != list1Current.value.coin
      })[0]
      list2Coin.value = list2Current.value.coin
    }
  } else {
    list1.value.forEach((item) => {
      if (item.coin == newValue) {
        list1Current.value = item
      }
    })
  }
})
watch([list2Coin], ([newValue], [oldValue]) => {
  if (jiaohuanFlag.value) {
    // 下面默认显示的货币
    list2.value.forEach((item) => {
      if (item.coin == newValue) {
        list2Current.value = item
      }
    })
  } else {
    list2.value.forEach((item) => {
      if (item.coin == newValue) {
        list2Current.value = item
      }
    })
    list1.value = swapCoinList.value.filter((item) => {
      return item.coin != list2Current.value.coin
    })
    if (newValue == list2Coin.value) {
      list1Current.value = swapCoinList.value.filter((item) => {
        return item.coin != list2Current.value.coin
      })[0]
      list1Coin.value = list2Current.value.coin
    }
  }
})
// 监听默认显示货币，修改汇率
watch(
  [list1Current, list2Current],
  (newValue, oldValue) => {
    getRate(newValue[0]?.coin, newValue[1]?.coin)
  },
  {
    deep: true
  }
)
// 点击交换按钮（交换上下货币列表，当前显示）
const jiaohuan = () => {
  jiaohuanFlag.value = !jiaohuanFlag.value
  let tempList = list1.value
  list1.value = list2.value
  list2.value = tempList
  let tempCurrent = list1Current.value
  list1Current.value = list2Current.value
  list2Current.value = tempCurrent
}

const filterCoin = (item) => {
  return item
}

/**
 * 兑换金额
 */
const fromNum = ref('')
const toNum = ref()
watch([fromNum, curRate], () => {
  toNum.value = priceFormat(fromNum.value * curRate.value, 8)
})
onMounted(() => {
  init()
  getTexChangeList()
})
const info = ref()
// 触发sheet面板事件(item=from/to,面板数据不同)
const showAction = (item) => {
  if (item == 'from') {
    action.value = list1.value
    info.value = list1Current.value
  } else if (item == 'to') {
    action.value = list2.value
    info.value = list2Current.value
  }
  flag.value = item
  showBottom.value = true
}
// sheet面板内容选择（根据flag标识，修改当前货币）
const handleClose = (value) => {
  showBottom.value = false
  if (flag.value == 'from') {
    list1Coin.value = value.coin
  } else if (flag.value == 'to') {
    list2Coin.value = value.coin
  }
}
const submitForm = debounce(() => {
  if (fromNum.value <= 0) {
    // 兑换金额不能小于0
    showToast(t('exchangeAmountCannotBeLessThan0'))
    return
  }
  // 兑换金额不能超过可用金
  if (fromNum.value > availableAmount.value) {
    showToast(t('exchangeAmountCannotBeGreaterThanAvailableAmount'))
    return
  }
  let params = {
    fromSymbol: filterCoin(list1Current.value?.coin),
    toSymbol: filterCoin(list2Current.value?.coin),
    total: fromNum.value
  }
  toExchange(params).then((res) => {
    if (res.code == '200') {
      // 兑换成功，请稍后查看
      showToast(t('exchangeSuccess'))
      setTimeout(() => {
        userStore.getUserInfo()
        getTexChangeList()

        // init()
      }, 1000)
    } else {
      showToast(res.msg)
    }
  })
}, 500)
const submit = () => {
  submitForm()
}
</script>

<style lang="scss" scoped>
.flashExchangeWrap {
  .list {
    margin: 0 10px;

    .list-item {
      margin-bottom: 15px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .move {
        width: 25px;
        height: 25px;
        margin-left: -10px;
        border-radius: 50%;
        background-color: var(--primary-background);
      }

      .get {
        font-size: 12px;
        color: #17ac00;
      }

      .minus {
        font-weight: 400;
        font-size: 10px;
        color: var(--secondary-color);
      }
    }
  }

  .btn {
    margin: 40px 39px 30px 39px;
    padding: 11px 123px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 12px;
    color: var(--primary-background);
    text-align: left;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
    border-radius: 20px 20px 20px 20px;
  }

  .item {
    margin: 0 10px;
    //width: 100%;

    .item-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 400;
      font-size: 12px;
      color: var(--secondary-color);
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 5px;
    }

    .item-unb {
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 21px 10px;

      .unb {
        margin: 0 3px 0 5px;
        font-weight: 400;
        font-size: 16px;
        color: var(--primary-color);
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>
