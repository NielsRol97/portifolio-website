<script lang="ts" setup>
const { navItems, profile } = usePortfolioData()
const { handleAnchorClick } = useSmoothScroll()

const year = new Date().getFullYear()

function onNavClick(e: MouseEvent, href: string) {
  handleAnchorClick(e, href)
}
</script>

<template>
  <footer class="mt-8 border-t border-white/10">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Portfolio
        </p>
        <h2 class="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Gebouwd met aandacht voor structuur, performance en een rustige visuele basis.
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Een compacte developer portfolio in Nuxt en Tailwind, met focus op duidelijke componenten en onderhoudbare opbouw.
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <p class="text-sm font-semibold text-white">Navigatie</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-300">
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" class="transition hover:text-white" @click="onNavClick($event, item.href)">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-semibold text-white">Contact</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-300">
            <li>{{ profile.name }}</li>
            <li>{{ profile.location }}</li>
            <li>
              <a :href="`mailto:${profile.email}`" class="transition hover:text-white">
                {{ profile.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 px-6 py-5 text-sm text-slate-400 lg:px-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} {{ profile.name }}. Gebouwd met Nuxt en Tailwind.</p>
        <p>Emmen, Nederland</p>
      </div>
    </div>
  </footer>
</template>
