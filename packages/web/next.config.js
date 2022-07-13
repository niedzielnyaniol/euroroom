const domains = process.env.IMAGES_DOMAINS?.split(',') || [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains,
  },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  },
  webpack(config) {
    config.module.rules.push({
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

module.exports = nextConfig;
