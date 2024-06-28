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
}

type InheritedProps = Omit<
  React.ComponentPropsWithoutRef<'textarea'>,
  'className' | 'name'
>

export interface TextFieldProps extends InheritedProps, CustomProps {}

export const TextAreaField = ({
  name,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  tone,
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
        <textarea
          id={id}
          className={inputStyle}
          name={name}
          {...props}
          data-tone={tone}
        />
      </FocusRing>
      {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
    </div>
  )
}
TextAreaField.displayName = 'TextAreaField'
