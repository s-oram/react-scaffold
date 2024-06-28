import { css } from '@linaria/core'
import { useId, useState } from 'react'
import { FieldDescription } from './_private/FieldDescription'
import { FieldLabel } from './_private/FieldLabel'
import { FieldMessage } from './_private/FieldMessage'
import { FocusRing } from './_private/FocusRing'
import { InputBorder } from './_private/InputBorder'
import { type FeedbackTone } from './_private/shared'

const rootStyle = css`
  display: flex;
  flex-direction: column;
`

const focusRingStyle = css`
  margin-top: 4px;
  margin-bottom: 4px;
`

const wrappedInputStyle = css`
  flex-grow: 1;
  outline: none;
  border-radius: 4px;
  padding: 8px 12px;
`

// TODO[Shannon]: Consider removing focus styles by default.
const buttonStyle = css`
  outline: none;
`

type CustomProps = {
  name: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
  description?: string
  message?: string
  tone?: FeedbackTone
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
    <div className={rootStyle}>
      <FieldLabel
        htmlFor={id}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FocusRing className={focusRingStyle} data-tone={tone}>
        <InputBorder data-tone={tone}>
          <input
            id={id}
            type={isPasswordVisible ? 'text' : 'password'}
            className={wrappedInputStyle}
            name={name}
            {...props}
          />
          <button
            onClick={() => setPasswordVisible(!isPasswordVisible)}
            className={buttonStyle}
          >
            {isPasswordVisible ? 'Show' : 'Hide'}
          </button>
        </InputBorder>
      </FocusRing>
      {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
    </div>
  )
}
PasswordField.displayName = 'PasswordField'
