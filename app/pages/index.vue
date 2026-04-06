<script lang="ts" setup>
import { useRequestURL } from '#app'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import StackSection from '@/components/sections/StackSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const { profile } = usePortfolioData()
const requestUrl = useRequestURL()
const canonicalUrl = requestUrl.origin === 'http://localhost:3000'
  ? undefined
  : requestUrl.href

const pageTitle = `${profile.name} · ${profile.role}`
const pageDescription = 'Full stack developer uit Emmen, gespecialiseerd in Laravel en Nuxt. Portfolio met moderne webapplicaties, websites en projecten met focus op performance en onderhoudbare code.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
})

useHead({
  link: canonicalUrl
    ? [
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
      ]
    : [],
})
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <ProcessSection />
    <AboutSection />
    <StackSection />
    <ContactSection />
  </div>
</template>
