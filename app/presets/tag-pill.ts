export const tagPillTones = {
  default: 'border border-white/10 bg-white/5 text-slate-200',
  muted: 'border border-white/5 bg-white/3 text-slate-400',
} as const

export type TagPillTone = keyof typeof tagPillTones
