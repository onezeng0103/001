<template>
  <div class="store">
    <div class="store-header">
      <div class="store-header-item" :class="{ active: activeIndex == 0 }" @click="activeIndex = 0">
        {{ t('flashContract') }}
      </div>
      <div class="store-header-item" :class="{ active: activeIndex == 1 }" @click="activeIndex = 1">
        {{ t('spot') }}
      </div>
      <div class="store-header-item" :class="{ active: activeIndex == 2 }" @click="activeIndex = 2">
        {{ t('contract') }}
      </div>
    </div>
    <SpotGoods v-if="activeIndex == 1" />
    <Flash v-if="activeIndex == 0" />
    <Pact v-if="activeIndex == 2" />
  </div>
</template>
<script setup>
import Flash from './component/flash.vue'
import SpotGoods from './component/spotGoods.vue'
import Pact from './component/pact.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const activeIndex = ref(0)
</script>
<style lang="scss" scoped>
.store {
  padding: 10px;
  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    &-item {
      font-size: 12px;
      color: var(--secondary-color);
      margin-right: 25px;
      cursor: pointer;
    }
    .active {
      color: var(--primary-border);
      font-size: 14px;
    }
  }
}
</style>
