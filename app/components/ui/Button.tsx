import { cx, css } from '@linaria/core'
import { token } from '~/styles/tokens'
import { type ActionTone } from './_private/shared'
import { focusRingStyle } from './_private/FocusRing'

export const buttonStyle = css`
  display: inline-block;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  transition-property: transform, color, background-color;
  transition-duration: 0.075s;

  &:active {
    transform: scale(0.95);
  }

  &[data-tone='primary'] {
    --button-color-000: ${token('color-white')};
    --button-color-050: ${token('color-blue-050')};
    --button-color-100: ${token('color-blue-100')};
    --button-color-200: ${token('color-blue-200')};
    --button-color-600: ${token('color-blue-600')};
    --button-color-700: ${token('color-blue-700')};
    --button-color-800: ${token('color-blue-800')};
  }

  &[data-tone='secondary'] {
    --button-color-000: ${token('color-white')};
    --button-color-050: ${token('color-gray-050')};
    --button-color-100: ${token('color-gray-100')};
    --button-color-200: ${token('color-gray-200')};
    --button-color-600: ${token('color-gray-700')};
    --button-color-700: ${token('color-gray-800')};
    --button-color-800: ${token('color-gray-900')};
  }

  &[data-tone='danger'] {
    --button-color-000: ${token('color-white')};
    --button-color-050: ${token('color-red-050')};
    --button-color-100: ${token('color-red-100')};
    --button-color-200: ${token('color-red-200')};
    --button-color-600: ${token('color-red-600')};
    --button-color-700: ${token('color-red-700')};
    --button-color-800: ${token('color-red-800')};
  }

  &[data-variant='solid'] {
    color: var(--button-color-000);
    background-color: var(--button-color-600);
    &:hover {
      background-color: var(--button-color-700);
    }
    &:active {
      background-color: var(--button-color-800);
    }
  }

  &[data-variant='outline'] {
    color: var(--button-color-600);
    border-color: var(--button-color-600);
    &:hover {
      background-color: var(--button-color-050);
    }
    &:active {
      background-color: var(--button-color-100);
    }
  }

  &[data-variant='soft'] {
    color: var(--button-color-600);
    background-color: var(--button-color-050);
    &:hover {
      background-color: var(--button-color-100);
    }
    &:active {
      background-color: var(--button-color-200);
    }
  }

  &[data-variant='ghost'] {
    color: var(--button-color-600);
    &:hover {
      background-color: var(--button-color-100);
    }
    &:active {
      background-color: var(--button-color-200);
    }
  }
`

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode
  variant?: 'solid' | 'outline' | 'soft' | 'ghost'
  tone?: ActionTone
}

export const Button = ({
  children,
  variant = 'solid',
  tone = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(focusRingStyle, buttonStyle)}
      data-variant={variant}
      data-tone={tone}
      {...props}
    >
      {children}
    </button>
  )
}
Button.displayName = 'Button'
