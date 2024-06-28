import { css } from '@linaria/core'
import { token } from '~/styles/tokens'
import { type FeedbackTone } from './shared'

const rootStyle = css`
  font-size: 14px;
  color: ${token('color-detail-500')};

  &[data-tone='success'] {
    color: ${token('color-green-700')};
  }

  &[data-tone='error'] {
    color: ${token('color-red-500')};
  }
`

export const FieldMessage = ({
  tone,
  children,
}: {
  tone?: FeedbackTone
  children?: React.ReactNode
}) => {
  return (
    <div className={rootStyle} data-tone={tone}>
      {children}
    </div>
  )
}
FieldMessage.displayName = 'FieldMessage'
