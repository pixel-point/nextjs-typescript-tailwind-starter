module.exports = {
  rules: {
    'no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: {
          named: true,
          defaultFrom: true,
          namedFrom: true,
          namespaceFrom: true,
        },
      },
    ],
  },
};
