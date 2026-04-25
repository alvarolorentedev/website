// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Alvaro Lorente | Fractional CTO, Engineering Strategy & Architecture",
  tagline:
    "Fractional CTO helping software companies sharpen engineering strategy, architecture, and delivery systems.",
  url: "https://alvarolorente.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
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
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
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
            "Alvaro Lorente is a fractional CTO based in Spain helping software companies improve engineering strategy, architecture, delivery, and leadership.",
        },
        {
          name: "keywords",
          content:
            "fractional cto, engineering strategy, software architecture, engineering leadership, platform engineering, technical advisory, software delivery",
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
          { to: "/blog", label: "Articles", position: "left" },
          { to: "/chat", label: "Virtual Me", position: "right" },
          {
            to: "https://theengineeringtax.com/",
            label: "Newsletter",
            position: "right",
          },
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
                label: "GitHub",
                href: "https://www.github.com/alvarolorentedev",
              },
              {
                label: "X",
                href: "https://x.com/lorentedev",
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
              {
                label: "Newsletter",
                href: "https://theengineeringtax.com/",
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
