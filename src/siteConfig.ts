// src/siteConfig.ts

export const siteParams = {
  title: "MasPutraWae",
  author: "Putra Jaya",
  logo: "/logo.png",
  thumbnail: "https://placehold.co/600x400",
  tagline: "Manusia Biasa",
  description: "Consectetur incididunt velit commodo id voluptate elit.",
  keyword: ["Portfolio", "Blog", "About Me", "Projects"],
  twitter: "@Masputrawae",

  cta: [
    { name: "About", url: "/about", primary: true },
    { name: "Discord", url: "https://example.com", primary: false },
  ],

  menus: {
    main: [
      { name: "Home", url: "/", icon: "icon-home.svg" },
      { name: "About", url: "/about", icon: "icon-person-circle.svg" },
      { name: "Projects", url: "/projects", icon: "icon-wrench-screwdriver.svg" },
      { name: "Blog", url: "/blogs", icon: "icon-pencil-square.svg" },
      { name: "Tags", url: "/tags", icon: "icon-tag.svg" },
    ],
    social: [
      { name: "Instagram", url: "https://example.com", icon: "icon-instagram.svg" },
      { name: "Github", url: "https://example.com", icon: "icon-github.svg" },
      { name: "Discord", url: "https://example.com", icon: "icon-discord.svg" },
    ],
  },
};
