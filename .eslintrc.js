module.exports = {
  extends: ['prettier/@typescript-eslint', 'airbnb-typescript-prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['import', 'unused-imports', 'sort-keys-fix'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    camelcase: 0,
    'import/no-cycle': 'warn',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before'
          },
          {
            group: 'external',
            pattern: 'googleapis',
            position: 'before'
          },
          {
            group: 'external',
            pattern: 'next',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react']
      }
    ],
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'none',
        usePrettierrc: false
      }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-props-no-spreading': 0,
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-vars': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ],
    'unused-imports/no-unused-vars-ts': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js']
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  }
};
