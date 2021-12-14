import Pages from "@/constants/pageData";

export const GLOBAL_DATA = {
  headerContent: {
    backgroundImage: {
      url: "/home_background_v2.png",
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
      { label: "Facebook", url: "https://www.facebook.com/songeraudio/" },
      { label: "Twitter", url: "https://twitter.com/songeraudio" },
      { label: "Instagram", url: "https://www.instagram.com/songeraudio/" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/songeraudio/",
      },
      { label: "YouTube", url: "https://www.youtube.com/user/songeraudio" },
    ],
  },
  navItems: [
    {
      label: "HOME",
      href: "/",
      theme: "olive",
      role: "link",
      header: true,
    },
    {
      label: "PRODUCTS",
      href: "/products",
      theme: "green",
      role: "link",
      header: true,
    },
    {
      label: "GALLERY",
      href: "/gallery",
      theme: "red",
      role: "link",
      header: true,
    },
    {
      label: "TECHNOLOGY",
      href: "/technology",
      theme: "orange",
      role: "link",
      header: true,
    },
    {
      label: "NEWS",
      href: "/news",
      theme: "green",
      role: "link",
      header: true,
    },
    {
      label: "ABOUT",
      href: "/about",
      theme: "blue",
      role: "link",
      header: false,
    },
    {
      label: "CONTACT",
      href: "/contact",
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
