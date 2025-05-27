<template>
  <van-popup v-model:show="props.isNetwork" round position="bottom">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--primary-background);
      "
    >
      <div></div>
      <div style="font-size: 14px">{{ t('selectRechargeNetwork') }}</div>
      <div>
        <svg
          @click="handleClose(undefined, currentIndex)"
          t="1747853459405"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1494"
          width="24"
          height="24"
        >
          <path
            d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
            p-id="1495"
            fill="#000"
          ></path>
        </svg>
      </div>
    </div>
    <div style="font-size: 12px; color: var(--primary-background); margin-top: 10px">
      {{ t('pleaseConfirmThatTheSelectedRechargeNetworkIsTheSameAsTheWithdrawalPlatformYouAreUsing') }}
    </div>
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      "
    >
      <div
        @click="handleClose(item, index)"
        v-for="(item, index) in extra"
        :key="index"
        style="
          width: 80%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: var(--primary-background);
          border-radius: 6px;
          margin-bottom: 15px;
        "
        :class="currentIndex == index ? 'active' : ''"
      >
        {{ item.coinName }}
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  isNetwork: {
    type: Boolean,
    default: false
  },
  extra: {
    type: Array,
    default: []
  },
  isSwitch: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['networkClose', 'handleSwitch'])
const currentIndex = ref(0)
watch(
  () => props.isSwitch,
  (newValue) => {
    if (newValue) {
      currentIndex.value = 0
      emit('handleSwitch', false)
    }
  }
)
const handleClose = (value, index) => {
  currentIndex.value = index
  emit('networkClose', value)
}
</script>
<style lang="scss" scoped>
.van-popup {
  background-color: var(--primary-color) !important;
  padding: 15px;
  color: var(--primary-color);
  .popup-item {
    width: 80%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 6px;
  }
}
.active {
  border: 1px solid var(--primary-color);
}
</style>
