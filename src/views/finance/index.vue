<script setup>
import { useRouter } from 'vue-router'
import { personalIncome, getFinancial } from '@/api/financial/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
          background: var(--primary-background);
          border-bottom-color: var(--primary-color);
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
              <span>{{ t('financial') }}</span>
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
        <div>{{ t('totalInvestmentValue') }}</div>
        <div style="margin-top: 2px">{{ headerObj.sumAmount }}</div>
        <div style="margin-top: 10px">{{ t('cumulativeEarnings') }}</div>
        <div style="margin-top: 2px">{{ headerObj.sumEarn }}</div>
      </div>
      <div>
        <div>{{ t('dailyEarnings') }}</div>
        <div style="margin-top: 2px">{{ headerObj.commission }}</div>
        <div style="margin-top: 10px">{{ t('position') }}</div>
        <div style="margin-top: 2px">{{ headerObj.position }}</div>
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
            <samp class="label">{{ t('returnRate') }} {{ item.avgRate }}%</samp>
            <samp class="label">{{ t('lockDays') }} {{ item.days }}</samp>
          </div>
        </div>
        <div class="bt" @click="router.push(`/finance/subscribe/${item.id}`)">{{ t('applyForFinance') }}</div>
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
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .bt {
        padding: 8px 18px;
        background: linear-gradient(
          306deg,
          var(--primary-border) 0%,
          var(--secondary-background) 100%
        );
        border-radius: 15px 15px 15px 15px;
        font-weight: 400;
        font-size: 10px;
        color: var(--regular-color);
      }

      .title {
        font-size: 14px;
        color: var(--primary-color);
        //margin-bottom: 10px;
      }
      .label {
        font-weight: 400;
        font-size: 10px;
        color: var(--secondary-color);
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
