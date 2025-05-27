<script setup>
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/index.js'
import { useUserStore } from '@/store/user'
import { filterCoin2 } from '@/utils/public'
import { withdrawSubmit, getWithdrawAddressList } from '@/api/account'
import { debounce } from 'lodash'
import { emailCode, mobileCode } from '@/api/user'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const mainStore = useMainStore()
const showCode = computed(() => {
  return mainStore?.settingConfig?.WITHDRAWAL_SETTING?.checkCode || false
})
const { t } = useI18n()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const showBottom = ref(false)
const type = ref(1)
const isPwd = ref(true)
const info = ref('')
const allAmount = ref()
const { asset } = storeToRefs(userStore)
const amount = computed(() => {
  let data = 0
  //查询余额
  for (let i = 0; i < asset.value.length; i++) {
    // 币种提现
    if (asset.value[i].type == 1 && filterCoin2(asset.value[i].symbol) == info.value?.icon) {
      data = asset.value[i].availableAmount
    }
  }
  return data
})
const address = ref()
const password = ref()
const allNum = () => {
  allAmount.value = amount.value
}
const handleSelectCoin = () => {
  type.value = 2
  showBottom.value = true
}
// 倒计时
const code = ref('')
const time = ref(0)
const flag = ref(false)
const loading = ref(false)
const getCode = debounce(() => {
  if (userInfo.value.user.email) {
    loading.value = true
    emailCode('WITHDRAW', userInfo.value.user.email).then((res) => {
      if (res.code == '200') {
        loading.value = false
        showToast(res.msg)
        flag.value = true
        time.value = 2 * 60 * 1000
      } else {
        loading.value = false
      }
    })
  } else if (userInfo.value.user.phone) {
    loading.value = true
    mobileCode('WITHDRAW', userInfo.value.user.phone).then((res) => {
      if (res.code == '200') {
        loading.value = false
        showToast(res.msg)
        flag.value = true
        time.value = 2 * 60 * 1000
      } else {
        loading.value = false
      }
    })
  } else {
    //没有邮箱和手机号发个锤子
  }
}, 100)
// 倒计时结束
const finish = () => {
  flag.value = false
}
const handleClose = (value) => {
  if (value) {
    info.value = value
  }
  type.value = 1
  showBottom.value = false
}
const submit = () => {
  if (userInfo.value.detail?.userTardPwd == null) {
    showToast(t('pleaseSetFundPassword'))
    setTimeout(() => {
      router.push('/secrety/fundpwd')
    }, 1000)
    return
  }
  console.log(allAmount.value)
  if (
    allAmount.value == '' ||
    allAmount.value == null ||
    allAmount.value > amount.value ||
    allAmount.value <= 0
  ) {
    showToast(t('pleaseEnterTheCorrectWithdrawalAmount'))
    return
  }
  let num = Number(allAmount.value)
  if (!num) {
    showToast(t('pleaseEnterTheWithdrawalAmount'))
    return
  }
  if (num <= 0) {
    showToast(t('withdrawalAmountCannotBeLessThan0'))
    return
  }
  if (!address.value) {
    showToast(t('pleaseSelectWithdrawalAddress'))
    return
  }
  if (!password.value) {
    showToast(t('pleaseEnterTheWithdrawalPassword'))
    return
  }
  if (showCode.value) {
    if (!code.value) {
      showToast(t('pleaseEnterTheVerificationCode'))
      return
    }
  }
  let params = {
    amount: allAmount.value,
    coinType: info.value?.title,
    pwd: password.value,
    adress: address.value,
    coin: info.value?.icon,
    code: code.value
  }
  let str = `amount=${params.amount}&coinType=${params.coinType}&pwd=${encodeURIComponent(params.pwd)}&adress=${params.adress}&coin=${params.coin}&code=${params.code}`
  console.log(str)
  withdrawSubmit(str).then((res) => {
    if (res.code == '200') {
      showToast(t('withdrawalSuccess'))
      router.push('/')
    } else {
      showToast(res.msg)
    }
  })
}
const addressList = ref([])
const showAddressBottom = ref(false)
const saveCacheAddressFn = () => {
  getWithdrawAddressList().then((res) => {
    if (res.data.length > 0) {
    } else {
      router.push('/withdrawDeposit')
    }
    addressList.value = res.data.map((item) => ({
      ...item,
      title: item.symbol.toUpperCase()
    }))
  })
}
const close = (item) => {
  address.value = item.address
  console.log(address.value, item)
  showAddressBottom.value = false
}
onMounted(() => {
  list.value = coinList.value
  if (userInfo.value.detail?.userTardPwd == null) {
    showToast(t('pleaseSetFundPassword'))
    setTimeout(() => {
      router.push('/fund-password')
    }, 800)
    return
  }
  saveCacheAddressFn()
})

//
const list = ref([])

const coinList = computed(() => {
  let list = []
  mainStore.getWithdrawList.forEach((item, index) => {
    if (item.status == '1') {
      let obj = {}
      obj['type'] = 1 //提现
      obj['ratio'] = item.ratio || '' //手续费
      obj['fee'] = item.fee //固定手续费
      // type:0数据货币，1银行卡
      obj['icon'] = item.rechargeType
      obj['title'] = item.rechargeName
      // console.log('更新完全部:',list)
      list.push(obj)
    }
  })
  return list
})
</script>
<template>
  <div class="drawings">
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
                t="1747892392635"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="27855"
                width="25"
                height="25"
              >
                <path
                  d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
                  fill="var(--primary-color)"
                  p-id="27856"
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
              <span>{{ t('withdraw1') }}</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: var(--secondary-color);
            "
          ></div>
        </div>
      </div>
    </div>
    <div style="padding: 20px 10px">
      <div style="font-size: 12px">{{ t('withdrawCoin') }}</div>
      <div class="details" @click="handleSelectCoin">
        <template v-if="info?.title">
          <div style="color: var(--primary-color); flex: 1">
            {{ info?.title }}
          </div>
        </template>
        <template v-else>
          <div style="color: var(--secondary-color); flex: 1">{{ t('pleaseSelectCoin') }}</div>
        </template>
        <div class="triangle-down"></div>
      </div>
      <div style="font-size: 12px">{{ t('withdrawAddress') }}</div>
      <div class="details" @click="showAddressBottom = true">
        <template v-if="address">
          <div style="color: var(--primary-color); flex: 1">
            {{ address }}
          </div>
        </template>
        <template v-else>
          <div style="color: var(--secondary-color); flex: 1">{{ t('pleaseSelectWithdrawalAddress') }}</div>
        </template>
        <div class="triangle-down"></div>
      </div>
      <div
        style="display: flex; justify-content: space-between; align-items: center; font-size: 12px"
      >
        <div>{{ t('withdrawAmount') }}</div>
        <div>可用 {{ amount }} {{ info?.icon?.toUpperCase() }}</div>
      </div>
      <div class="details">
        <input
          v-model="allAmount"
          type="input"
          maxlength="140"
          placeholder="请填写提现数量"
          class="uni-input-input"
          autocomplete="off"
          style="flex: 1"
        />
        <div style="margin: 0 10px" @click="allNum">{{t('all')}}</div>
      </div>
      <div
        style="display: flex; justify-content: space-between; align-items: center; font-size: 12px"
      >
        <div style="font-size: 12px">{{t('withdrawalPassword')}}</div>
        <div>
          {{t('actualAmount')}}
          {{ Number((allAmount / info?.ratio || 0).toFixed(2)) }}
          USDT
        </div>
      </div>

      <div class="details" style="margin-bottom: 20px">
        <input
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          maxlength="140"
          placeholder="请填写提现密码"
          class="uni-input-input"
          autocomplete="off"
          style="flex: 1"
        />
        <div class="icon">
          <svg
            @click="isPwd = !isPwd"
            v-if="isPwd"
            t="1747823302565"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="21623"
            width="25"
            height="25"
          >
            <path
              d="M801.2 570.4l-0.1-0.1c-0.2-0.4-0.5-0.7-0.8-1.1 40.1-25.4 79.1-56.7 116.8-93.7 13.7-13.5 14.5-36.9 1.7-51.5-12.1-13.8-31.9-14.6-44.9-1.8-151.6 149-319.9 192.7-500.7 130.1-75.3-26.1-137.8-66.3-176.9-95.5-18.7-14-34.1-26.8-45.5-36.8-13.2-11.7-32.3-10.3-43.9 3.2l-1.2 1.4 1.1-1.3c-13.1 15.2-11.6 39.4 3.2 52.5 26.5 23.5 71.7 59.8 130.7 93.3-0.1 0.2-0.2 0.3-0.4 0.5-0.1 0.1-0.2 0.3-0.3 0.4-0.4 0.6-0.8 1.1-1.2 1.7l-0.1 0.1c-0.3 0.5-0.7 1.1-1 1.7-0.1 0.2-0.2 0.3-0.3 0.5-0.3 0.6-0.7 1.3-1 1.9l-51.8 115.6c-1.8 4-2.7 8.2-2.8 12.4v1.6c0.1 3.6 0.8 7.2 2.1 10.5 0.3 0.7 0.6 1.5 0.9 2.2 0.3 0.7 0.7 1.4 1 2 0.2 0.4 0.5 0.9 0.8 1.3 3.2 5.2 8 9.6 14.1 12.3 0.5 0.2 1 0.4 1.6 0.7 0.2 0.1 0.3 0.1 0.5 0.2 0.4 0.1 0.7 0.3 1.1 0.4 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0.1 0.5 0.1 0.7 0.2 0.3 0.1 0.6 0.2 0.9 0.2 0.2 0.1 0.5 0.1 0.7 0.1 0.3 0.1 0.6 0.1 0.9 0.2 0.2 0 0.5 0.1 0.7 0.1 0.3 0 0.6 0.1 0.9 0.1 0.2 0 0.5 0 0.7 0.1 0.3 0 0.6 0.1 0.9 0.1h2.2c0.6 0 1.2 0 1.8-0.1h0.2c0.7 0 1.3-0.1 2-0.2 0.2 0 0.3 0 0.5-0.1 0.6-0.1 1.1-0.2 1.7-0.3 0.1 0 0.2 0 0.3-0.1 0.7-0.1 1.3-0.3 1.9-0.5 0.2 0 0.3-0.1 0.4-0.1 0.5-0.2 1.1-0.3 1.6-0.5 0.1 0 0.2-0.1 0.4-0.1 0.6-0.2 1.2-0.5 1.9-0.8 0.1-0.1 0.3-0.1 0.4-0.2 0.5-0.2 1-0.5 1.5-0.8 0.1-0.1 0.2-0.1 0.4-0.2 0.6-0.3 1.2-0.7 1.7-1 0.1-0.1 0.2-0.1 0.3-0.2 0.5-0.3 1-0.6 1.4-1 0.1-0.1 0.2-0.2 0.4-0.3 0.5-0.4 1.1-0.8 1.6-1.3 0.1-0.1 0.2-0.2 0.3-0.2 0.4-0.4 0.9-0.8 1.3-1.2 0.1-0.1 0.2-0.2 0.4-0.3 0.5-0.5 0.9-1 1.4-1.5l0.2-0.2c0.4-0.5 0.8-0.9 1.2-1.4 0.1-0.1 0.2-0.3 0.3-0.4 0.4-0.6 0.8-1.1 1.2-1.7l0.1-0.1c0.3-0.5 0.7-1.1 1-1.7 0.1-0.2 0.2-0.3 0.3-0.5 0.3-0.6 0.7-1.3 1-1.9l16.1-35.8 35.8-79.8c0.7-1.5 1.2-3 1.6-4.5 17.4 7.9 35.7 15.4 54.7 22.1 14 4.9 28.1 9.3 42 13L369.9 776c-0.1 0.6-0.2 1.2-0.2 1.8-0.8 7.3 1 14.4 4.7 20.3l1.2 1.8 0.9 1.2c0.6 0.8 1.3 1.6 2 2.3l1.1 1.1c4.5 4.2 10.2 7.2 16.8 8.3 0.8 0.1 1.6 0.2 2.3 0.3h0.5c0.8 0.1 1.5 0.1 2.3 0.1h1.4c0.4 0 0.9 0 1.3-0.1h0.2c0.5 0 1-0.1 1.5-0.2 0.2 0 0.3 0 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.6-0.1 0.3-0.1 0.6-0.1 0.9-0.2 0.2 0 0.4-0.1 0.6-0.1 0.3-0.1 0.6-0.1 0.8-0.2 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.2 0.5-0.2 0.3-0.1 0.6-0.3 0.9-0.4 0.2-0.1 0.3-0.2 0.5-0.2 0.4-0.2 0.8-0.4 1.1-0.6 0.1 0 0.1-0.1 0.2-0.1 0.4-0.2 0.8-0.5 1.2-0.8 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.5-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.3 0.2-0.2 0.5-0.4 0.7-0.5 0.2-0.1 0.3-0.3 0.5-0.4 0.2-0.2 0.4-0.4 0.7-0.5 0.2-0.1 0.3-0.3 0.5-0.4l0.6-0.6c0.2-0.1 0.3-0.3 0.5-0.4l0.6-0.6 0.4-0.4c0.2-0.2 0.4-0.4 0.6-0.7l0.4-0.4c0.2-0.2 0.4-0.5 0.6-0.7 0.1-0.1 0.2-0.3 0.3-0.4 0.3-0.4 0.6-0.7 0.8-1.1l0.1-0.1c0.3-0.4 0.6-0.8 0.8-1.2 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.3-0.6 0.5-0.9 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.3 0.3-0.5 0.4-0.8l0.3-0.6c0.1-0.3 0.3-0.5 0.4-0.8l0.3-0.6c0.1-0.3 0.2-0.5 0.3-0.8 0.1-0.2 0.2-0.4 0.2-0.6 0.1-0.3 0.2-0.6 0.3-0.8 0.1-0.2 0.1-0.4 0.2-0.6l0.3-0.9c0.1-0.2 0.1-0.4 0.2-0.6 0.1-0.3 0.2-0.7 0.2-1 0-0.2 0.1-0.3 0.1-0.5l0.3-1.5 23.1-140.6c24.4 3.6 48.8 5.4 72.9 5.4 13.2 0 26.3-0.5 39.4-1.6l18.4 111.9 4 24.4 0.3 1.5c0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.2 0.7 0.2 1 0.1 0.2 0.1 0.4 0.2 0.6l0.3 0.9c0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.2 0.6 0.3 0.8 0.1 0.2 0.2 0.4 0.2 0.6 0.1 0.3 0.2 0.5 0.3 0.8l0.3 0.6c0.1 0.3 0.2 0.5 0.4 0.8l0.3 0.6c0.1 0.3 0.3 0.5 0.4 0.8 0.1 0.2 0.2 0.3 0.3 0.5 0.2 0.3 0.3 0.6 0.5 0.9 0.1 0.1 0.2 0.3 0.2 0.4 0.3 0.4 0.5 0.8 0.8 1.2v0.1c0.3 0.4 0.5 0.8 0.8 1.1 0.1 0.1 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.5 0.6 0.8l0.4 0.4c0.2 0.2 0.4 0.4 0.6 0.7l0.4 0.4 0.6 0.6 0.4 0.4 0.6 0.6c0.2 0.1 0.3 0.3 0.5 0.4 0.2 0.2 0.4 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.2 0.2 0.5 0.4 0.7 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.2 0.5 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.4 0.3 0.8 0.5 1.2 0.8 0 0 0.1 0 0.1 0.1 0.4 0.2 0.8 0.4 1.1 0.6 0.1 0.1 0.3 0.1 0.4 0.2 0.3 0.1 0.6 0.3 0.9 0.4 0.2 0.1 0.4 0.2 0.5 0.2 0.3 0.1 0.5 0.2 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.2 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.8 0.2 0.2 0.1 0.4 0.1 0.6 0.1 0.3 0.1 0.6 0.1 0.9 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.3 0.1 0.5 0.1 0.5 0.1 1 0.1 1.5 0.2h0.2c0.4 0 0.9 0.1 1.3 0.1H622.4c0.8 0 1.5 0 2.3-0.1h0.5c0.8-0.1 1.6-0.2 2.3-0.3 9.3-1.5 16.9-6.9 21.7-14.2 0.8-1.3 1.6-2.6 2.2-4 0.4-0.9 0.8-1.9 1.2-2.9 0.5-1.5 0.9-3 1.2-4.5s0.5-3.1 0.5-4.7v-1.6c0-1.1-0.1-2.2-0.2-3.2-0.1-0.5-0.1-1.1-0.2-1.6L631.7 640c38.5-8.4 76.2-21.7 113.1-39.7 0.1 0.2 0.1 0.3 0.2 0.5l51.8 115.6c0.3 0.7 0.6 1.3 1 1.9 0.1 0.2 0.2 0.3 0.3 0.5 0.3 0.6 0.6 1.1 1 1.7l0.1 0.1c0.4 0.6 0.8 1.2 1.2 1.7 0.1 0.1 0.2 0.3 0.3 0.4 0.4 0.5 0.8 1 1.1 1.4l0.2 0.2c0.5 0.5 0.9 1 1.4 1.5 0.1 0.1 0.2 0.2 0.4 0.3 0.4 0.4 0.9 0.8 1.3 1.2 0.1 0.1 0.2 0.2 0.3 0.2 0.5 0.4 1 0.9 1.6 1.3 0.1 0.1 0.2 0.2 0.4 0.3 0.5 0.3 0.9 0.7 1.4 1 0.1 0.1 0.2 0.1 0.3 0.2 0.6 0.4 1.1 0.7 1.7 1 0.1 0.1 0.2 0.1 0.4 0.2 0.5 0.3 1 0.5 1.5 0.8 0.1 0.1 0.3 0.1 0.4 0.2 0.6 0.3 1.2 0.5 1.9 0.8 0.1 0 0.2 0.1 0.4 0.1 0.5 0.2 1.1 0.4 1.6 0.5 0.2 0 0.3 0.1 0.5 0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.1 0 0.2 0 0.3 0.1 0.6 0.1 1.1 0.2 1.7 0.3 0.2 0 0.3 0.1 0.5 0.1 0.7 0.1 1.3 0.2 2 0.2h0.2c0.6 0 1.2 0.1 1.8 0.1h2.2c0.3 0 0.6 0 0.9-0.1 0.2 0 0.5 0 0.7-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.5-0.1 0.7-0.1 0.3 0 0.6-0.1 0.9-0.2 0.2 0 0.5-0.1 0.7-0.1 0.3-0.1 0.6-0.1 0.9-0.2 0.2-0.1 0.5-0.1 0.7-0.2 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.4-0.1 0.7-0.2 1.1-0.4 0.2-0.1 0.3-0.1 0.5-0.2 0.5-0.2 1-0.4 1.6-0.7 16.1-7.2 23.3-26.2 16.1-42.3l-51.8-115.6c-0.3-0.7-0.6-1.3-1-1.9-0.1-0.2-0.2-0.3-0.3-0.5-0.4-0.5-0.7-1.1-1.1-1.7z"
              p-id="21624"
              fill="#999999"
            ></path>
          </svg>
          <svg
            v-else
            @click="isPwd = !isPwd"
            t="1747823189861"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="20574"
            width="25"
            height="25"
          >
            <path
              d="M512 279.272727c171.985455 0 328.610909 162.909091 388.421818 232.727273-59.810909 69.818182-216.436364 232.727273-388.421818 232.727273S183.389091 581.818182 123.578182 512c59.810909-69.818182 216.436364-232.727273 388.421818-232.727273m0-69.818182C298.589091 209.454545 117.76 407.970909 56.785455 483.374545a44.916364 44.916364 0 0 0 0 57.25091C117.76 616.029091 298.589091 814.545455 512 814.545455s394.24-198.516364 455.214545-273.92a44.916364 44.916364 0 0 0 0-57.25091C906.24 407.970909 725.410909 209.454545 512 209.454545z"
              fill="#999999"
              p-id="20575"
            ></path>
            <path
              d="M512 442.181818a69.818182 69.818182 0 1 1-69.818182 69.818182 69.818182 69.818182 0 0 1 69.818182-69.818182m0-69.818182a139.636364 139.636364 0 1 0 139.636364 139.636364 139.636364 139.636364 0 0 0-139.636364-139.636364z"
              fill="#999999"
              p-id="20576"
            ></path>
          </svg>
        </div>
      </div>

      <div style="font-size: 14px">{{t('prompt')}}</div>
      <div style="font-size: 12px; color: var(--secondary-color); margin-top: 10px">
        {{t('prompt1')}}
      </div>
      <div style="font-size: 12px; color: var(--secondary-color); margin-top: 10px">
        {{t('prompt2')}}
      </div>
    </div>
    <div @click="submit" class="btn" :class="address && allAmount && password ? 'zf' : ''">
      {{t('confirm')}}
    </div>
  </div>
  <van-popup v-model:show="showAddressBottom" position="bottom">
    <div class="lists">
      <div style="display: flex; justify-content: center; position: relative; margin-bottom: 20px">
        <div style="color: var(--primary-background)">{{t('selectWithdrawalAddress')}}</div>
        <div class="cha" @click="showAddressBottom = false">
          <svg
            t="1748095662241"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5742"
            width="24"
            height="24"
          >
            <path
              d="M801.856 734.016 579.904 512l222.016-222.016c18.816-18.816 18.88-49.152 0.064-67.968-18.752-18.752-49.216-18.752-67.904 0L512 444.032 289.92 222.016c-18.688-18.752-49.088-18.752-67.904 0C203.328 240.768 203.328 271.232 222.144 290.048L444.096 512l-222.016 221.952c-18.816 18.752-18.816 49.152-0.064 67.968C231.424 811.392 243.84 816 256 816s24.576-4.608 33.92-14.016L512 579.968l222.08 222.016c9.408 9.344 21.696 14.016 33.92 14.016 12.288 0 24.576-4.608 33.92-14.016C820.672 783.104 820.736 752.768 801.856 734.016z"
              p-id="5743"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="lists-item"
        v-if="addressList?.length > 0"
        v-for="item in addressList"
        :key="item.type"
        style="clear: both"
        @click="close(item)"
        :class="{
          qd: address == item?.address
        }"
      >
        {{ item?.address }}
      </div>
      <div v-else style="color: var(--primary-background); display: flex; justify-content: center">
        {{t('noAddress')}}
      </div>
    </div>
  </van-popup>
  <van-popup v-model:show="showBottom" position="bottom">
    <div class="lists">
      <div style="display: flex; justify-content: center; position: relative; margin-bottom: 20px">
        <div style="color: var(--primary-background)">{{t('selectWithdrawCoin')}}</div>
        <div class="cha" @click="showBottom = false">
          <svg
            t="1748095662241"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5742"
            width="24"
            height="24"
          >
            <path
              d="M801.856 734.016 579.904 512l222.016-222.016c18.816-18.816 18.88-49.152 0.064-67.968-18.752-18.752-49.216-18.752-67.904 0L512 444.032 289.92 222.016c-18.688-18.752-49.088-18.752-67.904 0C203.328 240.768 203.328 271.232 222.144 290.048L444.096 512l-222.016 221.952c-18.816 18.752-18.816 49.152-0.064 67.968C231.424 811.392 243.84 816 256 816s24.576-4.608 33.92-14.016L512 579.968l222.08 222.016c9.408 9.344 21.696 14.016 33.92 14.016 12.288 0 24.576-4.608 33.92-14.016C820.672 783.104 820.736 752.768 801.856 734.016z"
              p-id="5743"
            ></path>
          </svg>
        </div>
      </div>

      <div
        class="lists-item"
        v-if="list?.length > 0"
        v-for="item in list"
        :key="item.icon"
        style="clear: both"
        @click="handleClose(item)"
        :class="{
          qd: item.title == info.title
        }"
      >
        {{ item?.title?.toUpperCase() }}
      </div>
    </div>
  </van-popup>
</template>

<style scoped lang="scss">
.cha {
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.lists {
  background-color: var(--primary-color);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 15px;

  .lists-item {
    color: var(--secondary-color);
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qd {
    border-radius: 5px;
    background-color: var(--primary-background);
    color: var(--primary-border);
  }
}

.drawings {
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
    padding: 12px 10px;
    box-sizing: border-box;
    background: var(--regular-background);
    margin-bottom: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--secondary-color);
    margin-right: 5px;
  }
}
</style>
