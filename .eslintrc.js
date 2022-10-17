module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules/', 'src/', 'packages/'],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['@typescript-eslint', 'module-resolver', 'react'],
  rules: {
    indent: 0,
    semi: 2,
    curly: ['error', 'all'],
    eqeqeq: [
      1,
      'always',
      {
        null: 'always',
      },
    ],
    'consistent-return': 0,
    'default-case': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'arrow-body-style': 1,
    'prefer-destructuring': 1,
    'object-curly-newline': 0,
    'dot-notation': 0,
    'prefer-template': 0,
    'eol-last': 2,
    'no-param-reassign': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'no-shadow': 0,
    'no-await-in-loop': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'no-extra-boolean-cast': 0,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'import/order': [
      2,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*', '**/*.test.*', 'src/setupTests.ts'],
        peerDependencies: true,
      },
    ],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/forbid-prop-types': 0,
    'react/button-has-type': 0,
    'react/jsx-fragments': 0,
    'react/no-did-update-set-state': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'arrow-function' | 'function-declaration' | 'function-expression',
        unnamedComponents: 'arrow-function' | 'function-expression',
      },
    ],
    'react/no-unused-prop-types': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 2,
  },
};
