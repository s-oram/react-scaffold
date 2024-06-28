import { css } from '@linaria/core'

const pageGutterWidth = '16px'
const maxContentWidth = '1200px'

const rootStyle = css`
  width: calc(min(100svw - (${pageGutterWidth} * 2), ${maxContentWidth}));
  margin-left: auto;
  margin-right: auto;
`

/**
 * A container to limit the size of children to the "page width".
 *
 * For small screens, some space will be reserved for page gutters.
 *
 * For large screens the page width is limited to a maximum width for comfort.
 */
export const PageWidth = ({ children }: { children?: React.ReactNode }) => {
  return <div className={rootStyle}>{children}</div>
}
PageWidth.displayName = 'PageWidth'
