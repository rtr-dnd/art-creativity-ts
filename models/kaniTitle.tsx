
export const kaniTitleTag = (currentPosition: number): string => {
  if (currentPosition < 2) return '□'
  if (currentPosition < 7) return '🦀'
  if (currentPosition < 8) return '蟹□□'
  return '蟹工船'
}
