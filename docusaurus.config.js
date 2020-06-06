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
      copyright: `&copy; ${new Date().getFullYear()} Native Elements is made by <a href="https://twitter.com/equinusocio">@equinusocio</a> & <a href="https://twitter.com/iamoctod">@iamoctod
      </a>`,
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
