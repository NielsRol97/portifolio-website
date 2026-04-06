<template>
  <div class="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 antialiased">
    <div class="fixed inset-0 -z-30 bg-[linear-gradient(180deg,#020617_0%,#08111f_42%,#020617_100%)]" />
    <div class="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(15,118,110,0.12),transparent_24%)]" />
    <div class="grid-fade-mask fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-size-[36px_36px]" />
    <div class="pointer-events-none fixed inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-cyan-400/8 to-transparent" />

    <SiteHeader />

    <main>
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>
