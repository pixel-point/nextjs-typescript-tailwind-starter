module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['app', 'components', 'images', 'svgs', 'styles', 'utils', 'hooks', 'lib'],
    ],
  },
};
