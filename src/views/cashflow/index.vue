<template>
  <div class="cashflow">
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
                  fill="#ffffff"
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
              <span>资金流水</span>
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
    <div class="cashflow-main">
      <div class="cashflow-main-tab">
        <div
          class="cashflow-main-tab-item"
          :class="activeIndex === index ? 'active' : ''"
          v-for="(item, index) in list"
          :key="item.type"
          @click="handleChange(item, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="cashflow-main-content">
        <component :is="list[activeIndex].component" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { _timeFormat } from '@/utils/public'
import recharge from './component/recharge.vue'
import withdraw from './component/withdraw.vue'
import finance from './component/finance.vue'
import loan from './component/loan.vue'
import contract from './component/contract.vue'
import trade from './component/trade.vue'
import options from './component/options.vue'
import second from './component/second.vue'
import proxy from './component/proxy.vue'
const router = useRouter()
const { t } = useI18n()
const isProxy = import.meta.env.VITE_IS_PROXY
const activeIndex = ref(0)

const list = ref([
  {
    name: '充值',
    type: 'recharge',
    component: recharge
  },
  {
    name: '提现',
    type: 'withdraw',
    component: withdraw
  },
  {
    name: '理财',
    type: 'finance',
    component: finance
  },
  // {
  //   name: '借贷',
  //   type: 'loan',
  //   component: loan
  // },
  {
    name: '合约',
    type: 'contract',
    component: contract
  },
  {
    name: '现货',
    type: 'trade',
    component: trade
  },
  // {
  //   name: '期权',
  //   type: 'option',
  //   component: options
  // },
  {
    name: '秒合约',
    type: 'second',
    component: second
  }
])
const handleChange = (value, index) => {
  activeIndex.value = index
}
onMounted(() => {
  if (Boolean(Number(isProxy))) {
    list.value.push({
      name: '跟投',
      type: 'proxy',
      component: proxy
    })
  }
})
</script>
<style lang="scss" scoped>
.cashflow {
  .cashflow-main {
    padding: 15px;
    &-tab {
      width: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: none;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--placeholder-border);
      &::-webkit-scrollbar {
        display: none;
      }
      &-item {
        width: auto;
        margin-right: 20px;
        color: var(--secondary-color);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        flex-shrink: 0;
        &.active {
          color: var(--primary-border);
        }
      }
    }
    &-content {
      margin-top: 20px;
    }
  }
}
</style>
