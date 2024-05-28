/** @type {import("prettier").Config} */
export default {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'consistent',
  requirePragma: false,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: ['**/*.json'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['**/*.md'],
      options: {
        useTabs: false,
      },
    },
  ],
  plugins: [],
}
