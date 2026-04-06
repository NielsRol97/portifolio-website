<script lang="ts" setup>
import { computed } from 'vue'
import portraitSrc from '@/assets/images/nielsrol.png'
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import StatCard from '@/components/ui/StatCard.vue'

const { hero, stats, profile } = usePortfolioData()

const portraitAlt = computed(() => `Portret van ${profile.name}, ${profile.role}`)
</script>

<template>
  <section id="home" class="px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      
      <!-- FOTO -->
      <div class="relative">
        <div class="absolute -top-10 -left-6 h-40 w-40 rounded-full bg-cyan-400/12 blur-3xl" />
        <div class="absolute -bottom-12 right-10 h-56 w-56 rounded-full bg-indigo-400/12 blur-3xl" />

        <div class="card-surface relative overflow-hidden rounded-4xl p-5">
          
          <div class="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/70">
            <img
              :src="portraitSrc"
              :alt="portraitAlt"
              width="900"
              height="1100"
              class="aspect-4/5 w-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            >
          </div>

          <div
            class="mt-4 rounded-2xl border border-white/10 bg-white/4 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,.03)]"
          >
            <p class="text-lg font-semibold text-white">
              {{ profile.name }}
            </p>

            <p class="mt-1 text-sm text-slate-400">
              {{ profile.role }}
            </p>
          </div>

        </div>
      </div>

      <!-- CONTENT -->
      <div>

        <span
          class="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200"
        >
          {{ hero.badge }}
        </span>

        <h1
          class="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]"
        >
          <span class="text-gradient">
            {{ hero.title }}
          </span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {{ hero.intro }}
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <PrimaryButton :href="hero.primaryCta.href">
            {{ hero.primaryCta.label }}
          </PrimaryButton>

          <PrimaryButton
            :href="hero.secondaryCta.href"
            variant="ghost"
          >
            {{ hero.secondaryCta.label }}
          </PrimaryButton>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">

          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500">
              Focus
            </p>

            <p class="mt-3 text-sm leading-7 text-slate-200">
              Laravel, Nuxt en het bouwen van moderne webapplicaties met een duidelijke structuur,
              herbruikbare componenten en aandacht voor performance.
            </p>
          </div>

          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500">
              Waar ik op let
            </p>

            <ul class="mt-3 space-y-3 text-sm text-slate-200">
              <li class="flex gap-3">
                <span class="text-cyan-300">→</span>
                <span>Duidelijke en consistente code</span>
              </li>

              <li class="flex gap-3">
                <span class="text-cyan-300">→</span>
                <span>Herbruikbare componentstructuur</span>
              </li>

              <li class="flex gap-3">
                <span class="text-cyan-300">→</span>
                <span>Performance en onderhoudbaarheid</span>
              </li>
            </ul>
          </div>

        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-3">
          <StatCard
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
            :description="stat.description"
          />
        </div>

        <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Beschikbaar voor nieuwe uitdagingen
          </span>

          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {{ profile.location }}
          </span>
        </div>

      </div>

    </div>
  </section>
</template>