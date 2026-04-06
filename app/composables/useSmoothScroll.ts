export function useSmoothScroll() {

  function scrollToHash(hash: string) {

    const el = document.querySelector(hash)

    if (!el) return

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  function handleAnchorClick(
    e: MouseEvent,
    hash: string,
    after?: () => void
  ) {

    e.preventDefault()

    scrollToHash(hash)

    after?.()
  }

  return {
    scrollToHash,
    handleAnchorClick
  }
}