import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const width = ref(window.innerWidth)
  const device = ref('desktop')

  const updateWidth = () => {
    width.value = window.innerWidth
    if (width.value < 640) device.value = 'mobile'
    else if (width.value < 1024) device.value = 'tablet'
    else device.value = 'desktop'
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
    updateWidth()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return { width, device }
}
