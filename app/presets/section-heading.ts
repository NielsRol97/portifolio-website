export const sectionHeadingAlignments = {
  left: 'max-w-3xl',
  center: 'mx-auto max-w-3xl text-center',
} as const

export type SectionHeadingAlignment = keyof typeof sectionHeadingAlignments
