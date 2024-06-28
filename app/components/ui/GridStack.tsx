import { css } from '@linaria/core'

const rootStyle = css`
  display: grid;
  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`

export const GridStack = ({ children }: { children?: React.ReactNode }) => {
  return <div className={rootStyle}>{children}</div>
}
GridStack.displayName = 'GridStack'
