<script lang="ts" setup>
const { process } = usePortfolioData()

import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="werkwijze" class="px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Werkwijze"
        title="Rustige opbouw werkt beter dan heroïsche chaos."
        description="Een nette basis scheelt later gedoe. Daarom begin ik met helderheid, dan structuur, en pas daarna met bouwen."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-4">
        <article
          v-for="item in process"
          :key="item.step"
          class="card-surface rounded-4xl p-7"
        >
          <div class="flex items-center justify-between">
            <p class="text-4xl font-black text-white/15">{{ item.step }}</p>
            <span class="h-10 w-10 rounded-full border border-cyan-300/20 bg-cyan-400/10" />
          </div>
          <h3 class="mt-5 text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-300">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
