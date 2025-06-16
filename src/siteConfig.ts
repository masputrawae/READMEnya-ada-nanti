export const siteConfig = {
	title: 'MasPutraWae',
	author: 'Putra Jaya',
	logo: '/logo.png',
	thumbnail: 'https://placehold.co/600x400',
	tagline: 'Manusia Biasa',
	description: 'Consectetur incididunt velit commodo id voluptate elit.',
	keyword: ['Portfolio', 'Blog', 'About Me', 'Projects'],
	twitter: '@Masputrawae',

	cta: [
		{ label: 'About', url: '/about', primary: true },
		{ label: 'Discord', url: 'https://example.com', primary: false }
	],

	menus: {
		main: [
			{ label: 'Home', url: '/', icon: 'icon-home' },
			{ label: 'About', url: '/about', icon: 'icon-person-circle' },
			{ label: 'Projects', url: '/projects', icon: 'icon-wrench-screwdriver' },
			{ label: 'Blog', url: '/blogs', icon: 'icon-pencil-square' },
			{ label: 'Tags', url: '/tags', icon: 'icon-tag' }
		],
		social: [
			{ label: 'Instagram', url: 'https://example.com', icon: 'icon-instagram' },
			{ label: 'Github', url: 'https://example.com', icon: 'icon-github' },
			{ label: 'Discord', url: 'https://example.com', icon: 'icon-discord' }
		]
	}
}
