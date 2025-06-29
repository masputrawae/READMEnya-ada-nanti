export const SITE_DEFAULT = {
	title: 'Putra Jaya',
	tagline: 'Manusia Biasa',
	logo: '/logo.webp',
	description: 'Ini ruang pribadiku untuk belajar, bereksperimen, dan bersenang-senang',
	thumbnail: '/thumbnail.webp',
	twitter: '@Masputrawae'
}

export const MENUS = {
	cta: [
		{ label: 'About', href: '/about/', primary: true },
		{ label: 'My Notes', href: '/notes/', primary: false }
	],

	main: [
		{ label: 'Home', href: '/', icon: 'icon-home' },
		{ label: 'Projects', href: '/projects/', icon: 'icon-wrench-screwdriver' },
		{ label: 'About', href: '/about/', icon: 'icon-person-circle' },
		{ label: 'Notes', href: '/notes/', icon: 'icon-pencil-square' },
		{ label: 'Gallery', href: '/gallery/', icon: 'icon-photo' }
	],

	social: [
		{ label: 'Instagram', href: 'https://www.instagram.com/masputrawae/', icon: 'icon-instagram' },
		{ label: 'Github', href: 'https://github.com/masputrawae/', icon: 'icon-github' },
		{ label: 'Discord', href: 'https://discord.gg/nM4EP8DJFZ', icon: 'icon-discord' }
	]
}
