import { css } from '@linaria/core'
import { buttonStyle } from './Button'
import { FocusRing } from './_private/FocusRing'
import { type ActionTone } from './_private/shared'

const focusRingStyle = css`
  display: inline-block;
`

interface LinkButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode
  variant?: 'solid' | 'outline' | 'soft' | 'ghost'
  tone?: ActionTone
  href: string
}

export const LinkButton = ({
  children,
  variant = 'solid',
  tone = 'primary',
  href,
  ...props
}: LinkButtonProps) => {
  return (
    <FocusRing className={focusRingStyle} data-tone={tone}>
      <a
        className={buttonStyle}
        data-variant={variant}
        data-tone={tone}
        href={href}
        tabIndex={0}
        {...props}
      >
        {children}
      </a>
    </FocusRing>
  )
}
LinkButton.displayName = 'LinkButton'
