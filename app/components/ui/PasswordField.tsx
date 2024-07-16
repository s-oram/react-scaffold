import { css } from '@linaria/core'
import { useId, useState } from 'react'
import { FocusRing } from './_private/FocusRing'
import { InputBorder } from './_private/InputBorder'
import { type FeedbackTone } from './_private/shared'
import { VerticalFormField } from './_private/VerticalFormField'
import { token } from '~/styles/tokens'

const wrapperStyle = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const inputStyle = css`
  flex-grow: 1;
  outline: none;
  border-radius: 4px;
  padding: 8px 12px;
`

const buttonStyle = css`
  outline: none;
  color: transparent;
  width: 42px;
  border-radius: 0 4px 4px 0;

  &:focus-visible,
  &:hover {
    background-color: ${token('color-gray-100')};
  }

  background-image: ${token('icon-eye-off')};
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center center;

  &[data-password-visible='true'] {
    background-image: ${token('icon-eye')};
  }
`

type CustomProps = {
  name: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
  description?: string
  message?: string
  tone?: FeedbackTone
  forgotPasswordHref?: string
}

type InheritedProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'className' | 'name'
>

export interface PasswordFieldProps extends InheritedProps, CustomProps {}

export const PasswordField = ({
  name,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  tone,

  ...props
}: PasswordFieldProps) => {
  const id = useId()
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  return (
    <VerticalFormField
      id={id}
      primaryLabel={primaryLabel}
      secondaryLabel={secondaryLabel}
      tertiaryLabel={tertiaryLabel}
      description={description}
      message={message}
      tone={tone}
    >
      <FocusRing data-tone={tone}>
        <InputBorder data-tone={tone} className={wrapperStyle}>
          <input
            id={id}
            type={isPasswordVisible ? 'text' : 'password'}
            className={inputStyle}
            name={name}
            {...props}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
            className={buttonStyle}
            data-password-visible={isPasswordVisible}
          >
            {isPasswordVisible ? 'Show' : 'Hide'}
          </button>
        </InputBorder>
      </FocusRing>
    </VerticalFormField>
  )
}
PasswordField.displayName = 'PasswordField'
