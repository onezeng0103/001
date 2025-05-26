<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <div class="row" style="color: var(--primary-border)">
          <span>
            <template v-if="item.type == '0'">下单冻结-</template>
            <template v-if="item.type == '0'">亏损-</template>
            <template v-if="item.type == '0'">获利+</template>
            <template v-if="item.type == '0'">获利冻结+</template>
          </span>
          <span>
            {{ priceFormat(item.amount) }}
          </span>
        </div>
        <div class="row" style="color: var(--secondary-color)">
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
import { getOptionList } from '@/api/trade'
const { t } = useI18n()
const rowList = ref([])
const getOptionListFn = async () => {
  let res = await getOptionList()
  rowList.value = res.rows
}
onMounted(() => {
  getOptionListFn()
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
