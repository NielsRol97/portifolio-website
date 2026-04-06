<script lang="ts" setup>
import { tagPillTones, type TagPillTone } from '@/presets/tag-pill'
import { cn } from '@/presets/cn'

interface Props {
  label: string
  tone?: TagPillTone
}

const props = withDefaults(defineProps<Props>(), {
  tone: 'default',
})
</script>

<template>
  <span :class="cn('inline-flex rounded-full px-3 py-1 text-xs font-medium', tagPillTones[props.tone])">
    {{ props.label }}
  </span>
</template>
