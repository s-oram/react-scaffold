import { defineTokens, type TokenSet } from './designTokenFactory'

type Screens = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

/**
 * CSS breakpoint helper.
 *
 * Usage:
 * ```
 * const style = css`
 *   background-color: blue;
 *   ${breakpoint('sm')} {
 *     background-color: green;
 *   }
 * `
 * ```
 */
export const breakpoint = (screens: Screens) => {
  switch (screens) {
    case 'sm':
      return '@media (min-width: 640px)'
    case 'md':
      return '@media (min-width: 768px)'
    case 'lg':
      return '@media (min-width: 1024px)'
    case 'xl':
      return '@media (min-width: 1280px)'
    case '2xl':
      return '@media (min-width: 1536px)'
    default: {
      const _exhaustiveCheck: never = screens
      return _exhaustiveCheck
    }
  }
}

const tokenSet = {
  icon: {
    // All icons from Lucide
    // https://lucide.dev/icons
    'chevron-down': `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')`,
    'check': `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=)`,
    'eye': `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZSI+PHBhdGggZD0iTTIgMTJzMy03IDEwLTcgMTAgNyAxMCA3LTMgNy0xMCA3LTEwLTctMTAtN1oiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PC9zdmc+)`,
    'eye-off': `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZS1vZmYiPjxwYXRoIGQ9Ik05Ljg4IDkuODhhMyAzIDAgMSAwIDQuMjQgNC4yNCIvPjxwYXRoIGQ9Ik0xMC43MyA1LjA4QTEwLjQzIDEwLjQzIDAgMCAxIDEyIDVjNyAwIDEwIDcgMTAgN2ExMy4xNiAxMy4xNiAwIDAgMS0xLjY3IDIuNjgiLz48cGF0aCBkPSJNNi42MSA2LjYxQTEzLjUyNiAxMy41MjYgMCAwIDAgMiAxMnMzIDcgMTAgN2E5Ljc0IDkuNzQgMCAwIDAgNS4zOS0xLjYxIi8+PGxpbmUgeDE9IjIiIHgyPSIyMiIgeTE9IjIiIHkyPSIyMiIvPjwvc3ZnPg==)`,
    'x': `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+)`,
  },
  color: {
    white: '#FFF',
    black: '#000',
    // Gray: https://www.tints.dev/blue/5F6C80 (Hue/Sat/L.Max/L.Min|0/1/105/-1)
    gray: {
      '050': 'color(display-p3 0.976 0.98 0.984 / 1)',
      '100': 'color(display-p3 0.925 0.937 0.953 / 1)',
      '200': 'color(display-p3 0.831 0.855 0.886 / 1)',
      '300': 'color(display-p3 0.714 0.749 0.804 / 1)',
      '400': 'color(display-p3 0.569 0.616 0.694 / 1)',
      '500': 'color(display-p3 0.373 0.424 0.502 / 1)',
      '600': 'color(display-p3 0.333 0.388 0.467 / 1)',
      '700': 'color(display-p3 0.267 0.318 0.392 / 1)',
      '800': 'color(display-p3 0.208 0.251 0.31 / 1)',
      '900': 'color(display-p3 0.125 0.153 0.196 / 1)',
      '950': 'color(display-p3 0.082 0.106 0.137 / 1)',
    },
    // Blue: https://tints.dev/blue/2A77F1 (Hue/Sat/L.Max/L.Min|-1/-1/90/-1)
    blue: {
      '050': '#EBF3FE',
      '100': '#D8E6FD',
      '200': '#B1CEFB',
      '300': '#8AB5FA',
      '400': '#639CF8',
      '500': '#3B82F6',
      '600': '#0B60EA',
      '700': '#0848B0',
      '800': '#053075',
      '900': '#03183B',
      '950': '#010C1D',
    },
    red: {
      '050': '#FDECEC',
      '100': '#FCD9D9',
      '200': '#F9B4B4',
      '300': '#F58E8E',
      '400': '#F26969',
      '500': '#EF4444',
      '600': '#E11313',
      '700': '#A90F0F',
      '800': '#710A0A',
      '900': '#380505',
      '950': '#1C0202',
    },
    green: {
      '050': '#E9FBF0',
      '100': '#CFF7DE',
      '200': '#9FEFBC',
      '300': '#6FE69B',
      '400': '#40DE7A',
      '500': '#22C55E',
      '600': '#1B9D4B',
      '700': '#147538',
      '800': '#0D4E25',
      '900': '#072713',
      '950': '#04160A',
    },
    amber: {
      '050': '#FEF5E7',
      '100': '#FDECCE',
      '200': '#FBD99D',
      '300': '#F9C56C',
      '400': '#F7B23B',
      '500': '#F59E0B',
      '600': '#C47F08',
      '700': '#935F06',
      '800': '#624004',
      '900': '#312002',
      '950': '#181001',
    },
    surface: {
      '050': 'color(display-p3 0.976 0.98 0.984 / 1)',
      '100': 'color(display-p3 0.925 0.937 0.953 / 1)',
      '200': 'color(display-p3 0.831 0.855 0.886 / 1)',
      '300': 'color(display-p3 0.714 0.749 0.804 / 1)',
      '400': 'color(display-p3 0.569 0.616 0.694 / 1)',
      '500': 'color(display-p3 0.373 0.424 0.502 / 1)',
      '600': 'color(display-p3 0.333 0.388 0.467 / 1)',
      '700': 'color(display-p3 0.267 0.318 0.392 / 1)',
      '800': 'color(display-p3 0.208 0.251 0.31 / 1)',
      '900': 'color(display-p3 0.125 0.153 0.196 / 1)',
      '950': 'color(display-p3 0.082 0.106 0.137 / 1)',
    },
    detail: {
      '050': 'color(display-p3 0.976 0.98 0.984 / 1)',
      '100': 'color(display-p3 0.925 0.937 0.953 / 1)',
      '200': 'color(display-p3 0.831 0.855 0.886 / 1)',
      '300': 'color(display-p3 0.714 0.749 0.804 / 1)',
      '400': 'color(display-p3 0.569 0.616 0.694 / 1)',
      '500': 'color(display-p3 0.373 0.424 0.502 / 1)',
      '600': 'color(display-p3 0.333 0.388 0.467 / 1)',
      '700': 'color(display-p3 0.267 0.318 0.392 / 1)',
      '800': 'color(display-p3 0.208 0.251 0.31 / 1)',
      '900': 'color(display-p3 0.125 0.153 0.196 / 1)',
      '950': 'color(display-p3 0.082 0.106 0.137 / 1)',
    },
  },
} satisfies TokenSet

const { token } = defineTokens(tokenSet)

export { token }
