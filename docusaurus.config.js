// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Alvaro Lorente, Fractional CTO & Founder",
  tagline:
    "Engineering leadership independant consultant. Passionate about supporting others make the correct strategic decision.",
  url: "https://alvarolorente.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "alvarolorentedev",
  projectName: "website",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/alvarolorentedev/website/tree/main/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Alvaro Lorente`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo-small.png",
      metadata: [
        {
          name: "description",
          content:
            "Engineering leadership independant consultant. Passionate about supporting others make the correct strategic decision.",
        },
        {
          name: "keywords",
          content:
            "leadership,developer,engineer,founder,fullstack,cloud,cloud-native,open-source",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        title: "Alvaro Lorente",
        logo: {
          alt: "Alvaro Lorente Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          { to: "/services", label: "Services", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/talks", label: "Talks", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "right" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email me",
                href: "mailto:contact@alvarolorente.dev",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/alvarolorentedev",
              },
              {
                label: "Github",
                href: "https://www.github.com/alvarolorentedev",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/alvarolorentedev",
              },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About me",
                to: "/",
              },
              {
                label: "Services",
                to: "/services",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Talks",
                to: "/talks",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Blog feed",
            items: [
              {
                label: "RSS",
                to: "/blog/rss.xml",
              },
              {
                label: "Atom",
                to: "/blog/atom.xml",
              },
              {
                label: "JSON",
                to: "/blog/feed.json",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023-${new Date().getFullYear()} Alvaro Lorente.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
