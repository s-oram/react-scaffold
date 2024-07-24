import { css } from '@linaria/atomic'
import { token } from '~/styles/tokens'

const rootStyle = css`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${token('z-index-400-fixed')};
`

export const FixedSection = ({ children }: { children?: React.ReactNode }) => {
  return <div className={rootStyle}>{children}</div>
}
FixedSection.displayName = 'StickySection'
