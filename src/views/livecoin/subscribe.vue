<script setup>
import { showToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { pledgeSubmit } from '@/api/pledge/index'
import { priceFormat } from '@/utils/decimal.js'
import { useUserStore } from '@/store/user/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const data = reactive(JSON.parse(decodeURI(route.query.data)))
const info = ref({})
const limit = ref('')
const userStore = useUserStore()
const { asset } = storeToRefs(userStore)

const amount = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    console.log(item)
    if (item.type == 2) {
      list.push(getDetail(item))
    }
  })
  let sum = 0
  for (let i = 0; i < list.length; i++) {
    sum += Number(list[i].zhehe)
  }
  return priceFormat(sum)
})
const getDetail = (item) => {
  let obj = {}
  obj['keyong'] = priceFormat(item.availableAmount)
  obj['zhanyong'] = priceFormat(item.occupiedAmount)

  obj['zhehe'] = priceFormat(item.exchageAmount)
  if (item.symbol == 'usdt') {
    obj['icon'] = 'usdt'
    obj['loge'] = item.loge
    obj['title'] = 'USDT'
  } else {
    obj['loge'] = item.loge
    obj['title'] = item.symbol?.replace('usdt', '').trim().toLocaleUpperCase()
    obj['icon'] = item.symbol?.replace('usdt', '').trim()
  }
  return obj
}
const submit = async () => {
  if (!Number(limit.value)) {
    return
  }
  let params = { planId: data.id, amount: limit.value }
  if (limit.value == '' || limit.value > data.limitMax || limit.value < data.limitMin) {
    showToast(t('purchaseAmountError'))
    return
  }
  pledgeSubmit(params).then((res) => {
    if (res.code == '200') {
      showToast(t('purchaseSuccess'))
      setTimeout(() => {
        router.push('/livecoin/eaorders?type=2')
      }, 500)
    } else {
      showToast(res.msg)
    }
  })
}
</script>

<template>
  <div class="subscribe">
    <div style="height: 44px">
      <div
        style="
          background: var(--primary-background);
          border-bottom-color: var(--placeholder-color);
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
                color: var(--primary-color);
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>{{ t('subscribe') }} {{ data?.title }}</span>
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
        <div style="font-size: 13px; color: var(--secondary-color)">{{ t('limit') }}</div>
        <div style="font-size: 14px; color: var(--primary-color)">
          {{ data.limitMin }}~{{ data.limitMax }}
        </div>
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
        <div style="font-size: 13px; color: var(--secondary-color)">{{ t('dailyYieldRate') }}</div>
        <div style="font-size: 14px; color: var(--primary-color)">
          {{ data.minOdds }}%~{{ data.maxOdds }}%
        </div>
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
        <div style="font-size: 13px; color: var(--secondary-color)">
          {{ t('cycle') }}({{ t('days') }})
        </div>
        <div style="font-size: 14px; color: var(--primary-color)">{{ data.days }}</div>
      </div>
      <div class="ipt">
        <input
          v-model="limit"
          type="number"
          maxlength="140"
          step="0.000000000000000001"
          :placeholder="`${t('minimumSubscribe')}${data?.limitMin}`"
          enterkeyhint="done"
          pattern="[0-9]*"
          class="uni-input-input"
          autocomplete="off"
          style="flex: 1"
        />
      </div>
      <div class="details">
        <div
          style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0"
        >
          <div style="font-size: 13px; color: var(--secondary-color)">{{ t('availableBalance') }}</div>
          <div style="font-size: 14px; color: var(--primary-color)">
            {{ priceFormat(amount) }} USDT
          </div>
        </div>
        <div
          style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0"
        >
          <div style="font-size: 13px; color: var(--secondary-color)">{{ t('purchaseLimit') }}</div>
          <div style="font-size: 14px; color: var(--primary-color)">{{ data.timeLimit }}</div>
        </div>
      </div>
    </div>

    <div @click="submit" class="btn" :class="limit ? 'zf' : ''">{{ t('pay') }}</div>
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
    color: var(--secondary-color);
    text-align: left;
    font-style: normal;
    text-transform: none;
    background-color: var(--regular-background);
    border-radius: 20px 20px 20px 20px;
  }
  .zf {
    color: var(--primary-background);
    background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
  }
  .details {
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    background: var(--regular-background);
    margin-bottom: 15px;
  }
  .ipt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding: 0 15px;
    box-sizing: border-box;
    height: 39px !important;
    background: var(--regular-background);
    margin-bottom: 10px;
  }
}
</style>
