<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useMainStore } from '@/store/index'
import { TronWeb } from 'tronweb'
import { updateUserWithdrawAddress, getWithdrawAddressList } from '@/api/account'
import { filterCoin2 } from '@/utils/public.js'
import { dispatchCustomEvent } from '@/utils'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const mainStore = useMainStore()
const formData = ref({
  type: '',
  address: '',
  title: ''
})
const type = ref(0)
const addressList = ref([])
const getAddressList = () => {
  getWithdrawAddressList().then((res) => {
    addressList.value = res.data
    if (res.data.length > 0) {
      type.value = 1
    } else {
      type.value = 0
    }
    console.log(type.value)
  })
}
const handleKeFu = () => {
  dispatchCustomEvent('event_serviceChange')
}
const coinList = computed(() => {
  let list = []
  mainStore.getWithdrawList.forEach((item, index) => {
    // status:0关闭，1开启
    if (item.status == '1') {
      let obj = {}
      obj['type'] = 1 //提现
      obj['ratio'] = item.ratio || '' //手续费
      obj['fee'] = item.fee //固定手续费
      // type:0数据货币，1银行卡
      if (item.type == 0) {
        obj['icon'] = item.rechargeType
        obj['title'] = item.rechargeName
      } else {
        obj['icon'] = 'card'
        // 银行卡提现
        obj['title'] = t('withdrawCard')
        obj['card'] = filterCoin2(item.rechargeType).toLocaleUpperCase()
      }

      list.push(obj)
    }
  })
  return list
})
const showBottom = ref(false)
const close = (value) => {
  formData.value.type = value.icon
  formData.value.title = value.title
  formData.value.address = value.card
  showBottom.value = false
}
const submit = () => {
  if (!formData.value.type) {
    showToast(t('pleaseSelectCoin'))
    return
  }
  if (!TronWeb.isAddress(formData.value.address)) {
    showToast(t('pleaseInputValidAddress'))
    return
  }
  updateUserWithdrawAddress({
    address: formData.value.address,
    type: formData.value.type
  }).then((res) => {
    if (res.code == '200') {
      showToast(res.msg)
      router.push('/')
    } else {
      showToast(res.msg)
    }
  })
}
onMounted(() => {
  getAddressList()
})
</script>

<template>
  <div>
    <div style="height: 44px">
      <div
        style="
          background: var(--primary-background);
          border-bottom-color: var(--regular-border);
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
                  fill="var(--primary-color)"
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
              <span>{{t('bindWithdrawAddress')}}</span>
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

    <div style="padding: 15px 10px">
      <template v-if="type == 0">
        <div style="font-size: 14px">{{t('coinType1')}}</div>
        <div class="optionNationality" @click="showBottom = true">
          <span class="optionNationality-text">
            {{ formData.title }}
          </span>
          <div>
            <svg
              t="1747924804750"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9044"
              width="12"
              height="12"
            >
              <path
                d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432c9.6-12.8 9.6-25.6 0-35.2z"
                fill="var(--primary-border)"
                p-id="9045"
              ></path>
            </svg>
          </div>
        </div>

        <div style="font-size: 14px; margin-top: 20px">{{t('coinType1')}}</div>
        <div class="optionNationality">
          <div class="optionNationality-text" style="flex: 1">
            <input
              v-model.trim="formData.address"
              type="text"
              maxlength="140"
              enterkeyhint="done"
              :placeholder="t('pleaseInput')"
              class="uni-input-input"
              autocomplete="off"
              style="width: 100%"
            />
          </div>
        </div>
        <div class="btn">
          <div class="btn1" @click="submit">{{t('confirm')}}</div>
        </div>
      </template>
      <template v-else>
        <div
          style="
            background-color: var(--regular-background);
            padding: 30px 10px;
            border-radius: 8px;
          "
        >
          <div>{{t('coinType')}}：{{ addressList[0].symbol?.toUpperCase() }}</div>
          <div style="margin-top: 10px">{{t('address')}}：{{ addressList[0].address }}</div>
        </div>
        <div class="btn">
          <div class="btn1" @click="handleKeFu">{{t('pleaseContactOnlineCustomerService')}}</div>
        </div>
      </template>
    </div>

    <van-popup v-model:show="showBottom" position="bottom">
      <div style="padding-bottom: 8px; background-color: var(--placeholder-color)">
        <template v-for="item in coinList" :key="item.type" @click="close(item)">
          <div class="item" @click="close(item)">{{ item.title }}</div>
        </template>
      </div>

      <div class="item" @click="showBottom = false">{{t('cancel1')}}</div>
    </van-popup>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn1 {
    width: 80%;
    margin: 40px 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    color: var(--primary-background);
    text-align: left;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
    border-radius: 20px 20px 20px 20px;
  }
}
.item {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
  font-size: 14px;
  background-color: var(--primary-color);
}

.optionNationality {
  background: var(--regular-background);
  border-radius: 8px 8px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 8px;

  .optionNationality-text {
    font-weight: 400;
    font-size: 14px;
    color: var(--primary-color);
  }
}
</style>
