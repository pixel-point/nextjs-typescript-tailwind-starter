/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // TODO: Add webpack rules for SVG optimization inline + url
};

module.exports = nextConfig;
