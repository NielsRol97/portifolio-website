<script lang="ts" setup>
import { ref } from 'vue'

const { navItems, profile } = usePortfolioData()
const { handleAnchorClick } = useSmoothScroll()

const isMenuOpen = ref(false)

function onNavClick(e: MouseEvent, href: string, closeMenu = false) {
  handleAnchorClick(e, href)
  if (closeMenu) isMenuOpen.value = false
}

function onLogoClick(e: MouseEvent) {
  handleAnchorClick(e, '#home')
}

import PrimaryButton from '@/components/ui/PrimaryButton.vue'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <a href="#home" class="group flex items-center gap-3" @click="onLogoClick">
        <span class="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-linear-to-br from-cyan-300/20 to-indigo-400/10 text-sm font-bold text-cyan-200 shadow-[0_8px_24px_rgba(34,211,238,.15)] transition group-hover:border-cyan-300/45 group-hover:text-white">
          {{ profile.name.slice(0, 1) }}
        </span>

        <span>
          <span class="block text-sm font-semibold text-white">{{ profile.name }}</span>
          <span class="block text-xs text-slate-400">{{ profile.role }}</span>
        </span>
      </a>

      <nav class="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] lg:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white"
          @click="onNavClick($event, item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        type="button"
        class="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white lg:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        {{ isMenuOpen ? 'Sluiten' : 'Menu' }}
      </button>
    </div>

    <div v-if="isMenuOpen" class="border-t border-white/10 px-6 py-4 lg:hidden">
      <nav class="flex flex-col gap-3">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-300"
          @click="onNavClick($event, item.href, true)"
        >
          {{ item.label }}
        </a>

        <PrimaryButton href="#contact" @click="onNavClick($event, '#contact', true)">
          Contact
        </PrimaryButton>
      </nav>
    </div>
  </header>
</template>
