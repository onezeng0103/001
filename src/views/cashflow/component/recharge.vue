<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <template v-if="item.type == 0">
          <div class="row" style="color: var(--primary-border)">
            <span>充值</span>
            <span>+ {{ priceFormat(item.amount) }}</span>
          </div>
          <div
            class="row"
            v-if="item?.remark && item.remark != ''"
            style="color: var(--secondary-color)"
          >
            <span>备注</span>
            <span>{{ item.remark }}</span>
          </div>
          <div class="row" style="color: var(--secondary-color)">
            <span>{{ _timeFormat(item?.params?.createTime) }}</span>
            <span>
              <template v-if="item?.status == 0">审核中</template>
              <template v-if="item?.status == 1">成功</template>
              <template v-if="item?.status == 2">失败</template>
            </span>
          </div>
        </template>
        <template v-if="item.type == 1 && item.giveType == 0">
          <div class="row" style="color: var(--primary-border)">
            <span>系统赠送</span>
            <span>+ {{ priceFormat(item.amount) }}</span>
          </div>
          <div
            class="row"
            v-if="item?.remark && item.remark != ''"
            style="color: var(--secondary-color)"
          >
            <span>备注</span>
            <span>{{ item.remark }}</span>
          </div>
          <div class="row" style="color: var(--secondary-color)">
            <span>{{ _timeFormat(item?.params?.createTime) }}</span>
            <span>成功</span>
          </div>
        </template>
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
import { getRechargeList } from '@/api/account'
const rowList = ref([])
const getRechargeListFun = async () => {
  let str = 'pageNum=1&pageSize=100000'
  let res = await getRechargeList(str)
  if (res.code == 200) {
    rowList = res.rows
      .map((item) => ({
        ...item,
        type: 0
      }))
      .sort((a, b) => {
        return new Date(b.params.createTime) - new Date(a.params.createTime)
      })
  } else {
    rowList = []
  }
}
onMounted(() => {
  getRechargeListFun()
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
