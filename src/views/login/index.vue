<template>
  <div class="login">
    <div class="title">{{ t('welcomeLogin') }}</div>
    <div class="tab">
      <div
        class="tab-item"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in tabList"
        :key="item.id"
        @click="currentIndex = index"
      >
        {{ item.title }}
      </div>
    </div>
    <component :is="tabList[currentIndex]?.componentName" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/index.js'
import AccountLogin from './component/AccountLogin.vue'
import EmailLogin from './component/EmailLogin.vue'
import MobileLogin from './component/MobileLogin.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const mainStore = useMainStore()
const currentIndex = ref(0)
const tabList = computed(() => {
  let list = []
  console.log(mainStore.getLoginMethodList)
  if (mainStore.getLoginMethodList.ordinaryIsOpen) {
    let obj = {}
    obj['id'] = 1
    obj['title'] = t('account')
    obj['type'] = '1'
    obj['componentName'] = AccountLogin
    list.push(obj)
  }
  if (mainStore.getLoginMethodList.emailIsOpen) {
    let obj = {}
    obj['id'] = 2
    obj['title'] = t('email')
    obj['type'] = '2'
    obj['componentName'] = EmailLogin
    list.push(obj)
  }
  if (mainStore.getLoginMethodList.phoneIsOpen) {
    let obj = {}
    obj['id'] = 3
    obj['title'] = t('phone')
    obj['type'] = '3'
    obj['componentName'] = MobileLogin
    list.push(obj)
  }
  return list
})
const register = () => {
  router.push('/register')
}
const login = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.login {
  padding: 10px;
  padding-top: 50px;
  .title {
    font-family: 'Source Han Sans Old Style-Bold';
    font-weight: bold;
    font-size: 36px;
    color: var(--primary-color);
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
  .tab {
    margin-top: 50px;
    display: flex;
    align-items: center;

    .tab-item {
      font-family: PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: var(--primary-color);
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-right: 10px;
      cursor: pointer;
    }
    .active {
      position: relative;
      padding-left: 5px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 2px;
        height: 16px;
        background: var(--primary-border);
        border-radius: 1px 1px 1px 1px;
      }
    }
  }
}
</style>
