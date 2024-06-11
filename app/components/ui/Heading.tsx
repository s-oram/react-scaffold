import { type LinariaClassName } from '@linaria/core'
import { cx, css } from '@linaria/atomic'

const root = css`
  text-transform: uppercase;
  position: relative;
  background-color: green;
  border-width: ${'12px'};
  border-color: black;
  margin-top: 10px;
  &:hover {
    background-color: blue;
    border-width: '6px';
    border-color: red;
  }
  &[data-level='1'] {
    font-size: 3rem;
  }
  &[data-level='2'] {
    font-size: 2rem;
  }
  &[data-level='3'] {
    font-size: 1.5rem;
  }
  &[data-level='4'] {
    font-size: 1rem;
  }
`

const defaultTag = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const

export const Heading = ({
  level,
  as,
  children,
  styles,
}: {
  level: '1' | '2' | '3' | '4'
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
