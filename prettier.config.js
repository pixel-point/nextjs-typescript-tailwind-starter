// prettier.config.js
module.exports = {
  bracketSpacing: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  // TODO: Check if import order actually works
  importOrder: [
    '^(next/(.*)$)|^(next$)',
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$|^components/(.*)$',
    '^@/lib/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [require('prettier-plugin-tailwindcss')],
};
