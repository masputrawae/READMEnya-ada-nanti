// src/utils/setUrl.ts

const site = import.meta.env.SITE || 'https://example.com'
const base = import.meta.env.BASE_URL || '/'

export function relUrl(url: string) {
  const cleanBase = base.replace(/\/$/, '');
  const cleanUrl = url.replace(/^\/|\/$/g, '');
  if (!cleanUrl) return `${cleanBase}/`;
  return `${cleanBase}/${cleanUrl}/`;
}


export function absUrl(url: string) {
	return `${site.replace(/\/$/, '')}${relUrl(url)}`
}
