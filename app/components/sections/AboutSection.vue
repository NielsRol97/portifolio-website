<script lang="ts" setup>
const { profile } = usePortfolioData()

</script>

<template>
  <section id="over-mij" class="px-6 py-20 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div class="card-surface rounded-4xl p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Over mij
        </p>

        <h2 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Full stack developer met focus op duidelijke structuur en onderhoudbare code.
        </h2>

        <p class="mt-5 text-base leading-8 text-slate-300">
          {{ profile.description }}
        </p>

        <p class="mt-5 text-base leading-8 text-slate-300">
          Ik werk graag aan projecten waar structuur en duidelijkheid belangrijk zijn. Code moet niet alleen vandaag werken, maar ook later goed te begrijpen en uit te breiden zijn. Daarom let ik op consistentie, herbruikbaarheid en een logische opbouw van applicaties.
        </p>
      </div>

      <div class="grid gap-6">
        <div class="card-surface rounded-4xl p-8">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Waar ik aan werk
          </p>

          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
              Webapplicaties met Laravel en Nuxt.
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
              Projecten waar structuur en onderhoudbaarheid belangrijk zijn.
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
              Websites en portfolio’s met duidelijke opbouw.
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
              Samenwerkingen waarbij helderheid en praktische oplossingen centraal staan.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
