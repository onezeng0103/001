<script setup>
import { useRouter, useRoute } from 'vue-router'
import { investmentList } from '@/api/financial'
import { timeOfreceipt } from '@/utils/filters'
import { priceFormat } from '@/utils/decimal'
import { showToast } from 'vant'
import { getPledgeOrderList, redemption, getPledgeProductList } from '@/api/pledge'
import { _timeFormat } from '@/utils/public'

const list1 = ref([])
const getList1 = async () => {
  const res = await getPledgeOrderList()
  list1.value = res?.rows
}
const productList = ref([])
const getPledgeProductListFn = async () => {
  const res = await getPledgeProductList()
  if (res.code == '200') {
    productList.value = res.rows
  }
}
const showBottom = ref(false)
const info = ref({})
const submit = (value) => {
  info.value = value
  info.value.defaultOdds = productList.value.find((item) => item.id == value.planId).defaultOdds
  showBottom.value = true
}
const handleClick = () => {
  let params = { id: info.value.id }
  redemption(params).then((res) => {
    if (res.code == '200') {
      showToast('赎回成功')
      setTimeout(() => {
        showBottom.value = false
        getList()
      }, 500)
    } else {
      showToast(res.msg)
    }
  })
}

const list = ref([])
const getList = async () => {
  const res = await investmentList(1, 100000)
  list.value = res?.rows
}
const investmentStatus = (type) => {
  switch (type) {
    case 0:
      // 持仓中
      return {
        color: '#2654FF',
        name: '持仓中'
      }
    case 1:
      // 已结算
      return {
        color: '#838B9C',
        name: '已结算'
      }
    case 2:
      // 已赎回
      return {
        color: '#17AC74',
        name: '已赎回'
      }
    default:
      break
  }
}
onMounted(() => {
  getList()
  getList1()
  getPledgeProductListFn()
})
const router = useRouter()
const route = useRoute()
const type = ref(route.query.type || 1)
</script>

<template>
  <div class="eaorders">
    <div style="height: 44px">
      <div
        style="
          background: #000;
          border-bottom-color: rgb(238, 238, 238);
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
                color: #fff;
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>理财记录</span>
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

    <div style="padding: 10px">
      <div class="eaorders-title">
        <div
          class="t"
          :style="{
            color: type == 1 ? '#baec57' : '',
            borderBlockEnd: type == 1 ? '1px solid rgb(186, 236, 87)' : ''
          }"
          style="margin-right: 10px"
          @click="type = 1"
        >
          奔富理财
        </div>
        <div
          class="t"
          :style="{
            color: type == 2 ? '#baec57' : '',
            borderBlockEnd: type == 2 ? '1px solid rgb(186, 236, 87)' : ''
          }"
          @click="type = 2"
        >
          质押生息
        </div>
      </div>

      <template v-if="type == 1">
        <div class="details" v-for="(item, index) in list" :key="index">
          <div style="font-size: 14px; margin-bottom: 10px; display: flex; align-items: center">
            <img
              style="width: 28px; margin-right: 10px"
              src="../../../src/assets/img/coin-JyvGAUty.png"
              alt=""
            />
            {{ item.planTitle }}
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">锁仓天数(天)</div>
            <div style="font-size: 14px; color: #ffffff">{{ item.days }}</div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">日收益率</div>
            <div style="font-size: 14px; color: #ffffff">{{ item.avgRate }}%</div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">
              投入金额({{ item.coin ? item.coin.toUpperCase() : '' }})
            </div>
            <div style="font-size: 14px; color: #ffffff">{{ item.amount }}</div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">
              预估收益({{ item.coin ? item.coin.toUpperCase() : '' }})
            </div>
            <div style="font-size: 14px; color: #ffffff">
              {{ priceFormat((item.amount * item.days * 0.05) / 100, 6) }}
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">到账时间</div>
            <div style="font-size: 14px; color: #ffffff">
              {{
                timeOfreceipt(item.settlementType, item.days, item.params.createTime) === '每日结算'
                  ? '每日结算'
                  : timeOfreceipt(item.settlementType, item.days, item.params.createTime)
              }}
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <div style="font-size: 13px; color: #a0a0a0">状态</div>
            <div style="font-size: 14px; color: #ffffff">{{ investmentStatus(item.status)?.name }}</div>
          </div>
        </div>
      </template>

      <template v-if="type == 2">
        <div class="details" v-for="(item, index) in list1" :key="index">
          <div style="font-size: 14px; margin-bottom: 10px;display: flex; align-items: center;justify-content: space-between">
            <div style="display: flex; align-items: center">
              <div>
                <img
                  style="width: 28px;height: 28px; margin-right: 10px"
                  src="../../../src/assets/img/usdt.png"
                  alt=""
                />
              </div>
              <div>{{ item.planTitle }}</div>
            </div>
            <div class="bt" @click="submit(item)">赎回</div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">投注金额</div>
            <div style="font-size: 14px; color: #ffffff">{{ priceFormat(item.amount) }}</div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">状态</div>
            <div style="font-size: 14px; color: #ffffff">
              <template v-if="item.status == 0">进行中</template>
              <template v-if="item.status == 1">已完成</template>
              <template v-if="item.status == 2">已赎回</template>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">
              日收益率
            </div>
            <div style="font-size: 14px; color: #ffffff">{{ item.minOdds }}%~{{ item.maxOdds }}%</div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">
              周期
            </div>
            <div style="font-size: 14px; color: #ffffff">
              {{ item.days }}天
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0;
            "
          >
            <div style="font-size: 13px; color: #a0a0a0">开始日期</div>
            <div style="font-size: 14px; color: #ffffff">
              {{ _timeFormat(item.params?.createTime) }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eaorders {
  .bt {
    padding: 8px 18px;
    background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
    border-radius: 15px 15px 15px 15px;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
  }
  .details {
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.1);
    margin: 15px 0;
  }

  .eaorders-title {
    color: #a0a0a0;
    display: flex;
    align-items: center;
    font-weight: 900 !important;
    font-size: 14px;

    .t {
      padding: 10px 5px;
    }
  }
}
</style>
