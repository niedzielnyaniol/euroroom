module.exports = {
  "stories": [
    "../components/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@chakra-ui/storybook-addon',
    {
      name: "storybook-css-modules",
      options: {
        cssModulesLoaderOptions: {
          importLoaders: 1,
          modules: {
            auto: true
          },
        },
      },
    },
  ],
  features: {
    emotionAlias: false,
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}