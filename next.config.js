/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // TODO: Add webpack rules for SVG optimization inline + url
  // TODO: Not related to his file - Add husky, markdownlint, commitlint
  // TODO: Check that autocomplete and props highlighting works properly for TypeScript in VSCode with the current configuration
};

module.exports = nextConfig;
