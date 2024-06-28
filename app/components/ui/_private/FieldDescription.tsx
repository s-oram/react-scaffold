import { css } from '@linaria/core'
import { token } from '~/styles/tokens'

const rootStyle = css`
  color: ${token('color-detail-500')};
`

export const FieldDescription = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return <div className={rootStyle}>{children}</div>
}
FieldDescription.displayName = 'FieldDescription'
