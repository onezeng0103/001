<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div
        v-show="
          item.type == 12 ||
          item.type == 6 ||
          item.type == 15 ||
          item.type == 7 ||
          item.type == 14 ||
          item.type == 55
        "
        class="recharge-cell"
        v-for="(item, index) in rowList"
        :key="index"
      >
        <div class="row" style="color: var(--primary-border)">
          <span>
            <template v-if="item.type == 12">{{t('purchaseStaking')}}</template>
            <template v-if="item.type == 6">{{t("purchaseFinance")}}</template>
            <template v-if="item.type == 15">{{t("stakingProfit")}}</template>
            <template v-if="item.type == 7">{{t("financeProfit")}}</template>
            <template v-if="item.type == 14">{{t("stakingRedemption")}}</template>
            <template v-if="item.type == 55">{{t("financeRedemption")}}</template>
          </span>
          <span>
            +
            <template v-if="item.type == 12 || item.type == 6">-</template>
            <template v-else>-</template>
            {{ _numberWithCommas(item.amount) }}
          </span>
        </div>
        <div class="row" style="color: var(--secondary-color)">
          <span>{{ _timeFormat(item?.createTime) }}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <NoData />
    </template>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { _numberWithCommas, _timeFormat } from '@/utils/public'
import { getFinancialList } from '@/api/account'
const {t} = useI18n()
const rowList = ref([])
const purchasePledge = ref(0)
const pledgeIncome = ref(0)
const pledgeRedemption = ref(0)
const purchaseFinance = ref(0)
const financeIncome = ref(0)
const financeRedemption = ref(0)
const getFinanceListFun = () => {
  let str = 'pageNum=1&pageSize=100000'
  getFinancialList(str).then((res) => {
    rowList.value = res.rows
    // 初始化累加值
    let totalPledgePurchase = 0
    let totalPledgeIncome = 0
    let totalPledgeRedemption = 0
    let totalFinancePurchase = 0
    let totalFinanceIncome = 0
    let totalFinanceRedemption = 0
    rowList.value.reduce((acc, item) => {
      if (item.type == 12) {
        totalPledgePurchase += item.amount // 累加
      }
      if (item.type == 15) {
        totalPledgeIncome += item.amount // 累加
      }
      if (item.type == 14) {
        totalPledgeRedemption += item.amount // 累加
      }
      if (item.type == 6) {
        totalFinancePurchase += item.amount // 累加
      }
      if (item.type == 7) {
        totalFinanceIncome += item.amount // 累加
      }
      if (item.type == 55) {
        totalFinanceRedemption += item.amount // 累加
      }
      return acc // 返回累加器（虽然这里没有用到）
    }, 0)

    // 将累加结果赋值给对应的变量
    purchasePledge.value = totalPledgePurchase
    pledgeIncome.value = totalPledgeIncome
    pledgeRedemption.value = totalPledgeRedemption
    purchaseFinance.value = totalFinancePurchase
    financeIncome.value = totalFinanceIncome
    financeRedemption.value = totalFinanceRedemption
  })
}
onMounted(() => {
  getFinanceListFun()
})
</script>
<style lang="scss" scoped>
.recharge {
  &-cell {
    margin-bottom: 15px;
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
