import { css, cx } from '@linaria/core'
import { token } from '~/styles/tokens'
import { type FeedbackTone } from './shared'

const rootStyle = css`
  display: flex;
  flex-direction: row;
  border: 1px solid ${token('color-detail-500')};
  border-radius: 4px;

  &[data-tone='success']:focus {
    border-color: ${token('color-green-700')};
  }

  &:has:invalid:not(:placeholder-shown),
  &[data-tone='error'] {
    border-color: ${token('color-red-500')};
  }
`

/** A border for input elements */
export const InputBorder = ({
  children,
  tone,
  className,
}: {
  children?: React.ReactNode
  tone?: FeedbackTone
  className?: string
}) => {
  return (
    <div className={cx(rootStyle, className)} data-tone={tone}>
      {children}
    </div>
  )
}
InputBorder.displayName = 'InputBorder'
