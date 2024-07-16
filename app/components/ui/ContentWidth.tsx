import { css, cx } from '@linaria/core'

const rootStyle = css`
  margin-left: auto;
  margin-right: auto;

  /* Reset font size to keep container width consistent if
  the parent has a different font size */
  font-size: 1rem;

  &[data-width='xs'] {
    width: calc(min(100%, 30ch));
  }

  &[data-width='sm'] {
    width: calc(min(100%, 40ch));
  }

  &[data-width='md'] {
    width: calc(min(100%, 50ch));
  }

  &[data-width='lg'] {
    width: calc(min(100%, 62ch));
  }

  &[data-width='xl'] {
    width: calc(min(100%, 75ch));
  }
`

/**
 * Provides a container that centers the content within it and limits the content's maximum width.
 */
export const ContentWidth = ({
  width = 'md',
  children,
  className,
}: {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cx(rootStyle, className)} data-width={width}>
      {children}
    </div>
  )
}
ContentWidth.displayName = 'ContentWidth'
