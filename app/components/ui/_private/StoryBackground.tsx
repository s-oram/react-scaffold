import { css, cx } from '@linaria/core'
import { forwardRef } from 'react'

const dottedBackground = css`
  --dot-bg: white;
  --dot-color: #333;
  --dot-size: 1px;
  --dot-space: 8px;
  background:
    linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    var(--dot-color);
`

const rootStyle = css`
  /* display: grid; */
  /* border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 8px 0px #dddddd99; */
  padding: 32px;

  overflow: hidden;
  position: relative;
  min-height: 100%;

  &[data-padding='true'] {
    padding: 32px;
  }

  &[data-padding='false'] {
    padding: 0px;
  }
`

type StoryBackgroundProps = {
  padding?: boolean
  children?: React.ReactNode
  className?: string
}

export const StoryBackground2 = ({}: {}) => {
  return <div>StoryBackground</div>
}

/**
 * Provides a dotted background to show behind components in Storybook.
 */
export const StoryBackground = forwardRef<HTMLDivElement, StoryBackgroundProps>(
  ({ padding, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(dottedBackground, rootStyle, className)}
        data-padding={padding}
      >
        {children}
      </div>
    )
  },
)
StoryBackground.displayName = 'StoryBackground'
