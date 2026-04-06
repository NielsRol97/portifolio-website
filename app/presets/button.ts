export const buttonBase =
  'inline-flex items-center justify-center rounded-full font-semibold transition duration-200'

export const buttonVariants = {
  solid: 'bg-cyan-400 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-300',
  ghost: 'border border-white/15 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10',
} as const

export const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
} as const

export type ButtonVariant = keyof typeof buttonVariants
export type ButtonSize = keyof typeof buttonSizes
