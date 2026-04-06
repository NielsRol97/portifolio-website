
import { onMounted, ref } from 'vue'

export function useStagger(delay = 80) {
  const container = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!container.value) return

    const children = Array.from(container.value.children)

    children.forEach((child, i) => {
      const el = child as HTMLElement

      el.classList.add('stagger-item')
      el.style.transitionDelay = `${i * delay}ms`
    })

    requestAnimationFrame(() => {
      children.forEach(child =>
        child.classList.add('stagger-visible')
      )
    })
  })

  return { container }
}
