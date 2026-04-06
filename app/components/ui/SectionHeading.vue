<script lang="ts" setup>
import { sectionHeadingAlignments, type SectionHeadingAlignment } from '@/presets/section-heading'

interface Props {
  eyebrow: string
  title: string
  description: string
  align?: SectionHeadingAlignment
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
})
</script>

<template>
  <div :class="sectionHeadingAlignments[props.align]">
    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
      {{ props.eyebrow }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {{ props.title }}
    </h2>
    <p class="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
      {{ props.description }}
    </p>
  </div>
</template>
