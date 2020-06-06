const path = require('path');
const package = require('./package.json');

module.exports = {
  title: 'Native Elements',
  tagline: 'HTML elements with CSS superpowers.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
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
      copyright: `<strong style="vertical-align: super;">Supported by: </strong><a href="https://a.paddle.com/v2/click/16413/37697?link=1227" target="_blank" data-hide-icon><img src="https://img.shields.io/badge/VSCode%20Power%20User-gray.svg?colorA=655BE1&colorB=4F44D6&style=for-the-badge"/></a> <a href="https://a.paddle.com/v2/click/16413/37697?link=2345" target="_blank" data-hide-icon><img src="https://img.shields.io/badge/Node%20Cli.com%20-gray.svg?colorA=61c265&colorB=4CAF50&style=for-the-badge"/></a><br />&copy; ${new Date().getFullYear()} Native Elements is made by <a href="https://twitter.com/equinusocio" target="_blank" rel="noopener noreferrer" data-hide-icon>@equinusocio</a> and <a href="https://twitter.com/iamoctod" target="_blank" rel="noopener noreferrer" data-hide-icon>@iamoctod</a>`,
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
