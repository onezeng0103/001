<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <div class="row" style="color: var(--primary-border)">
          <span>{{ t("loan") }}</span>
          <span>{{ priceFormat(item.amount) }}</span>
        </div>
        <div class="row" style="color: var(--secondary-color)">
          <span>{{ _timeFormat(item?.params?.createTime) }}</span>
          <span>
            <template v-if="item?.status == 0">{{t("audit")}}</template>
            <template v-if="item?.status == 1">{{ t("success") }}</template>
            <template v-if="item?.status == 2">{{t("failed")}}</template>
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <NoData />
    </template>
  </div>
</template>
<script setup>
import { priceFormat } from '@/utils/decimal'
import { _timeFormat } from '@/utils/public'
import { getLoanOrderList } from '@/api/loan'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const rowList = ref([])
const getLoanListFun = () => {
  let str = 'pageNum=1&pageSize=100000'
  getLoanOrderList(str).then((res) => {
    rowList.value = res.rows
  })
}
onMounted(() => {
  getLoanListFun()
})
</script>
<style lang="scss" scope>
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
