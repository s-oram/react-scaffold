import { type LinariaClassName } from '@linaria/core'
import { cx, css } from '@linaria/atomic'

const styles = {
  root: css`
    height: 100%;
  `,
}

/**
 * The Page component offers an easy method to create a predictable layout, ensuring the
 * footer is always at the bottom of the screen and moves down as the page content expands.
 */
export const Page = ({
  pt,
  children,
}: {
  pt?: LinariaClassName
  children?: React.ReactNode
}) => {
  return <div className={cx(styles.root, pt)}>{children}</div>
}
Page.displayName = 'Page'
