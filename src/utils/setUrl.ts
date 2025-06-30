// src/utils/setUrl.ts

const site = import.meta.env.SITE || 'https://example.com';
const base = import.meta.env.BASE_URL || '/';

/**
 * Cek apakah URL menunjuk ke file (berdasarkan ekstensi)
 */
export function isFileUrl(url: string): boolean {
  const fileExtensions = [
    'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 
    'pdf', 'doc', 'docx', 'xls', 'xlsx', 
    'zip', 'rar', 'mp3', 'mp4', 'ico',
    'webmanifest', 'json', 'yaml',
  ];

  const match = url.match(/\.([a-zA-Z0-9]+)(?:\?|#|$)/);
  if (!match) return false;

  const ext = match[1].toLowerCase();
  return fileExtensions.includes(ext);
}

export function relUrl(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }
  const cleanBase = base.replace(/\/$/, '');
  const cleanUrl = url.replace(/^\/|\/$/g, '');

  if (!cleanUrl) return `${cleanBase}/`;

  const finalUrl = `${cleanBase}/${cleanUrl}`;
  return isFileUrl(url) ? finalUrl : `${finalUrl}/`;
}

export function absUrl(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }
  const cleanSite = site.replace(/\/$/, '');
  const cleanBase = base.replace(/\/$/, '');
  const cleanUrl = url.replace(/^\/|\/$/g, '');

  if (!cleanUrl) return `${cleanSite}${cleanBase}/`;

  const finalUrl = `${cleanSite}${cleanBase}/${cleanUrl}`;
  return isFileUrl(url) ? finalUrl : `${finalUrl}/`;
}


/*
Simple Optional:
export function absUrl(url: string) {
	return `${site.replace(/\/$/, '')}${relUrl(url)}`
}
*/