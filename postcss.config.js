// PostCSS configuration file is required by Tailwind CSS
// See: https://tailwindcss.com/docs/guides/nextjs
module.exports = {
  plugins: [
    // TODO: Do we need a postcss-import because it feels everything is working without it?
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
  ],
};
