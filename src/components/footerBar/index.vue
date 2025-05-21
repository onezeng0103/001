<template>
  <uni-tabbar class="uni-tabbar-bottom" style="width: 100%">
    <div class="uni-tabbar" style="backdrop-filter: none; width: 100%">
      <div class="uni-tabbar-border" style="background-color: var(--white)"></div>
      <div
        class="uni-tabbar__item"
        @click="handleClick(item.linkUrl)"
        v-for="(item, index) in getTabbarList"
        :key="index"
      >
        <div class="uni-tabbar__bd" style="height: 50px">
          <div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 20px; height: 20px">
            <img :src="item.imgUrl" v-if="pathStr !== item.linkUrl" />
            <img :src="item.checkedImgUrl" v-else />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 6px"
          >
            {{ t(item.key) }}
          </div>
        </div>
      </div>
    </div>
  </uni-tabbar>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/store'
const mainStore = useMainStore()
const getTabbarList = computed(() => {
  return mainStore.getTabbarList.filter((elem) => elem.isOpen)
})

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const pathStr = ref(route.path)
watch(route, (to) => {
  pathStr.value = to.path
})
const handleClick = (path) => {
  pathStr.value = path
  router.push(path)
}
</script>
