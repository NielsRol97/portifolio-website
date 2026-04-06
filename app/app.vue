<script lang="ts" setup>
const { profile } = usePortfolioData()

const siteTitle = `${profile.name} · ${profile.role}`
const siteDescription = 'Portfolio van Niels Rol, full stack developer gespecialiseerd in Laravel en Nuxt met focus op duidelijke architectuur, performance en onderhoudbare code.'
const socialImage = '/og-nielsrol.png'

useHead({
  htmlAttrs: {
    lang: 'nl',
  },
  titleTemplate: (title) => title ? `${title} · ${profile.name}` : siteTitle,
  meta: [
    { name: 'theme-color', content: '#020617' },
    { name: 'author', content: profile.name },
  ],
  script: [
    {
      key: 'ld-person',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.role,
        email: profile.email,
        telephone: profile.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Emmen',
          addressCountry: 'NL',
        },
        knowsAbout: ['Laravel', 'Nuxt', 'PHP', 'Vue', 'Tailwind CSS', 'Webontwikkeling'],
        sameAs: ['https://github.com/NielsRol97'],
      }),
    },
    {
      key: 'ld-website',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteTitle,
        inLanguage: 'nl-NL',
        description: siteDescription,
      }),
    },
  ],
})

if (import.meta.server) {
  useSeoMeta({
    title: siteTitle,
    description: siteDescription,
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogType: 'website',
    ogLocale: 'nl_NL',
    ogImage: socialImage,
    ogImageAlt: `Portret van ${profile.name}`,
    twitterCard: 'summary_large_image',
    twitterTitle: siteTitle,
    twitterDescription: siteDescription,
    twitterImage: socialImage,
    robots: 'index, follow',
  })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
