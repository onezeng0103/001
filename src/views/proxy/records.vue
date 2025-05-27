<template>
  <div class="records">
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
                t="1747892392635"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="27855"
                width="25"
                height="25"
              >
                <path
                  d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
                  fill="#ffffff"
                  p-id="27856"
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
              <span>{{ t('transactionRecord') }}</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: var(--secondary-color);
            "
          ></div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="content-box">
        <div class="content-box-item" @click="handleClickStartDate(1)">
          <span>{{ startDate && Array.isArray(startDate) ? startDate.join('-') : '' }}</span>
          <div style="color: var(--secondary-color); font-size: 12px; margin-top: 5px">
            <span>{{ t('startDate') }}</span>
          </div>
        </div>
        <div class="content-box-item"></div>
        <div class="content-box-item" @click="handleClickStartDate(2)">
          <span>{{ endDate && Array.isArray(endDate) ? endDate.join('-') : '' }}</span>
          <div style="color: var(--secondary-color); font-size: 12px; margin-top: 5px">
            <span>{{ t('endDate') }}</span>
          </div>
        </div>
      </div>
      <div class="content-btn">
        <div class="content-btn-item" @click="handleSearch">{{ t('search') }}</div>
        <div class="content-btn-item" @click="handleReset">{{ t('reset') }}</div>
      </div>
      <template v-if="orderList.length > 0">
        <div class="content-list" v-for="(item, index) in orderList" :key="index">
          <div class="content-list-item">
            <div class="content-list-item-left">{{ t('status') }}</div>
            <div class="content-list-item-right">
              <template v-if="item.reimburseFlag == 1">{{ t('compensateLoss') }}</template>
              <template v-else>
                <template v-if="item.status == 1">{{ t('issued') }}</template>
                <template v-if="item.status == 0">{{ t('pendingIssuance') }}</template>
              </template>
            </div>
          </div>
          <div class="content-list-item">
            <div class="content-list-item-left">{{ t('orderNumber') }}</div>
            <div class="content-list-item-right">
              {{ item.brokerNo }}
            </div>
          </div>
          <div class="content-list-item">
            <div class="content-list-item-left">{{ t('coin') }}</div>
            <div class="content-list-item-right">
              {{ item.symbol }}
            </div>
          </div>
          <template v-if="item.reimburseFlag == 1">
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('lossAmount') }}</div>
              <div class="content-list-item-right">
                {{ truncateDecimals(item.orderEarn) }}{{ item.coin.toUpperCase() }}
              </div>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('compensateAmount') }}</div>
              <div class="content-list-item-right">
                {{ truncateDecimals(item.reimburse) }}{{ item.coin.toUpperCase() }}
              </div>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('compensateTime') }}</div>
              <div class="content-list-item-right">
                {{ item.updateTime }}
              </div>
            </div>
          </template>
          <template v-else>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('amount') }}</div>
              <div class="content-list-item-right">
                {{ item.amount }}{{ item.coin.toUpperCase() }}
              </div>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('earnings') }}</div>
              <div class="content-list-item-right">
                {{ truncateDecimals(item.orderEarn) }}{{ item.coin.toUpperCase() }}
              </div>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('institutionalProfit') }}</div>
              <div class="content-list-item-right">
                <template v-if="Math.sign(item.orderEarn) != -1">
                  - {{ Math.abs(truncateDecimals(Subtr(item.orderEarn, item.amountEarn))) }}
                  {{ item.coin.toUpperCase() }}
                </template>
                <template v-else>0{{ item.coin.toUpperCase() }}</template>
              </div>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('proxyTime') }}</div>
              <div class="content-list-item-right">
                {{ item.createTime }}
              </div>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-left">{{ t('settlementTime') }}</div>
              <div class="content-list-item-right">
                {{ item.settleTime }}
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <NoData />
      </template>
    </div>
  </div>
  <van-popup v-model:show="showBottom" position="bottom" round>
    <van-config-provider theme="dark">
      <van-date-picker
        theme="dark"
        v-model="currentDate"
        :title="t('selectDate')"
        @cancel="showBottom = false"
        @confirm="handleConfirm"
      >
        <template #confirm>
          <div class="text-text-primary text-style-web-body-bold">{{ t('confirm') }}</div>
        </template>
        <template #cancel>
          <div class="text-text-primary text-style-web-body-bold">{{ t('cancel1') }}</div>
        </template>
      </van-date-picker>
    </van-config-provider>
  </van-popup>
</template>

<script setup>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { getOrderListApi } from '@/api/proxy'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const showBottom = ref(false)
const startDate = ref('')
const endDate = ref('')
const currentDate = ref()
const orderList = ref([])
const truncateDecimals = (num) => {
  const truncatedNum = Math.trunc(num * 100) / 100
  return truncatedNum
}
const type = ref(1)
const handleClickStartDate = (value) => {
  type.value = value
  if (value == 1) {
    currentDate.value = startDate.value
  } else {
    currentDate.value = endDate.value
  }
  showBottom.value = true
}
const handleConfirm = (value) => {
  if (type.value == 1) {
    startDate.value = value.selectedValues
  } else {
    endDate.value = value.selectedValues
  }

  showBottom.value = false
}
const handleSearch = () => {
  getOrderListApi(startDate.value.join('-'), endDate.value.join('-')).then((res) => {
    orderList.value = res.rows
  })
}
const handleReset = () => {
  const now = dayjs()
  const formattedDate = [now.format('YYYY'), now.format('MM'), now.format('DD')]
  startDate.value = formattedDate
  console.log(startDate.value.join('-'))
  endDate.value = formattedDate

  getOrderListApi(startDate.value.join('-'), endDate.value.join('-')).then((res) => {
    orderList.value = res.rows
  })
}
const Subtr = (num1, num2) => {
  var r1, r2, m, n
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = r1 >= r2 ? r1 : r2
  return ((num1 * m - num2 * m) / m).toFixed(n)
}

onMounted(() => {
  const now = dayjs()
  const formattedDate = [now.format('YYYY'), now.format('MM'), now.format('DD')]
  startDate.value = formattedDate
  console.log(startDate.value.join('-'))
  endDate.value = formattedDate

  getOrderListApi(startDate.value.join('-'), endDate.value.join('-')).then((res) => {
    orderList.value = res.rows
  })
})
</script>

<style lang="scss" scoped>
.records {
  .main {
    padding: 0 10px;
    .content-box {
      width: 100%;
      height: auto;
      padding: 15px 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-item {
        width: 33.3333333333%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .content-btn {
      padding: 15px;
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-item {
        width: 40%;
        height: 41px;
        background: linear-gradient(
          306deg,
          var(--primary-border) 0%,
          var(--secondary-background) 100%
        );
        border-radius: 21px 21px 21px 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        color: var(--primary-color);
      }
    }
    .content-list {
      padding: 15px;
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      margin-bottom: 15px;
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    }
  }
}
.van-picker {
  background-color: var(--primary-background);
}
:deep(.van-picker-column__item) {
  color: var(--primary-color);
}
:deep(.van-picker__title) {
  color: var(--primary-color);
}
</style>
