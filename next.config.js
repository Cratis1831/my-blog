/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["storage.live.com"],
  },
};

module.exports = nextConfig;
