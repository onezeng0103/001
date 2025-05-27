<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <div class="row" style="color: var(--primary-border)">
          <span>
            <template v-if="item.type == '21'">{{t("spotTrade")}}+</template>
            <template v-if="item.type == '22'">{{t("spotTrade")}}-</template>
          </span>
          <span>
            {{ priceFormat(item.amount) }}
          </span>
        </div>
        <div class="row" style="color: var(--secondary-color)">
          <span>{{ _timeFormat(item?.createTime) }}</span>
          <span>{{t("accountBalance")}}{{ priceFormat(item?.afterAmount) }}</span>
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
import { getCurrencyList } from '@/api/trade'
const { t } = useI18n()
const rowList = ref([])
const getCurrencyListFn = async () => {
  let res = await getCurrencyList()
  rowList.value = res.rows
}
onMounted(() => {
  getCurrencyListFn()
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
