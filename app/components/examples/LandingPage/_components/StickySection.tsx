import { css } from '@linaria/atomic'

const rootStyle = css`
  position: sticky;
  top: 0;
`

export const StickySection = ({ children }: { children?: React.ReactNode }) => {
  return <div className={rootStyle}>{children}</div>
}
StickySection.displayName = 'StickySection'
