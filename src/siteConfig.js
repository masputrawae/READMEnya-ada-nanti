export const DEFAULT_PARAMS = {
  siteTitle: 'MasPutraWae',

  owner: {
    name: 'Putra Jaya',
    tagline: 'Manusia Biasa',
    logo: 'https://res.cloudinary.com/dpkqfchhu/image/upload/android-chrome-512x512_bemxsc.png',
  },

  cta: [
    { name: 'About', url: '/about', primary: true },
    { name: 'Discord', url: 'https://example.com', primary: false },
  ],

  meta: {
    author: 'Putra Jaya',
    thumbnail: 'https://placehold.co/600x400',
    keywords: ['blog', 'home', 'other'],
    description: 'Aliquip cillum do aliquip.',
    twitter: '@Masputrawae',
  },
}

export const MENUS = {
  main: [
    { name: 'Home', url: '/', icon: 'icon-home' },
    { name: 'About', url: '/about', icon: 'icon-person-circle' },
    { name: 'Projects', url: '/projects', icon: 'icon-wrench-screwdriver' },
    { name: 'Blog', url: '/blog', icon: 'icon-pencil-square' },
  ],
  social: [
    { name: 'Instagram', url: 'https://example.com', icon: 'icon-instagram' },
    { name: 'Github', url: 'https://example.com', icon: 'icon-github' },
    { name: 'Discord', url: 'https://example.com', icon: 'icon-discord' },
  ],
}
