<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <div class="row" style="color: var(--primary-border)">
          <span>
            <template v-if="item.type == '61'">{{t("followInvestment")}}</template>
            <template v-if="item.type == '62'">{{t("followInvestmentCancel")}}</template>
            <template v-if="item.type == '63'">{{t("followInvestmentSettlement")}}</template>
            <template v-if="item.type == '64'">{{t("followInvestmentReturn")}}</template>
            <template v-if="item.type == '65'">{{t("followInvestmentLoss")}}</template>
          </span>
          <span>
            {{ priceFormat(item.amount) }}
          </span>
        </div>
        <div class="row" style="color: var(--secondary-color)">
          <span>{{ _timeFormat(item?.createTime) }}</span>
          <span>{{ t("accountBalance") }}{{ priceFormat(item?.afterAmount) }}</span>
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
import { priceFormat } from '@/utils/decimal'
import { _timeFormat } from '@/utils/public'
import { getBrokerList } from '@/api/trade'
const { t } = useI18n()
const rowList = ref([])
const getBrokerListFn = async () => {
  let res = await getBrokerList()
  console.log('res', res)
  rowList.value = res.rows
}
onMounted(() => {
  getBrokerListFn()
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
