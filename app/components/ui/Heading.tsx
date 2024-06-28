import { type LinariaClassName } from '@linaria/core'
import { cx, css } from '@linaria/core'

const root = css`
  line-height: 1.25;
  &[data-level='hero'] {
    font-size: 5rem;
  }
  &[data-level='h1'] {
    font-size: 3rem;
  }
  &[data-level='h2'] {
    font-size: 2rem;
  }
  &[data-level='h3'] {
    font-size: 1.5rem;
  }
  &[data-level='h4'] {
    font-size: 1rem;
  }
`

const defaultTag = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
} as const

export const Heading = ({
  level,
  as,
  children,
  styles,
}: {
  level: 'hero' | 'h1' | 'h2' | 'h3' | 'h4'
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  children?: React.ReactNode
  styles?: LinariaClassName
}) => {
  const Tag = as || defaultTag[level]
  return (
    <Tag className={cx(root, styles)} data-level={level}>
      {children}
    </Tag>
  )
}
Heading.displayName = 'Heading'
