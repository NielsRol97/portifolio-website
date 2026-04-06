<script lang="ts" setup>
const { services } = usePortfolioData()

import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="diensten" class="px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Wat ik doe"
        title="Werk dat technisch klopt en visueel rustig blijft."
        description="Geen opgeblazen bureauverhaal, maar projecten waarin structuur, onderhoudbaarheid en een nette gebruikerservaring samenkomen."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class="card-surface rounded-4xl p-8"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{{ service.eyebrow }}</p>
          <h3 class="mt-4 text-2xl font-bold text-white">{{ service.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-300">{{ service.description }}</p>
          <ul class="mt-6 space-y-3 text-sm text-slate-200">
            <li v-for="bullet in service.bullets" :key="bullet" class="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3">
              <span class="mt-0.5 text-cyan-300">✦</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
