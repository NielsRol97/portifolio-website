<script lang="ts" setup>
const { projects } = usePortfolioData()

import SectionHeading from '@/components/ui/SectionHeading.vue'
import TagPill from '@/components/ui/TagPill.vue'
</script>

<template>
  <section id="projecten" class="px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Projecten"
        title="Concrete builds waarin structuur belangrijker is dan spektakel."
        description="Geen losse screenshots, maar projecten die laten zien hoe ik componenten opbouw, keuzes maak en frontend en backend laat samenwerken."
      />

      <div class="mt-12 grid gap-6">
        <article
          v-for="project in projects"
          :key="project.slug"
          class="card-surface grid gap-8 rounded-4xl p-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{{ project.category }}</p>
              <span
                v-if="project.featured"
                class="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200"
              >
                Uitgelicht
              </span>
            </div>

            <h3 class="mt-4 text-3xl font-bold text-white">{{ project.title }}</h3>
            <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {{ project.summary }}
            </p>
            <p class="mt-4 text-sm font-medium text-slate-100/90">
              {{ project.impact }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <TagPill v-for="item in project.stack" :key="item" :label="item" />
            </div>
          </div>

          <div class="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.03)]">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Highlights</p>
            <ul class="mt-5 space-y-4">
              <li v-for="result in project.results" :key="result" class="flex gap-3 text-sm leading-6 text-slate-200">
                <span class="text-cyan-300">→</span>
                <span>{{ result }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
