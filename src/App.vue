<template>
  <router-view></router-view>
  <FooterBar v-if="isShow" />
</template>
<script setup>
import FooterBar from '@/components/footerBar/index.vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/store/index'
const mainStore = useMainStore()
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
document.title = VITE_APP_TITLE
const route = useRoute()
const isShow = computed(() => {
<<<<<<< HEAD
  const list = [
    '/',
    '/store',
    '/trade',
    '/contract',
    '/wallet',
    '/invaite',
    '/flash',
    '/flashOption'
  ]
=======
  const list = ['/', '/store', '/trade', '/contract', '/wallet', '/invaite']
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
  console.log('123', list.includes(route.path), route.path)

  return list.includes(route.path)
})
/**
 * 客服点击监听
 */
const event_serviceChange = () => {
  console.log(mainStore.getCustomerServiceList)
  if (mainStore.getCustomerServiceList.length) {
    if (mainStore.getCustomerServiceList.length == 1) {
      let href = mainStore.getCustomerServiceList[0]?.url
      if (mainStore.getCustomerServiceList[0]?.getUrl) {
        href = mainStore.getCustomerServiceList[0].getUrl()
        window.open(href)
      }
    } else {
      showServicePopup.value = true
    }
  }
}
onMounted(() => {
  document.addEventListener('event_serviceChange', event_serviceChange)
  document.documentElement.setAttribute('data-theme', import.meta.env.VITE_APP_THEME)
})
</script>
