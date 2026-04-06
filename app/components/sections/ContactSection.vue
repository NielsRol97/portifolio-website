<script lang="ts" setup>
const { profile } = usePortfolioData()

import PrimaryButton from '@/components/ui/PrimaryButton.vue'
</script>

<template>
  <section id="contact" class="px-6 pb-24 pt-20 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="card-surface rounded-4xl p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Contact
        </p>

        <h2 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Neem gerust contact op
        </h2>

        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Heb je een vraag of wil je meer weten over mijn werk? Je kunt me bereiken via e-mail. Ik sta open voor nieuwe projecten, samenwerkingen of andere mogelijkheden om ervaring op te doen.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500">E-mail</p>
            <a :href="`mailto:${profile.email}`" class="mt-3 block text-lg font-semibold text-white transition hover:text-cyan-200">
              {{ profile.email }}
            </a>
          </div>

          <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Locatie</p>
            <p class="mt-3 text-lg font-semibold text-white">{{ profile.location }}</p>
          </div>
        </div>
      </div>

      <div class="card-surface rounded-4xl p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Overzicht</p>

        <ul class="mt-6 space-y-4 text-sm leading-7 text-slate-200">
          <li class="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3">
            <span class="text-cyan-300">01</span>
            <span>Full stack developer (Laravel & Nuxt)</span>
          </li>
          <li class="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3">
            <span class="text-cyan-300">02</span>
            <span>Focus op duidelijke en onderhoudbare code</span>
          </li>
          <li class="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3">
            <span class="text-cyan-300">03</span>
            <span>Ervaring met webapplicaties en websites</span>
          </li>
          <li class="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3">
            <span class="text-cyan-300">04</span>
            <span>Interesse in moderne development workflows</span>
          </li>
        </ul>

        <div class="mt-8">
          <PrimaryButton :href="`mailto:${profile.email}`">
            E-mail sturen
          </PrimaryButton>
        </div>
      </div>
    </div>
  </section>
</template>
