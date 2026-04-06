<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  href: string
  variant?: 'solid' | 'ghost'
}>(), {
  variant: 'solid',
})

const isExternal = computed(() => {
  return /^(https?:|mailto:|tel:)/.test(props.href)
})

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
  props.variant === 'ghost'
    ? 'border border-white/12 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.05)] hover:border-cyan-300/35 hover:bg-white/8'
    : 'bg-cyan-300 text-slate-950 shadow-[0_14px_32px_rgba(34,211,238,.18)] hover:-translate-y-0.5 hover:bg-cyan-200',
])
</script>

<template>
  <a
    v-if="isExternal"
    :href="href"
    :target="href.startsWith('http') ? '_blank' : undefined"
    :rel="href.startsWith('http') ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />
  </a>

  <NuxtLink
    v-else
    :to="href"
    :class="classes"
  >
    <slot />
  </NuxtLink>
</template>
