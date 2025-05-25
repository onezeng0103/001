<template>
  <div class="mine">
    <div style="height: 44px">
      <div
        style="
          background: #000;
          border-bottom-color: rgb(238, 238, 238);
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
                color: #fff;
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>我的跟单</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: rgba(153, 153, 153, 1);
            "
          ></div>
        </div>
      </div>
    </div>
    <div class="mine-main">
      <div class="mine-main-info">
        <div class="mine-main-info-item">
          <div style="color: #fff; font-size: 14px">{{ profitInfo?.betAmount || 0 }}</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 12; margin-top: 5px">
            跟单总金额(USDT)
          </div>
        </div>
        <div class="mine-main-info-item">
          <div style="color: #fff; font-size: 14px">{{ profitInfo?.profitAndLoss || 0 }}</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 12; margin-top: 5px">
            已实现总盈亏(USDT)
          </div>
        </div>
        <div class="mine-main-info-item">
          <div style="color: #fff; font-size: 14px">{{ profitInfo?.profitRate || 0 }}</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 12; margin-top: 5px">
            总收益率(USDT)
          </div>
        </div>
      </div>
      <div class="mine-main-btn">
        <div class="btn" @click="router.push('/floworder/apply')">成为交易专家</div>
      </div>
      <div class="mine-main-list">
        <div class="mine-main-list-tab">
          <div
            class="mine-main-list-tab-item"
            :class="currentIndex === index ? 'active' : ''"
            v-for="(item, index) in list"
            :key="index"
            @click="handleClick(index)"
          >
            {{ item }}
          </div>
        </div>
        <template v-if="currentIndex == 0">
          <template v-if="traderList?.length > 0">
            <div class="mine-main-list-item" v-for="(item, index) in traderList" :key="index">
              <div class="mine-main-list-item-top">
                <div style="display: flex; align-items: center">
                  <div class="avatar">
                    <img src="../../assets/img/01.png" alt="" />
                  </div>
                  <div style="margin-left: 10px">
                    <div style="color: #fff; font-size: 14px">{{ item.traderName }}</div>
                    <div style="color: rgb(153, 153, 153); font-size: 12px">
                      跟单天数
                      <span style="color: #fff">{{ item.followDay }}</span>
                    </div>
                    <div style="color: rgb(153, 153, 153); font-size: 12px">
                      跟单方式
                      <span style="color: #fff">{{ returnFollowName(item.followType) }}</span>
                    </div>
                  </div>
                </div>
                <div class="mine-main-list-item-top-btn" @click="handleUpdate(item)">
                  修改跟单参数
                </div>
              </div>
              <div class="mine-main-list-item-info">
                <div style="color: rgb(153, 153, 153); font-size: 12px">
                  跟单总收益
                  <span style="color: #fff">{{ item.followAmount || '0.00' }} USD</span>
                </div>
                <div style="color: rgb(153, 153, 153); font-size: 12px; margin-top: 10px">
                  跟单时间
                  <span style="color: #fff">
                    {{ _timeFormat(item.createTime, 'MM/DD HH:mm', true) }}
                  </span>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <NoData />
          </template>
        </template>
        <template v-else>
          <template v-if="orderList?.length > 0"></template>
          <template v-else>
            <NoData />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { getMineProfitApi, postMineTraderApi, getMineOrderApi } from '@/api/follow'
import { _timeFormat } from '@/utils/public'
const { t } = useI18n()
const router = useRouter()
const list = ['我的交易员', '当前跟随', '历史跟单']
const currentIndex = ref(0)
const profitInfo = ref({})
const getMineProfit = () => {
  getMineProfitApi().then((res) => {
    profitInfo.value = res.data
  })
}
const handleClick = (index) => {
  currentIndex.value = index
  if (index != 0) {
    getMineOrder(index - 1)
  }
}
const traderList = ref([])

const postMineTrader = () => {
  postMineTraderApi().then((res) => {
    traderList.value = res.rows
  })
}
const returnFollowName = (index) => {
  switch (index) {
    case 0:
      return '固定比例'
    case 1:
      return '固定金额'
    default:
      return '交易员比例'
  }
}
const handleUpdate = (item) => {
  window.localStorage.setItem('updateTrader', JSON.stringify(item))
  router.push(`/floworder/confirm/${item.traderId}?type=update`)
}
const orderList = ref([])
const getMineOrder = async (value) => {
  let str = `isHistory=${value}`
  const res = await getMineOrderApi(str)
  orderList.value = res.rows
}
const handleToUpperCase = (value) => {
  return value.toUpperCase()
}
onMounted(() => {
  getMineProfit()
  postMineTrader()
})
</script>
<style lang="scss" scoped>
.mine {
  &-main {
    padding: 0 10px;
    &-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      padding: 20px 10px;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        margin-top: 30px;
        width: 80%;
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
    }
    &-list {
      margin-top: 15px;
      padding: 20px 10px;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      &-tab {
        display: flex;
        align-items: center;
        &-item {
          color: rgb(153, 153, 153);
          margin-left: 10px;
        }
        .active {
          color: rgb(186, 236, 87);
        }
      }
      &-item {
        margin-top: 15px;
        &-top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid rgb(153, 153, 153);
          .avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          &-btn {
            font-size: 12px;
            padding: 2px 5px;
            color: #000;
            background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
            border-radius: 14px;
          }
        }
        &-info {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
