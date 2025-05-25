<script setup>
import { useRouter } from 'vue-router'
import { getPledgeProductList, getPledgeShowInfo } from '@/api/pledge/index'
import { priceFormat } from '@/utils/decimal.js'

const router = useRouter()
const showInfo = ref({})
const allList = async () => {
  try {
    const res = await getPledgeShowInfo()
    if (res.code === 200) {
      showInfo.value = res.data
    }
  } catch (error) {
    console.log(error)
  }
}
const productList = ref([])
const getPledgeProductListFn = async () => {
  const res = await getPledgeProductList()
  if (res.code == '200') {
    productList.value = res.rows
  }
}
const toView = (item) => {
  router.push({
    path: '/livecoin/subscribe',
    query: { data: encodeURI(JSON.stringify(item)) }
  })
}
onMounted(() => {
  allList()
  getPledgeProductListFn()
})
</script>

<template>
  <div class="forget">
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
                color: #fff;
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>质押生息</span>
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

    <div class="forget-top">
      <div>
        <div>正在托管</div>
        <div style="margin-top: 2px">{{ showInfo.amount || 0 }}</div>
        <div style="margin-top: 10px">今日收益</div>
        <div style="margin-top: 2px">
          {{
            showInfo?.todayProfit
              ? String(showInfo.todayProfit).indexOf('.') == -1
                ? showInfo.todayProfit.toFixed(2)
                : showInfo.todayProfit
              : '0.00'
          }}
        </div>
      </div>
      <div>
        <div>委托订单</div>
        <div style="margin-top: 2px">{{ showInfo.orderNum || 0 }}</div>
        <div style="margin-top: 10px">累计收益</div>
        <div style="margin-top: 2px">{{ priceFormat(showInfo.profitMoney) || 0 }}</div>
      </div>
    </div>

    <div class="forget-list">
      <div class="forget-list-item" v-for="(item, index) in productList" :key="index">
        <div style="display: flex; align-items: center">
          <!--          <img-->
          <!--            src="../../assets/img/coin-JyvGAUty.png"-->
          <!--            alt=""-->
          <!--            style="width: 30px; height: 30px; margin-right: 10px"-->
          <!--          />-->
          <div>
            <div class="title">{{ item.title }}</div>
            <samp class="label">回报率{{ item.minOdds }}%~{{ item.maxOdds }}%</samp>
          </div>
        </div>
        <div class="bt" @click="toView(item)">购买</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.forget {
  padding: 10px;

  .forget-list {
    margin-top: 30px;

    .forget-list-item {
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .bt {
        padding: 8px 18px;
        background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
        border-radius: 15px 15px 15px 15px;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
      }

      .title {
        font-size: 14px;
        color: #ffffff;
        //margin-bottom: 10px;
      }

      .label {
        font-weight: 400;
        font-size: 10px;
        color: #999999;
        margin-right: 15px;
      }
    }
  }

  .forget-top {
    padding: 15px 15px;
    border-radius: 4px;
    margin-top: 15px;
    background-color: #0277ff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
