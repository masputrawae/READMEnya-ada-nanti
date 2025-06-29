// src/utils/setUrl.ts

const site = import.meta.env.SITE || 'https://example.com'
const base = import.meta.env.BASE_URL || '/'

export function relUrl(url: string) {
	if (/^https?:\/\//i.test(url)) {
		return url
	}
	const cleanBase = base.replace(/\/$/, '')
	const cleanUrl = url.replace(/^\/|\/$/g, '')
	if (!cleanUrl) return `${cleanBase}/`
	return `${cleanBase}/${cleanUrl}/`
}

export function absUrl(url: string) {
	return `${site.replace(/\/$/, '')}${relUrl(url)}`
}

/*
Optional:

export function absUrl(url: string) {
	if (/^https?:\/\//i.test(url)) {
		return url
	}
	const cleanSite = site.replace(/\/$/, '');
	const cleanBase = base.replace(/\/$/, '');
	const cleanUrl = url.replace(/^\/|\/$/g, '');
	if (!cleanUrl) return `${cleanSite}${cleanBase}/`;
	return `${cleanSite}${cleanBase}/${cleanUrl}/`;
}
*/