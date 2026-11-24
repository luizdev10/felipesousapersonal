export function asset(arquivo) {
  if (!arquivo) return null
  return `${import.meta.env.BASE_URL}${arquivo.replace(/^\/+/, '')}`
}
