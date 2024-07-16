import { css } from '@linaria/atomic'
import { FieldDescription } from './FieldDescription'
import { FieldLabel } from './FieldLabel'
import { FieldMessage } from './FieldMessage'
import { type FeedbackTone } from './shared'

const rootStyle = css`
  display: flex;
  flex-direction: column;
`

const inputWrapperStyle = css`
  margin-top: 4px;
  margin-bottom: 4px;
`

/**
 * This component can be combined with a input component to create
 * a labeled form field.
 *
 * The label will be shown above the input (hence the `Vertical` part of the
 * component name).
 *
 * There are properties for providing feedback for success and error states.
 */
export const VerticalFormField = ({
  id,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  tone,
  children,
}: {
  id: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
  description?: string
  message?: string
  tone?: FeedbackTone
  children?: React.ReactNode
}) => {
  return (
    <div className={rootStyle}>
      <FieldLabel
        htmlFor={id}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      {children && <div className={inputWrapperStyle}>{children}</div>}
      {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
    </div>
  )
}
VerticalFormField.displayName = 'VerticalFormField'
