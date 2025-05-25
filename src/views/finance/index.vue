<script setup>
import { useRouter } from 'vue-router'
import { personalIncome, getFinancial } from '@/api/financial/index'
const router = useRouter()
const headerObj = ref({
  sumAmount: 0,
  commission: 0,
  sumEarn: 0,
  position: 0
})
const allList = async () => {
  try {
    const res = await personalIncome()
    if (res.code === 200) {
      headerObj.value = res.data
    }
  } catch (error) {
    console.log(error)
  }
}
const financialList = ref([])
const financialListFn = async () => {
  try {
    let data = {
      classify: ''
    }
    const res = await getFinancial(data)
    financialList.value = res.rows
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  allList()
  financialListFn()
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
              <span>理财</span>
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
        <div>总投入价值（USDT）</div>
        <div>{{ headerObj.sumAmount }}</div>
        <div>累计收益</div>
        <div>{{ headerObj.sumEarn }}</div>
      </div>
      <div>
        <div>当日赚取奖励（USDT）</div>
        <div>{{ headerObj.commission }}</div>
        <div>持仓数量（个）</div>
        <div>{{ headerObj.position }}</div>
      </div>
    </div>

    <div class="forget-list">
      <div class="forget-list-item" v-for="(item, index) in financialList" :key="index">
        <div style="display: flex; align-items: center">
          <img
            src="../../assets/img/coin-JyvGAUty.png"
            alt=""
            style="width: 30px; height: 30px; margin-right: 10px"
          />
          <div>
            <div class="title">{{ item.title }}</div>
            <samp class="label">回报率{{ item.avgRate }}%</samp>
            <samp class="label">锁仓天数{{ item.days }}</samp>
          </div>
        </div>
        <div class="bt" @click="router.push(`/finance/subscribe/${item.id}`)">申请理财</div>
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

      .bt {
        padding: 8px 18px;
        background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
        border-radius: 15px 15px 15px 15px;
        font-weight: 400;
        font-size: 10px;
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
