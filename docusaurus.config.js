const path = require('path');
const package = require('./package.json');

module.exports = {
  title: 'Native Elements',
  tagline: 'HTML elements with CSS superpowers.',
  url: 'https://native-elements.dev',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'n-elements',
  projectName: 'website',
  plugins: [
    path.resolve(__dirname, 'plugins/custom-webpack-plugin'),
    path.resolve(__dirname, './node_modules/docusaurus-lunr-search/')
  ],
  customFields: {
    version: package.version,
  },
  themeConfig: {
    disableDarkMode: true,
    image: 'img/share-image.png',
    googleAnalytics: {
      trackingID: 'UA-167955942-2',
      anonymizeIP: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight')
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Native Elements',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://app.native-elements.dev',
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
      copyright: `<a data-hide-icon href="https://opencollective.com/native-elements/donate" target="_blank" rel="noopener"><img src="https://opencollective.com/native-elements/donate/button@2x.png?color=blue" width="250" /></a><br /><small>&copy; ${new Date().getFullYear()} Native Elements is made by <a href="https://twitter.com/equinusocio" target="_blank" rel="noopener noreferrer" data-hide-icon>@equinusocio</a></small>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'src/docs',
          homePageId: 'getting-started/introduction',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/main.css'),
        },
      },
    ],
  ],
};
