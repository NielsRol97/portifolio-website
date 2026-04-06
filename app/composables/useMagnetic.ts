
import { onMounted, onUnmounted, ref } from 'vue'

export function useMagnetic(strength = 30) {
  const el = ref<HTMLElement | null>(null)

  function move(e: MouseEvent) {
    if (!el.value) return

    const rect = el.value.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.value.style.transform =
      `translate(${x / strength}px, ${y / strength}px)`
  }

  function reset() {
    if (!el.value) return
    el.value.style.transform = 'translate(0px,0px)'
  }

  onMounted(() => {
    el.value?.addEventListener('mousemove', move)
    el.value?.addEventListener('mouseleave', reset)
  })

  onUnmounted(() => {
    el.value?.removeEventListener('mousemove', move)
    el.value?.removeEventListener('mouseleave', reset)
  })

  return { el }
}
