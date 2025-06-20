// Untuk SITE_CONFIG
interface SiteConfig {
	title?: string
	author?: string
	logo?: string
	thumbnail?: string
	tagline?: string
	description?: string
	keyword?: string[]
	twitter?: string
}

// Untuk MENUS
interface MenuItem {
	label: string
	url: string
	icon?: string
	primary?: boolean
}

interface MenuConfig {
	cta?: MenuItem[]
	main?: MenuItem[]
	footer?: MenuItem[]
	social?: MenuItem[]
}

export const SITE_CONFIG: SiteConfig = {
	title: 'MasPutraWae',
	author: 'Putra Jaya',
	logo: '/logo.webp',
	thumbnail: '/default-thumbnail.webp',
	tagline: 'Manusia Biasa',
	description: 'Consectetur incididunt velit commodo id voluptate elit.',
	keyword: ['Portfolio', 'Blog', 'About Me', 'Projects'],
	twitter: '@Masputrawae'
}

export const MENUS: MenuConfig = {
	cta: [
		{ label: 'About', url: '/about/', primary: true },
		{ label: 'Lihat Catatan', url: '/notes/', primary: false }
	],
	main: [
		{ label: 'Home', url: '/', icon: 'icon-home' },
		{ label: 'About', url: '/about/', icon: 'icon-person-circle' },
		{ label: 'Projects', url: '/projects/', icon: 'icon-wrench-screwdriver' },
		{ label: 'Notes', url: '/notes/', icon: 'icon-pencil-square' },
		// { label: 'Tags', url: '/tags/', icon: 'icon-tag' }
	],
	footer: [
		{ label: 'Disclaimer', url: '/disclaimer/' },
		{ label: 'License', url: '/license/' },
		{ label: 'About', url: '/about/' }
	],
	social: [
		{ label: 'Instagram', url: 'https://example.com', icon: 'icon-instagram' },
		{ label: 'Github', url: 'https://example.com', icon: 'icon-github' },
		{ label: 'Discord', url: 'https://example.com', icon: 'icon-discord' }
	]
}
