import { css } from '@linaria/core'
import { token } from '~/styles/tokens'

export const linkStyle = css`
  color: ${token('color-blue-600')};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`
