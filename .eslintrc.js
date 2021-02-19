module.exports = {
  extends: ['prettier/@typescript-eslint', 'airbnb-typescript-prettier'],
  plugins: ['import', 'unused-imports'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
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
  },
  rules: {
    camelcase: 0,
    'jsx-a11y/anchor-is-valid': 'warn',
    'import/no-unresolved': 'error',
    'import/no-cycle': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'googleapis',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: false,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
