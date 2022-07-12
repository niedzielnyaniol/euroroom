const domains = process.env.IMAGES_DOMAINS?.split(',') || [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains,
  },
};

module.exports = nextConfig;
