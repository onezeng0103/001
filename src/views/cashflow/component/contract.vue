<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <div class="row" style="color: #baec57">
          <span>
            <template v-if="item.type == '0'">开仓手续费</template>
            <template v-if="item.type == '0'">保证金冻结</template>
            <template v-if="item.type == '0'">保证金解锁</template>
            <template v-if="item.type == '0'">平仓盈亏</template>
            <template v-if="item.type == '0'">合约交易调整保证金</template>
            <template v-if="item.type == '0'">合约交易强平</template>
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
import { getContractList } from '@/api/trade'
const { t } = useI18n()
const rowList = ref([])
const getContractListFn = async () => {
  let res = await getContractList()
  rowList.value = res.rows
}
onMounted(() => {
  getContractListFn()
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
