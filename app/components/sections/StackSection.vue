<script lang="ts" setup>
const { stackGroups } = usePortfolioData()
</script>

<template>
  <section class="px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Stack & expertise
        </p>
        <h2 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
          De tools zijn niet het verhaal, maar de basis moet wel kloppen.
        </h2>
        <p class="mt-5 text-base leading-8 text-slate-300">
          Dit zijn de technieken en onderwerpen waar ik het meest mee werk als structuur, performance en onderhoudbaarheid belangrijk zijn.
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article
          v-for="group in stackGroups"
          :key="group.title"
          class="rounded-4xl border border-white/10 bg-white/5 p-8"
        >
          <h3 class="text-xl font-bold text-white">{{ group.title }}</h3>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-200"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>