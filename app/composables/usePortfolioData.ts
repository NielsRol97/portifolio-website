import type {
  FaqItem,
  NavItem,
  ProcessStep,
  ProjectItem,
  ServiceItem,
  StackGroup,
  StatItem,
  TestimonialItem,
} from '@/types/portfolio'

export const usePortfolioData = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Diensten', href: '#diensten' },
    { label: 'Projecten', href: '#projecten' },
    { label: 'Werkwijze', href: '#werkwijze' },
    { label: 'Over mij', href: '#over-mij' },
    { label: 'Contact', href: '#contact' },
  ]

  const stats: StatItem[] = [
    {
      value: '2+ jaar',
      label: 'praktische ervaring',
      description: 'Hands-on ervaring met Laravel, Nuxt en het bouwen van moderne webapplicaties.',
    },
    {
      value: '10+',
      label: 'projecten gebouwd',
      description: 'Van portfolio sites tot maatwerk applicaties met focus op schaalbaarheid.',
    },
    {
      value: 'Focus',
      label: 'clean code',
      description: 'Duidelijke structuur, onderhoudbare architectuur en performance-first mindset.',
    },
  ]

const services: ServiceItem[] = [
  {
    eyebrow: 'Wat ik bouw',
    title: 'Webapplicaties',
    description:
      'Ik ontwikkel webapplicaties met Laravel en Nuxt, met focus op duidelijke structuur, herbruikbare componenten en onderhoudbare code.',
    bullets: [
      'Laravel API backends',
      'Nuxt frontends',
      'Praktische en schaalbare oplossingen',
    ],
  },
  {
    eyebrow: 'Wat ik verbeter',
    title: 'Bestaande projecten',
    description:
      'Ik werk ook aan bestaande projecten, bijvoorbeeld om structuur te verbeteren, code op te schonen of nieuwe functionaliteit toe te voegen.',
    bullets: [
      'Refactoring en structurering',
      'Debugging en optimalisatie',
      'Uitbreiden van bestaande features',
    ],
  },
  {
    eyebrow: 'Wat ik daarnaast maak',
    title: 'Websites & portfolio’s',
    description:
      'Ik bouw snelle en overzichtelijke websites met moderne tools, met aandacht voor performance en consistente opbouw.',
    bullets: [
      'Nuxt en Tailwind',
      'Responsive layouts',
      'Duidelijke componentstructuur',
    ],
  },
]

const projects: ProjectItem[] = [
  {
    slug: 'portfolio-site',
    category: 'Frontend project',
    title: 'Developer Portfolio',
    summary:
      'Persoonlijke portfolio website ontwikkeld met Nuxt en Tailwind, gericht op performance, duidelijke structuur en herbruikbare componenten.',
    impact: 'Overzichtelijke presentatie van projecten en technische vaardigheden.',
    stack: ['Nuxt', 'Vue', 'Tailwind'],
    results: [
      'Component gebaseerde opbouw',
      'Responsive design',
      'Focus op performance en structuur',
    ],
    featured: true,
  },
  {
    slug: 'laravel-api',
    category: 'Backend project',
    title: 'Laravel API',
    summary:
      'REST API gebouwd met Laravel voor het beheren van data en communicatie tussen frontend en backend.',
    impact: 'Duidelijke structuur voor data verwerking en uitbreidbaarheid.',
    stack: ['Laravel', 'MySQL', 'REST API'],
    results: [
      'Gescheiden backend structuur',
      'CRUD functionaliteit',
      'Voorbereid op uitbreiding',
    ],
  },
  {
    slug: 'dashboard-project',
    category: 'Full stack project',
    title: 'Dashboard applicatie',
    summary:
      'Dashboard applicatie met Laravel en Nuxt voor het weergeven en beheren van gegevens in een overzichtelijke interface.',
    impact: 'Inzichtelijke weergave van data via een gestructureerde UI.',
    stack: ['Laravel', 'Nuxt', 'Tailwind'],
    results: [
      'Overzichtelijke interface',
      'Herbruikbare componenten',
      'Logische projectstructuur',
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Analyse',
    description:
      'Eerst duidelijk krijgen wat er gebouwd moet worden, welke structuur logisch is en welke techniek het beste past bij het project.',
  },
  {
    step: '02',
    title: 'Opzet',
    description:
      'Opzetten van een duidelijke basis met een logische mappenstructuur, componentindeling en consistente werkwijze.',
  },
  {
    step: '03',
    title: 'Ontwikkeling',
    description:
      'Implementatie van features met aandacht voor leesbare code, herbruikbare componenten en performance.',
  },
  {
    step: '04',
    title: 'Verbetering',
    description:
      'Testen, optimaliseren en zorgen dat de applicatie goed uitbreidbaar blijft voor toekomstige aanpassingen.',
  },
]

  const stackGroups: StackGroup[] = [
    {
      title: 'Backend & architectuur',
      items: ['Laravel', 'PHP', 'REST API', 'Queues', 'Redis', 'MySQL', 'Clean architecture'],
    },
    {
      title: 'Frontend & UX',
      items: ['Nuxt', 'Vue', 'Tailwind CSS', 'Responsive design', 'Toegankelijkheid', 'Performance-first'],
    },
    {
      title: 'Werkwijze',
      items: ['Refactoring', 'Code reviews', 'Deploy flows', 'SEO basis', 'Analytische debugging', 'Praktisch advies'],
    },
  ]

  const testimonials: TestimonialItem[] = [
    {
      quote:
        'Wat ik fijn vond: geen wollig bureauverhaal, maar iemand die snel snapt waar de bottleneck zit en het vervolgens degelijk oplost.',
      name: 'Martijn de Vries',
      role: 'Operationeel manager',
    },
    {
      quote:
        'Onze oude applicatie voelde als een mijnenveld. Nu hebben we eindelijk iets waar nieuwe features niet standaard drie onverwachte bugs cadeau geven.',
      name: 'Sanne Kok',
      role: 'Product owner',
    },
  ]

  const faqs: FaqItem[] = [
    {
      question: 'Werk je alleen voor grote trajecten?',
      answer:
        'Nee. Ik help zowel bij complete builds als bij gerichte trajecten zoals een landing page, technische audit, performance-optimalisatie of een herstructurering van bestaand werk.',
    },
    {
      question: 'Kun je ook aansluiten op een bestaand Laravel of Nuxt project?',
      answer:
        'Ja. Mits de basis niet volledig in brand staat. En als die dat wel doet, zeg ik dat ook gewoon eerlijk, inclusief wat er eerst moet worden rechtgetrokken.',
    },
    {
      question: 'Denk je ook mee over inhoud en positionering?',
      answer:
        'Absoluut. Een portfolio zonder scherpe boodschap is gewoon een digitale vitrinekast met TL-licht. Mooie code is fijn, maar duidelijke positionering verkoopt.',
    },
  ]

  return {
    hero: {
      badge: 'Laravel / Nuxt Full stack developer',

      title:
        'Portfolio en projecten gericht op moderne webontwikkeling en duidelijke architectuur.',

      intro:
        'Ik ontwikkel webapplicaties en websites met Laravel en Nuxt, met focus op structuur, onderhoudbaarheid en performance.',

      primaryCta: {
        label: 'Bekijk GitHub',
        href: 'https://github.com/NielsRol97?tab=repositories',
      },

      secondaryCta: {
        label: 'Bekijk projecten',
        href: '#projecten',
      },
    },
    navItems,
    stats,
    services,
    projects,
    process,
    stackGroups,
    testimonials,
    faqs,
    profile: {
      name: 'Niels Rol',
role: 'Full stack developer (Laravel / Nuxt)',
description:
  'Full stack developer gespecialiseerd in Laravel en Nuxt. Ik bouw snelle, moderne webapplicaties met duidelijke structuur, sterke performance en een solide basis voor toekomstige groei.',      location: 'Emmen, Nederland · Remote / op locatie',
      email: 'rolniels@gmail.com',
      phone: '+31655907454',
    },
  }
}
