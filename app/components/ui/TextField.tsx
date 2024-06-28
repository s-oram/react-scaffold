import { css } from '@linaria/core'
import { FieldDescription } from './_private/FieldDescription'
import { FieldLabel } from './_private/FieldLabel'
import { FieldMessage } from './_private/FieldMessage'
import { type FeedbackTone, inputStyle } from './_private/shared'
import { useId } from 'react'
import { FocusRing } from './_private/FocusRing'

const rootStyle = css`
  display: flex;
  flex-direction: column;
`

const focusRingStyle = css`
  display: grid;
  margin-top: 4px;
  margin-bottom: 4px;
`

type CustomProps = {
  name: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
  description?: string
  message?: string
  tone?: FeedbackTone
  type?: 'number' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password'
}

type InheritedProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'className' | 'name' | 'id'
>

export interface TextFieldProps extends InheritedProps, CustomProps {}

export const TextField = ({
  name,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  tone,
  type = 'text',
  ...props
}: TextFieldProps) => {
  const id = useId()
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
        <input
          id={id}
          type={type}
          className={inputStyle}
          name={name}
          data-tone={tone}
          {...props}
        />
      </FocusRing>
      {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
    </div>
  )
}
TextField.displayName = 'TextField'
