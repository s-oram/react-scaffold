import { css } from '@linaria/core'
import { token } from '~/styles/tokens'

const rootStyle = css`
  background-color: #0003;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ModalBackground = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return <div className={rootStyle}>{children}</div>
}
ModalBackground.displayName = 'ModalBackground'
