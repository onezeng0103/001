<template>
  <div class="earnings">
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
              <span>{{ t('earningsRecord') }}</span>
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
      <div class="info">
        <div class="info-left">
          <div class="info-left-name">
            {{ user.loginName }}
          </div>
          <div class="info-left-price">
            {{ t('personalFunds') }}
            <span>{{ availableBalance }} USDT</span>
          </div>
        </div>
        <div class="info-right">
          <img :src="path" alt="" />
        </div>
      </div>
      <div class="box">
        <div class="box-item">
          <div>
            {{ info?.totalNum || 0 }}
          </div>
          <div style="font-size: 12px; color: var(--secondary-color); margin-top: 5px">
            {{ t('proxyDays') }}
          </div>
        </div>
        <div class="box-item">
          <div>{{ info?.todayAmountEarn }}</div>
          <div style="font-size: 12px; color: var(--secondary-color); margin-top: 5px">
            {{ t('todayEarnings') }}
          </div>
        </div>
        <div class="box-item">
          <div>{{ info?.totalAmountEarn?.toFixed(2) }}</div>
          <div style="font-size: 12px; color: var(--secondary-color); margin-top: 5px">
            {{ t('totalEarnings') }}
          </div>
        </div>
      </div>
      <template v-if="orderList.length > 0">
        <div class="list" v-for="(item, index) in orderList">
          <div class="list-item">
            <div>{{ t('coinType') }}</div>
            <div>{{ item.symbol }}</div>
          </div>
          <div class="list-item">
            <div>{{ t('winLoss') }}</div>
            <div>{{ item.amountEarn?.toFixed(2) }}</div>
          </div>
          <div class="list-item">
            <div>{{ t('yieldRate') }}</div>
            <div>{{ truncateDecimals(item.amountEarn / item.amount) }}%</div>
          </div>
          <div class="list-item">
            <div>{{ t('transactionTime') }}</div>
            <div>{{ item.createTime }}</div>
          </div>
        </div>
      </template>
      <template v-else>
        <NoData />
      </template>
    </div>
    <div class="btn">
      <div>{{ t('proxyTotalYield') }}:{{ getAllAmountEarn?.toFixed(2) }}</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { getUserInfoApi, getEarnListApi } from '@/api/proxy'
import { useMainStore } from '@/store/index.js'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const mainStore = useMainStore()
const { userInfo } = storeToRefs(userStore)
const { user } = unref(userInfo)
const { asset } = storeToRefs(userStore)
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const availableBalance = ref('') //  可用余额
const info = ref({})
const orderList = ref([])
function truncateDecimals(num) {
  return Math.trunc(num * 100) / 100
}
const getAllAmountEarn = computed(() => {
  return orderList.value.reduce((pre, cur) => {
    return pre + cur.amountEarn
  }, 0)
})
onMounted(() => {
  getUserInfoApi().then((res) => {
    info.value = res.data
  })
  getEarnListApi().then((res) => {
    orderList.value = res.rows
  })
  availableBalance.value =
    asset.value.filter((item) => {
      return item.symbol === 'usdt'
    })[0].availableAmount + ''
})
</script>
<style lang="scss" scoped>
.earnings {
  .main {
    padding: 10px;
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      &-left {
        &-name {
          font-size: 16px;
        }
        &-price {
          margin-top: 10px;
          font-size: 12px;
          color: var(--secondary-color);
          span {
            font-size: 16px;
          }
        }
      }
      &-right {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      padding: 15px;
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
      }
    }
    .list {
      margin-top: 15px;
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      padding: 10px;
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    }
  }
  .btn {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 80%;
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
}
</style>
