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
