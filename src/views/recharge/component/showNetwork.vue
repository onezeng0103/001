<template>
  <van-popup v-model:show="props.isNetwork" round position="bottom">
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div></div>
      <div style="font-size: 14px; color: #000">选择充值网络</div>
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
    <div style="font-size: 12px; color: #999; margin-top: 10px">
      请确认您选择的储值网络与您所在的提现平台所使用网络一致，否则资产可能会遗失。
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
          background: rgb(240, 240, 240);
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
  background-color: #fff !important;
  padding: 15px;
  color: #000;
  .popup-item {
    width: 80%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgb(240, 240, 240);
    border-radius: 6px;
  }
}
.active {
  border: 1px solid #000;
}
</style>
