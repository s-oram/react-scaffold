import { css } from '@linaria/core'

const rootStyle = css`
  &[data-top='none'] {
    padding-top: 0;
  }

  &[data-top='md'] {
    padding-top: 16px;
  }

  &[data-right='none'] {
    padding-right: 0;
  }

  &[data-right='md'] {
    padding-right: 16px;
  }

  &[data-bottom='none'] {
    padding-bottom: 0;
  }

  &[data-bottom='md'] {
    padding-bottom: 16px;
  }

  &[data-left='none'] {
    padding-left: 0;
  }

  &[data-left='md'] {
    padding-left: 16px;
  }
`

namespace Gutters {
  export type Props = {
    top?: 'none' | 'md'
    right?: 'none' | 'md'
    bottom?: 'none' | 'md'
    left?: 'none' | 'md'
    children?: React.ReactNode
  }
}

const Gutters = ({ children, top, right, bottom, left }: Gutters.Props) => {
  return (
    <div
      className={rootStyle}
      data-top={top}
      data-right={right}
      data-bottom={bottom}
      data-left={left}
    >
      {children}
    </div>
  )
}
Gutters.displayName = 'Gutters'

export { Gutters }
