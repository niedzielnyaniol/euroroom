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
};

module.exports = nextConfig;
