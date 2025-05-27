<template>
  <div class="no-data">
    <img class="no-data-img" src="../../assets/img/noData.png" draggable="false" />
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
