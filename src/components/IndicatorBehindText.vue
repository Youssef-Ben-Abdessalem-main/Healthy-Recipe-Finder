<script setup>
const props = defineProps({
  bgColor: { type: String, default: 'bg-emerald-500' },
  height: { type: String, default: 'h-10' },
  translateY: { type: String, default: 'translate-y-2' },
  rounded: { type: String, default: 'rounded-lg' },
  extraClasses: { type: String, default: '' }
})
</script>

<template>
  <div :class="['absolute bottom-0 left-0 z-[-1] w-full opacity-40', props.bgColor, props.height, props.translateY, props.rounded, props.extraClasses]"></div>
  </template>

<style scoped></style>

