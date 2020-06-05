const path = require('path');
const package = require('./package.json');

module.exports = {
  title: 'Native Elements',
  tagline: 'HTML elements with CSS superpowers',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'n-elements',
  projectName: 'website',
  plugins: [
    path.resolve(__dirname, 'plugins/custom-webpack-plugin')
  ],
  customFields: {
    version: package.version,
  },
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: '',
      logo: {
        alt: 'Native Elements',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://native-elements.netlify.app',
          label: 'Theme Builder',
          position: 'right',
        },
        {
          href: 'https://github.com/n-elements/core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Native Elements is made by Mattia Astorino & Paolo Roth`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/main.css'),
        },
      },
    ],
  ],
};
