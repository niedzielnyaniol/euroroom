const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../assets');

module.exports = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
    {
      name: 'storybook-css-modules',
      options: {
        cssModulesLoaderOptions: {
          importLoaders: 1,
          modules: {
            auto: true,
          },
        },
      },
    },
  ],
  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const rules = config.module.rules;

    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: { plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }] },
          },
        },
      ],
    });

    return config;
  },
};
