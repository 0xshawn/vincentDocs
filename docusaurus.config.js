// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Vincent',
  tagline: 'AI Agent Wallet Delegation Management',
  favicon: 'img/favicon.ico',
  url: 'https://docs.heyvincent.ai',
  baseUrl: '/',
  organizationName: 'LIT-Protocol',
  projectName: 'vincent',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/LIT-Protocol/vincentDocs',
          routeBasePath: '/',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/dark-mode.css'
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/lit-logo.svg',
      navbar: {
        logo: {
          alt: 'Vincent Logo',
          src: 'img/lit-logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'Docs',
            position: 'left',
          },
          {to: 'https://spark.litprotocol.com/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LIT-Protocol/Vincent',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/Why-Vincent',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+aa73FAF9Vp82ZjJh',
              },
              {
                label: 'Discord',
                href: 'https://getlit.dev/chat',
              },
              {
                label: 'X',
                href: 'https://x.com/litprotocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://spark.litprotocol.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LIT-Protocol/Vincent',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Vincent, Built by Lit`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
