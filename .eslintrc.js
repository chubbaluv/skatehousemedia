module.exports = {
  extends: ['eslint:recommended', 'next', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    globalThis: false,
    google: false,
  },
  ignorePatterns: ['**/node_modules/**'],
  rules: {
    camelcase: 'off',
    'consistent-return': 'off',
    eqeqeq: 'warn',
    '@next/next/no-img-element': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'guard-for-in': 'warn',
    'id-length': 'off',
    'import/prefer-default-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'max-len': 'off',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-useless-concat': 'warn',
    radix: ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 0, // Prevent missing displayName in a React component definition
    'react/forbid-prop-types': 'off',
    'react/function-component-declaration': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-target-blank': [1, { enforceDynamicLinks: 'always' }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 0, // Enforce props alphabetical sorting
    'react/jsx-uses-react': 2, // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2, // Prevent variables used in JSX to be incorrectly marked as unused
    'react/no-did-mount-set-state': 2, // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state': 2, // Prevent usage of setState in componentDidUpdate
    'react/no-unknown-property': [
      2,
      {
        ignore: ['jsx'],
      },
    ], // Prevent usage of unknown DOM property
    'react/prefer-es6-class': 1,
    'react/prop-types': 0, // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope': 0, // import React not required in every file
    'react/require-default-props': 'off', // Prefer default paramters over defaultProps
    'spaced-comment': ['error', 'always'],
  },
};