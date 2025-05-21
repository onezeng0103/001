<template>
  <uni-view class="not-data">
    <uni-view class="fui-empty__wrap" style="margin-top: 0px">
      <img src="../../assets/img/empty.png" alt="" style="width: 5rem; height: 76px" />
      <uni-text
        class="fui-empty__title"
        style="color: var(--content-tertiary); font-size: 0.8125rem"
      >
        <span>{{ t('noData') }}</span>
      </uni-text>
      <uni-view
        class="fui-button__wrap"
        style="
          width: 6.25rem;
          height: 2.0625rem;
          margin: 0.9375rem 0px;
          border-radius: 2.0625rem;
          background: var(--content-primary);
        "
      >
        <uni-button
          @click="router.push('/floworder')"
          class="fui-button"
          style="
            width: 6.25rem;
            height: 2.0625rem;
            line-height: 2.0625rem;
            background: var(--content-primary);
            border-width: 0px;
            border-color: var(--content-primary);
            border-radius: 2.0625rem;
            font-size: 0.8125rem;
            color: var(--background-primary);
          "
        >
          {{ t('goCopyTrading') }}
        </uni-button>
      </uni-view>
    </uni-view>
  </uni-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const { t } = useI18n()
</script>
<style lang="scss" scoped>
.not-data {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
