import { cx, css } from '@linaria/core'
import { FieldDescription } from './_private/FieldDescription'
import { FieldLabel } from './_private/FieldLabel'
import { FieldMessage } from './_private/FieldMessage'
import { type FeedbackTone } from './_private/shared'
import { useId } from 'react'
import { inputBorderStyle } from './_private/InputBorder'
import { token } from '~/styles/tokens'
import { focusRingStyle } from './_private/FocusRing'

const rootStyle = css`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8px;
`

const checkboxStyle = css`
  appearance: none;
  width: 24px;
  height: 24px;
  background-color: ${token('color-white')};
  border-radius: 4px;
  &:checked {
    background-image: ${token('icon-check')};
    background-size: 22px 22px;
    background-repeat: no-repeat;
    background-position-y: 1px;
  }
`

const fieldLabelWrapperStyle = css`
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

type CustomProps = {
  name: string
  label: string
  description?: string
  message?: string
  tone?: FeedbackTone
}

type InheritedProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'className' | 'name'
>

export interface CheckboxProps extends InheritedProps, CustomProps {}

export const Checkbox = ({
  name,
  label,
  description,
  message,
  tone,
  ...props
}: CheckboxProps) => {
  const id = useId()
  return (
    <div className={rootStyle}>
      <input
        type={'checkbox'}
        className={cx(focusRingStyle, inputBorderStyle, checkboxStyle)}
        id={id}
        name={name}
        data-tone={tone}
        {...props}
      />

      <div>
        <div className={fieldLabelWrapperStyle}>
          <FieldLabel htmlFor={id} primaryLabel={label} />
        </div>
        {description && <FieldDescription>{description}</FieldDescription>}
        {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
      </div>
    </div>
  )
}
Checkbox.displayName = 'Checkbox'
