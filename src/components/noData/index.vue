<template>
  <div class="no-data">
    <img
      class="no-data-img"
      src="data:image/png;base64,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"
      draggable="false"
    />
    <div class="no-data-name">{{ t('noData') }}</div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style lang="scss" scoped>
.no-data {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .no-data-img {
    width: 100px;
    height: 100px;
  }
  .no-data-name {
    margin-top: 0.625rem;
    font-size: 0.875rem;
    color: #fff;
  }
}
</style>
