import { cx, css } from '@linaria/core'
import { type ActionTone, type FeedbackTone } from './shared'
import { token } from '~/styles/tokens'

// TODO[Shannon]: The `outline-color` property needs some work.
// We are setting the opacity via appending a hex opacity string.
// This only works because the color tokens are hex values.
// Should we add a way to pass in a second argument that can be used to
// set the opacity in a more expected manner.
export const focusRingStyle = css`
  outline-style: none;
  outline-width: 4px;
  outline-color: ${token('color-blue-500') + '88'};
  outline-offset: 0;

  /* Focus styles for older browsers without :focus-visible support */
  &:has(:focus),
  &:focus {
    outline-style: solid;
  }

  /* Undo backwards compatibility styles. */
  &:has(:focus:not(:focus-visible)),
  &:focus:not(:focus-visible) {
    outline-style: none;
  }

  /* Focus styles for browsers with :focus-visible support */
  &:has(:focus-visible),
  &:focus-visible {
    outline-style: solid;
  }

  &[data-tone='success'] {
    outline-color: ${token('color-green-700') + '88'};
  }

  &:has(:invalid:not(:placeholder-shown)),
  &:invalid:not(:placeholder-shown),
  &[data-tone='error'] {
    outline-color: ${token('color-red-500') + '88'};
  }
`

const rootStyle = css`
  border-radius: 4px;

  &[data-rounded='true'] {
    border-radius: 100%;
  }
`

/** Renders a focus ring when a child has focus */
export const FocusRing = ({
  children,
  rounded,
  tone,
  className,
}: {
  children?: React.ReactNode
  rounded?: boolean
  tone?: ActionTone | FeedbackTone
  className?: string
}) => {
  return (
    <div
      className={cx(rootStyle, focusRingStyle, className)}
      data-rounded={rounded}
      data-tone={tone}
    >
      {children}
    </div>
  )
}
FocusRing.displayName = 'FocusRing'
