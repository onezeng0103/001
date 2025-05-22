<script setup>
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['close'])
const close = (value) => {
  emits('close', value)
}
</script>

<template>
  <van-popup v-model:show="props.showBottom" position="bottom">
    123123123
  </van-popup>
</template>

<style scoped lang="scss">

</style>
