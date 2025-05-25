<template>
  <div class="recharge">
    <template v-if="rowList.length > 0">
      <div class="recharge-cell" v-for="(item, index) in rowList" :key="index">
        <template v-if="item.type == 0">
          <div class="row" style="color: #baec57">
            <span>提现</span>
            <span>- {{ priceFormat(item.amount) }}</span>
          </div>
          <div
            class="row"
            v-if="item?.remark && item.remark != '' && item.remark != null"
            style="color: rgb(153, 153, 153)"
          >
            <span>备注</span>
            <span>{{ item.remark }}</span>
          </div>
          <div class="row" style="color: rgb(153, 153, 153)">
            <span>{{ _timeFormat(item?.params?.createTime) }}</span>
            <span>
              <template v-if="item?.status == 0">审核中</template>
              <template v-if="item?.status == 1">成功</template>
              <template v-if="item?.status == 2">失败</template>
            </span>
          </div>
        </template>
        <template v-if="item.type == 1 && item.giveType == 0">
          <div class="row" style="color: #baec57">
            <span>系统扣款</span>
            <span>- {{ priceFormat(item.amount) }}</span>
          </div>
          <div
            class="row"
            v-if="item?.remark && item.remark != '' && item.remark != null"
            style="color: rgb(153, 153, 153)"
          >
            <span>备注</span>
            <span>{{ item.remark }}</span>
          </div>
          <div class="row" style="color: rgb(153, 153, 153)">
            <span>{{ _timeFormat(item?.params?.createTime) }}</span>
            <span>
              <template v-if="item?.status == 0">审核中</template>
              <template v-if="item?.status == 1">成功</template>
              <template v-if="item?.status == 2">失败</template>
            </span>
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
import { getWithdrawList, getBonsList } from '@/api/account'
const rowList = ref([])
const getWithdrawListFun = async () => {
  let str = 'pageNum=1&pageSize=100000'
  let res1 = await getWithdrawList(str)
  let arr1 = []
  if (res1.code == 200) {
    arr1 = res1.rows.map((item) => ({
      ...item,
      type: 0
    }))
  } else {
    arr1 = []
  }
  let res2 = await getBonsList(str)
  console.log(res2)
  let arr2 = [
    ...res2.rows.map((item) => ({
      ...item,
      type: 1
    })),
    ...arr1
  ]
    .sort((a, b) => {
      return new Date(a.params.createTime) - new Date(b.params.createTime)
    })
    .filter((item) => {
      return item.giveType == 1 && item.async == 0
    })
  rowList.value = [...arr1, ...arr2]
}
onMounted(() => {
  getWithdrawListFun()
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
