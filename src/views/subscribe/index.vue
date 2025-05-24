<script setup>
import { showToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { financialDetail, financialSubmit } from '@/api/financial/index'

const router = useRouter()
const route = useRoute()
const info = ref({})
const getDetail = async () => {
  const res = await financialDetail(route.params.id)
  info.value = res.data
}
const limit = ref('')
const submit = async () => {
  if (!Number(limit.value)) {
    return
  }
  console.log(Number(limit.value))
  console.log(info.value?.limitMin)
  if (Number(limit.value) < info.value?.limitMin) {
    return showToast(`最少可购买${info.value?.limitMin}`)
  }

  if (Number(limit.value) > info.value?.limitMax) {
    return showToast(`最多可购买${info.value?.limitMax}`)
  }
  let regNum = /^\d+(\.\d{1,4})?$/
  if (!regNum.test(limit.value)) {
    return showToast('最多输入小数点后四位')
  }
  const res = await financialSubmit(route.params.id, limit.value, info.value?.days)
  if (res.code === 200) {
    router.push('/livecoin/eaorders')
  } else {
    showToast(res.msg)
  }
}
onMounted(() => {
  getDetail()
})
</script>

<template>
  <div class="subscribe">
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
              <span>申购 {{ info?.title }}</span>
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

    <div style="padding: 20px 10px 0">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 30px;
          margin: 10px 0 5px;
        "
      >
        <div style="font-size: 13px; color: #a0a0a0">平均收益</div>
        <div style="font-size: 14px; color: #ffffff">{{ info?.avgRate }}%</div>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 30px;
          margin: 10px 0 5px;
        "
      >
        <div style="font-size: 13px; color: #a0a0a0">项目周期(天)</div>
        <div style="font-size: 14px; color: #ffffff">{{ info?.days }}</div>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 30px;
          margin: 10px 0 5px;
        "
      >
        <div style="font-size: 13px; color: #a0a0a0">起头金额({{info.coin ? info.coin.toUpperCase() : '' }})</div>
        <div style="font-size: 14px; color: #ffffff">{{ info?.limitMin }}</div>
      </div>
      <div style="font-size: 13px; color: #a0a0a0; margin: 10px 0 10px">申购金额</div>
      <div class="ipt">
        <input
          v-model="limit"
          type="number"
          maxlength="140"
          step="0.000000000000000001"
          :placeholder="`最低参投${info?.limitMin}${info.coin ? info.coin.toUpperCase() : ''}`"
          enterkeyhint="done"
          pattern="[0-9]*"
          class="uni-input-input"
          autocomplete="off"
          style="flex: 1"
        />
        <div>{{ info.coin ? info.coin.toUpperCase() : '' }}</div>
      </div>
      <div class="details">
        <div style="font-size: 14px; color: #a0a0a0;margin-bottom: 10px">产品详情</div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin: 8px 0;">
          <div style="font-size: 13px; color: #a0a0a0">项目名称</div>
          <div style="font-size: 14px; color: #ffffff">{{ info?.title }}</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin: 8px 0;">
          <div style="font-size: 13px; color: #a0a0a0">项目进度</div>
          <div style="font-size: 14px; color: #ffffff">{{ info?.process }}</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin: 8px 0;">
          <div style="font-size: 13px; color: #a0a0a0">项目总额</div>
          <div style="font-size: 14px; color: #ffffff">{{ info?.totalInvestAmount }}&nbsp;{{ info?.coin }}</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin: 8px 0;">
          <div style="font-size: 13px; color: #a0a0a0">剩余金额</div>
          <div style="font-size: 14px; color: #ffffff">{{ info?.remainAmount }}&nbsp;{{ info?.coin }}</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin: 8px 0;">
          <div style="font-size: 13px; color: #a0a0a0">限头次数</div>
          <div style="font-size: 14px; color: #ffffff">{{ Number(info?.timeLimit) ? Number(info?.timeLimit) : '不限购' }}</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;">
          <div style="font-size: 13px; color: #a0a0a0">平均收益率</div>
          <div style="font-size: 14px; color: #ffffff">{{ info?.avgRate }}%</div>
        </div>
      </div>

      <div class="details">
        <div style="font-size: 14px; color: #a0a0a0;margin-bottom: 5px">基金介绍</div>
        <div style="margin-bottom: 10px">
          <div v-if="info?.prodectIntroduction" style="color: #7a7a7a">
            {{ info?.prodectIntroduction }}
          </div>
          <div v-else style="color: #7a7a7a">
            暂无介绍
          </div>
        </div>
        <div style="font-size: 14px; color: #a0a0a0;margin-bottom: 5px">产品规则</div>
        <div style="margin-bottom: 10px">
          <div v-if="info?.problem" style="color: #7a7a7a">
            {{ info?.problem }}
          </div>
          <div v-else style="color: #7a7a7a">
            暂无介绍
          </div>
        </div>
      </div>
    </div>

    <div @click="submit" class="btn" :class="limit ? 'zf' : ''">支付</div>
  </div>
</template>

<style scoped lang="scss">
.subscribe {
  padding-bottom: 10px;
  .btn {
    margin: 0 39px 30px 39px;
    padding: 11px 123px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    color: #999999;
    text-align: left;
    font-style: normal;
    text-transform: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px 20px 20px 20px;
  }
  .zf{
    color: #000000;
    background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
  }
  .details{
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    background: rgba(255,255,255,0.1);
    margin-bottom: 15px;
  }
  .ipt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding:0 15px;
    box-sizing: border-box;
    height: 39px !important;
    background: rgba(255,255,255,0.2);
    margin-bottom: 10px;
  }
}
</style>
