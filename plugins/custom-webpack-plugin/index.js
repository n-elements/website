/* eslint-disable no-param-reassign, @typescript-eslint/no-var-requires */
const isProd = process.env.NODE_ENV === 'production';

module.exports = () => ({
  name: 'custom-webpack-plugin',
  configureWebpack(config, isServer, utils) {
    const { getStyleLoaders } = utils;
    config.module.rules = config.module.rules.filter(rule => !rule.test || !rule.test.toString().includes('module'));
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('css')) {
        rule.use.push('postcss-loader');
      }
    });
    return {
      module: {
        rules: [
          {
            test: /\.module.css$/,
            use: [
              ...getStyleLoaders(false, {
                importLoaders: 1,
                modules: {
                  localIdentName: isProd ? '[hash:base64:4]' : '[local]-[hash:base64:4]',
                },
              }),
              'postcss-loader',
            ],
          },
          {
            test: /\.html$/,
            use: 'file-loader',
          },
        ],
      },
    };
  },
});
