import { cx } from '@linaria/core'
import { buttonStyle } from './Button'
import { focusRingStyle } from './_private/FocusRing'
import { type ActionTone } from './_private/shared'

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
    <a
      className={cx(focusRingStyle, buttonStyle)}
      data-variant={variant}
      data-tone={tone}
      href={href}
      tabIndex={0}
      {...props}
    >
      {children}
    </a>
  )
}
LinkButton.displayName = 'LinkButton'
