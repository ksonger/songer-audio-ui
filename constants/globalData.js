import Pages from "@/constants/pageData";

export const GLOBAL_DATA = {
  headerContent: {
    backgroundImage: {
      url: "home_background_v2.png",
      width: 2000,
      height: 1491,
      alt: "Onimaru",
      focalPoint: [0.5, 0.1],
    },
  },
  footerContent: {
    siteDescription: `Songer Audio produces finely crafted field coil drivers and loudspeakers, 100% hand-made in the USA in Oregon.`,
    siteCopyright: "&copy; 2021 Songer Audio",
    socialMediaLinks: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/Songer-Audio-225994622166706",
      },
      { label: "Instagram", url: "https://www.instagram.com/songeraudio/" },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UC0bsNYHQkEIrQjHg38BLiJw",
      },
    ],
  },
  navItems: [
    {
      label: "HOME",
      id: "home",
      href: "/",
      theme: "olive",
      role: "link",
      header: true,
    },
    {
      label: "PRODUCTS",
      id: "products",
      href: "/products",
      theme: "green",
      role: "link",
      header: true,
      subitems: [
        {
          label: "S1",
          id: "s1",
          href: "/products/s1",
        },
        {
          label: "S1x",
          id: "s1x",
          href: "/products/s1x",
        },
        {
          label: "S2",
          id: "s2",
          href: "/products/s2",
        },
        {
          label: "PS1",
          id: "ps1",
          href: "/products/ps1",
        },
      ],
    },
    {
      label: "NEWS",
      id: "news",
      href: "/news",
      theme: "green",
      role: "link",
      header: true,
      subitems: [
        {
          label: "Press & Awards",
          id: "press",
          href: "news/press",
        },
        {
          label: "Latest News",
          id: "news",
          href: "/news",
        },
      ],
    },
    {
      label: "ABOUT",
      id: "about",
      href: "/about",
      theme: "blue",
      role: "link",
      header: true,
      subitems: [
        {
          label: "Technology",
          id: "technology",
          href: "about/technology",
        },
        {
          label: "Songer Audio",
          id: "about",
          href: "/about",
        },
      ],
    },
    {
      label: "LISTEN",
      id: "listen",
      href: "/listen",
      theme: "green",
      role: "link",
      header: true,
      subitems: [
        {
          label: "Audio Shows",
          id: "shows",
          href: "/listen/shows",
        },
        {
          label: "By Appointment",
          id: "appointment",
          href: "/listen/appointment",
        },
      ],
    },
    {
      label: "CONTACT",
      id: "contact",
      href: "/contact",
      theme: "purple",
      headerDisplay: "compact",
      role: "button",
      header: true,
    },
    {
      label: "GALLERY",
      id: "gallery",
      href: "/gallery",
      theme: "red",
      role: "link",
      header: true,
    },
    {
      label: "RESERVE",
      id: "reserve",
      href: "/reserve",
      theme: "purple",
      headerDisplay: "compact",
      role: "button",
      header: false,
    },
  ],
  ...Pages,
  siteInfo: {
    title: "Songer Audio Loudspeakers",
    description: `Songer Audio is a maker of finely crafted field coil drivers and loudspeakers, 100% hand-made in the USA.`,
  },
  localeInfo: {
    locale: "en",
    language: "en-US",
  },
};
