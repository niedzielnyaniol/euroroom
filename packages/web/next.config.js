const domains = process.env.IMAGES_DOMAINS?.split(',') || [];
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
  async redirects() {
    return [
      {
        source: '/pl/pokoje.html',
        destination: '/rooms',
        permanent: true,
      },
      {
        source: '/en/o-nas.html',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/pl/o-nas.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pl/kontakt.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/pl/cennik.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pl/zarezerwuj.html',
        destination: '/rooms',
        permanent: true,
      },
      {
        source: '/pl/wycieczki-i-transfery',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/pl/grupy',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/pl/pokoje/apartament/dwuosobowy-apartament-mediolan.html',
        destination: '/rooms',
        permanent: true,
      },
      {
        source: '/pl/promocje.html',
        destination: '/rooms',
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
