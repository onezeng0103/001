<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <div class="row" style="color: #baec57">
          <span>
            <template v-if="item.type == '61'">代投投资</template>
            <template v-if="item.type == '62'">代投投资取消</template>
            <template v-if="item.type == '63'">代投投资结算</template>
            <template v-if="item.type == '64'">代投投资返还</template>
            <template v-if="item.type == '65'">代投亏损弥补</template>
          </span>
          <span>
            {{ priceFormat(item.amount) }}
          </span>
        </div>
        <div class="row" style="color: rgb(153, 153, 153)">
          <span>{{ _timeFormat(item?.createTime) }}</span>
          <span>账后余额{{ priceFormat(item?.afterAmount) }}</span>
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
