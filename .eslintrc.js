module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier', // Disables all code formatting linter rules from above
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': 'off', // We use this in redux slices + elsewhere,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // We use single quotes outside of JSX
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'no-restricted-imports': 'off',
  },
  overrides: [
    {
      files: ['**.stories.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                importNames: ['useState'],
                message: 'Please use storybook-addon-state instead.',
              },
            ],
          },
        ],
      },
    },
  ],
};
