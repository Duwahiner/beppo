const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../.prettierrc'), 'utf8')
);

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'redux-saga', 'react', 'jsx-a11y', 'import'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input']
      }
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'linebreak-style': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'warn',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['draft'],
        props: true
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['import', 'multiline-block-like']
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var']
      },
      {
        blankLine: 'any',
        next: ['import'],
        prev: ['import']
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      }
    ],
    'prefer-template': 'error',
    'prettier/prettier': ['error', prettierOptions],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore'
      }
    ],
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'redux-saga/no-yield-in-race': 'error',
    'redux-saga/yield-effects': 'error',
    'require-yield': 'off'
  }
};
