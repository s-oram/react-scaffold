import { css } from '@linaria/core'
import { FieldDescription } from './_private/FieldDescription'
import { FieldLabel } from './_private/FieldLabel'
import { FieldMessage } from './_private/FieldMessage'
import { type FeedbackTone } from './_private/shared'
import { useId } from 'react'
import { InputBorder } from './_private/InputBorder'
import { token } from '~/styles/tokens'
import { FocusRing } from './_private/FocusRing'

const rootStyle = css`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8px;
`

const checkboxStyle = css`
  outline: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background-color: ${token('color-white')};
  border-radius: 4px;
  &:checked {
    background-image: /* Lucide "check" icon */ url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=);
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position-y: 1px;
  }
`

const fieldLabelWraperStyle = css`
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
      <FocusRing tone={tone}>
        <InputBorder tone={tone}>
          <input
            type={'checkbox'}
            className={checkboxStyle}
            id={id}
            name={name}
            data-tone={tone}
            {...props}
          />
        </InputBorder>
      </FocusRing>

      <div>
        <div className={fieldLabelWraperStyle}>
          <FieldLabel htmlFor={id} primaryLabel={label} />
        </div>
        {description && <FieldDescription>{description}</FieldDescription>}
        {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
      </div>
    </div>
  )
}
Checkbox.displayName = 'Checkbox'
