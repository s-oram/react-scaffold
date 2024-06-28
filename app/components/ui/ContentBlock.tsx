import { type LinariaClassName } from '@linaria/core'
import { cx, css } from '@linaria/core'

const styles = {
  root: css`
    max-width: calc(min(100%, 65ch));
    margin-left: auto;
    margin-right: auto;
  `,
}

/**
 * Provides a container that centers the content within it and limits the content's maximum width.
 */
export const ContentBlock = ({
  pt,
  children,
}: {
  pt?: LinariaClassName
  children?: React.ReactNode
}) => {
  return <div className={cx(styles.root, pt)}>{children}</div>
}
ContentBlock.displayName = 'ContentBlock'
