<template>
  <uni-view class="not-data">
    <uni-view class="fui-empty__wrap" style="margin-top: 0px">
      <img src="../../assets/img/not-order.png" alt="" style="width: 6.25rem; height: 100px" />
      <uni-text
        class="fui-empty__title"
        style="color: var(--color-text-dark-gray); font-size: 0.8125rem"
      >
        <span>{{ t('noRecord') }}</span>
      </uni-text>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style lang="scss" scoped>
.not-data {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  .fui-empty__wrap {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
