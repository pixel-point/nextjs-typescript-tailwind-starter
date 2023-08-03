import prettierPluginTailwindcss from 'prettier-plugin-tailwindcss';

export default {
  printWidth: 100,
  singleQuote: true,
  importOrder: [
    '^(next)|(next/(.*))$',
    '^(react)|(react/(.*))$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/types/(.*)$',
    '^@/lib/(.*)$',
    '^@/styles/(.*)$',
    '^@/svgs/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [prettierPluginTailwindcss],
};
