import { onMounted, onUnmounted, ref } from 'vue'

export function useParallax(speed = 0.15) {
  const el = ref<HTMLElement | null>(null)

  const handler = () => {
    if (!el.value) return

    const rect = el.value.getBoundingClientRect()
    const offset = rect.top * speed

    el.value.style.transform = `translateY(${offset}px)`
  }

  onMounted(() => {
    window.addEventListener('scroll', handler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handler)
  })

  return { el }
}