export const statCardBase =
  'rounded-3xl border p-6 shadow-2xl shadow-slate-950/30 backdrop-blur'

export const statCardTones = {
  default: 'border-white/10 bg-white/5',
  muted: 'border-white/5 bg-white/3',
} as const

export type StatCardTone = keyof typeof statCardTones
