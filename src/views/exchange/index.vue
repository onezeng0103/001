<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useMainStore } from '@/store'
import { getUserBalance, getTransferList } from '@/api/account'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const mainStore = useMainStore()
const params = ref({
  coin: 'usdt',
  transferOutAccount: '',
  transferInAccount: '',
  amount: ''
})
// 选择器数据
const tempList = computed(() => {
  const list = mainStore.getAssetsTabList.filter((item) => {
    // 对应参数key值 -->1 平台资产 2理财资产 3合约账户
    const key = { 平台资产: 1, 理财资产: 2, 合约资产: 3 }
    if (!item.isOpen) return false
    item.name == '平台资产' && (item.keyStr = t('platformAssets'))
    item.name == '理财资产' && (item.keyStr = t('financialAssets'))
    item.name == '合约资产' && (item.keyStr = t('contractAssets'))

    item['text'] = item.keyStr
    item['value'] = key[item.name]
    return true
  })
  return list.sort((a, b) => a.sort - b.sort)
})
//默认值
params.value.transferOutAccount = tempList.value[0]?.value || ''
params.value.transferInAccount = tempList.value[1]?.value || ''
const transferOutAccountList = computed(() =>
  tempList.value.filter((item) => item.value != params.value.transferInAccount)
)
const transferInAccountList = computed(() =>
  tempList.value.filter((item) => item.value != params.value.transferOutAccount)
)
const returnName = (value) => {
  const list = mainStore.getAssetsTabList.filter((item) => {
    if (item.value == value) {
      return true
    }
  })
  return list[0]?.keyStr
}
const list = ref([])
const isType = ref(false)
const showBottom = ref(false)
const handleShowBottom = (value) => {
  isType.value = value
  if (value) {
    list.value = transferOutAccountList.value
  } else {
    list.value = transferInAccountList.value
  }
  showBottom.value = true
}
const handleSelect = (item) => {
  if (isType.value) {
    params.value.transferOutAccount = item.value
  } else {
    params.value.transferInAccount = item.value
  }
  showBottom.value = false
}
const jiaohuanbtn = () => {
  ;[params.value.transferOutAccount, params.value.transferInAccount] = [
    params.value.transferInAccount,
    params.value.transferOutAccount
  ]
}
//获取余额
const availableList = ref([])
const getBalance = async () => {
  let res = await getUserBalance()
  if (res.code == '200') {
    availableList.value = res.data
  }
}
// 计算余额   -->1 平台资产 2理财资产 3合约账户
const availableAmount = computed(() => {
  let amountTemp = ''
  availableList.value.forEach((item, index) => {
    if (item?.type == params.value.transferOutAccount) {
      amountTemp = item.availableAmount
    }
  })

  return amountTemp
})
const amountAll = () => {
  params.value.amount = availableAmount.value
}
const handleConfirm = () => {
  if (!params.value.amount) {
    showToast(t('pleaseInputTransferAmount'))
    return
  }
  getTransferList(params.value).then((res) => {
    if (res.code == '200') {
      showToast(t('operationSuccess1'))
      getBalance()
    } else {
      showToast(res.msg || '')
    }
  })
}
onMounted(() => {
  getBalance()
})
</script>

<template>
  <div class="exchange">
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
              <span>{{ t('fundTransfer') }}</span>
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

    <div style="padding: 20px 10px">
      <div
        class="details"
        style="display: flex; justify-content: space-between; align-items: center"
      >
        <div style="flex: 1; margin-right: 20px">
          <div style="display: flex; align-items: center" @click="handleShowBottom(true)">
            <div style="width: 30px; color: var(--secondary-color)">从</div>
            <div class="nub">
              {{ returnName(params.transferOutAccount) }}
              <div class="triangle-down"></div>
            </div>
          </div>

          <div
            style="border-bottom: 1px solid var(--secondary-color); margin: 10px 0 10px 30px"
          ></div>

          <div style="display: flex; align-items: center" @click="handleShowBottom(true)">
            <div style="width: 30px; color: var(--secondary-color)">{{ t('to') }}</div>
            <div class="nub">
              {{ returnName(params.transferInAccount) }}
              <div class="triangle-down"></div>
            </div>
          </div>
        </div>

        <div @click="jiaohuanbtn">
          <svg
            t="1748089991334"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4560"
            width="35"
            height="35"
          >
            <path
              d="M560.697 472.022a23 23 0 0 1 13.27 4.214L820.026 650.05c10.375 7.33 12.844 21.681 5.515 32.056a23 23 0 0 1-5.1 5.215L574.383 869.495c-10.21 7.559-24.613 5.41-32.171-4.799a23 23 0 0 1-4.515-13.686V733.816h-201.16c-143.36 0.815-221.206-70.034-233.537-212.546 12.457 13.043 66.902 90 233.537 90 111.09 0 178.144-1.277 201.16-3.828v-112.42c0-12.703 10.297-23 23-23zM406.788 119.304a23 23 0 0 1 4.515 13.686v117.194h201.16c143.36-0.815 221.206 70.034 233.537 212.546-12.457-13.043-66.902-90-233.537-90-111.09 0-178.144 1.277-201.16 3.828v112.42c0 12.703-10.297 23-23 23a23 23 0 0 1-13.27-4.214L128.974 333.95c-10.375-7.33-12.844-21.681-5.515-32.056a23 23 0 0 1 5.1-5.215l246.058-182.173c10.21-7.559 24.613-5.41 32.171 4.799z"
              fill="#c2eb4f"
              p-id="4561"
            ></path>
          </svg>
        </div>
      </div>

      <div style="font-size: 12px">币种</div>
      <div class="details bz">
        <img
          src="../../assets/img/usdt.png"
          alt=""
          style="width: 20px; height: 20px; margin-right: 10px"
        />
        <div style="color: var(--secondary-color)">USDT</div>
      </div>

      <div
        style="display: flex; justify-content: space-between; align-items: center; font-size: 12px"
      >
        <div>{{ t('quantity') }}</div>
        <div>{{ t('available') }} {{ availableAmount }}</div>
      </div>

      <div class="details bz">
        <input
          v-model="params.amount"
          type="number"
          maxlength="140"
          placeholder="划转金额"
          step="0.000000000000000001"
          enterkeyhint="done"
          pattern="[0-9]*"
          class="uni-input-input"
          autocomplete="off"
          style="flex: 1"
        />
        <div style="margin: 0 10px" @click="amountAll">{{ t('all') }}</div>
      </div>

      <div style="margin-top: 20px">{{ t('transferNotice') }}</div>
      <div style="font-size: 12px; margin-top: 10px; color: var(--secondary-color)">
        {{ t('transferNoticeContent') }}
      </div>
    </div>

    <div @click="handleConfirm" class="btn" :class="params.amount ? 'zf' : ''">
      {{ t('confirmTransfer') }}
    </div>
  </div>

  <van-popup v-model:show="showBottom" position="bottom">
    <div class="lists">
      <div style="display: flex; justify-content: center; position: relative; margin-bottom: 20px">
        <div style="color: var(--regular-color)">{{ t('selectTransferInAccount') }}</div>
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
        v-for="(item, index) in list"
        :key="index"
        @click="handleSelect(item)"
        :class="{
          qd: item.value === params.transferOutAccount || item.value === params.transferInAccount
        }"
      >
        {{ item.keyStr }}
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
    background-color: var(--primary-color);
    color: var(--primary-border);
  }
}

.exchange {
  .details {
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    background: var(--regular-background);
    margin-bottom: 15px;

    .nub {
      flex: 1;
      background: var(--regular-background);
      height: 35px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      padding: 6px;
      justify-content: space-between;

      .triangle-down {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid var(--secondary-color);
        margin-right: 5px;
      }
    }
  }

  .bz {
    margin-top: 10px;
    padding: 12px 10px;
    display: flex;
    align-items: center;
  }
}

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
  color: var(--regular-color);
  background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
}
</style>
