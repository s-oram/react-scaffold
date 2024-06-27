import wyw from '@wyw-in-js/vite'

export const linariaConfig = () =>
  wyw({
    include: ['app/**/*.{ts,tsx}'],
    babelOptions: {
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
    },
  })
