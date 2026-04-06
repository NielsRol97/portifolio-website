export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  description: string
}

export interface ServiceItem {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
}

export interface ProjectItem {
  slug: string
  category: string
  title: string
  summary: string
  impact: string
  stack: string[]
  results: string[]
  featured?: boolean
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface StackGroup {
  title: string
  items: string[]
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
}

export interface FaqItem {
  question: string
  answer: string
}