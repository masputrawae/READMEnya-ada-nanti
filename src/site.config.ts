// site.config.ts
export const SITE_URL = import.meta.env.SITE || 'https://example.com'
export const BASE_URL = import.meta.env.BASE_URL || '/'

export const SITE_PARAMS = {
  baseUrl: `${SITE_URL}${BASE_URL}`,
  siteTitle: 'Putra Jaya',
  tagline: 'Manusia Biasa',
  author: 'Putra Jaya',
  logo: '/logo.webp',
  image: '/default-image.webp',
  description: 'Reprehenderit aliquip cupidatat qui dolore.',
}