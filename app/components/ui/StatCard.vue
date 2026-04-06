<script lang="ts" setup>
import { statCardBase, statCardTones, type StatCardTone } from '@/presets/stat-card'
import { cn } from '@/presets/cn'

interface Props {
  value: string
  label: string
  description: string
  tone?: StatCardTone
}

const props = withDefaults(defineProps<Props>(), {
  tone: 'default',
})
</script>

<template>
  <article :class="cn(statCardBase, statCardTones[props.tone])">
    <p class="text-3xl font-bold text-white">
      {{ props.value }}
    </p>
    <p class="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
      {{ props.label }}
    </p>
    <p class="mt-3 text-sm leading-6 text-slate-300">
      {{ props.description }}
    </p>
  </article>
</template>
