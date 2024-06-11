import { type LinariaClassName } from '@linaria/core'
import { cx, css } from '@linaria/atomic'

const styles = {
  root: css`
    /* border: 2px solid red; */
    max-width: calc(min(100% - (16px * 2), 1200px));
    margin-left: auto;
    margin-right: auto;
  `,
}

/**
 * Provides a top-level page container that limits content width and creates consistent margins
 * on smaller devices.
 */
export const Section = ({
  pt,
  children,
}: {
  pt?: LinariaClassName
  children?: React.ReactNode
}) => {
  return <div className={cx(styles.root, pt)}>{children}</div>
}
Section.displayName = 'Section'
