import { css } from '@linaria/core'
import { useId } from 'react'
import { FieldLabel } from './_private/FieldLabel'
import { FieldMessage } from './_private/FieldMessage'
import { InputBorder } from './_private/InputBorder'
import { type FeedbackTone } from './_private/shared'
import { FocusRing } from './_private/FocusRing'

const rootStyle = css`
  display: flex;
  flex-direction: column;
`

const focusRingStyle = css`
  margin-top: 4px;
  margin-bottom: 4px;
`

const selectStyle = css`
  background-color: transparent;
  flex-grow: 1;
  outline: none;
`

type SelectItem = {
  label: string
  value: string
}

type CustomProps = {
  name: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
  description?: string
  message?: string
  tone?: FeedbackTone
  items?: SelectItem[]
}

type InheritedProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'className' | 'name' | 'id'
>

export interface NativeSelectProps extends InheritedProps, CustomProps {}

export const NativeSelect = ({
  name,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  message,
  tone,
  items,
}: NativeSelectProps) => {
  const id = useId()
  return (
    <div className={rootStyle}>
      <FieldLabel
        htmlFor={id}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <FocusRing className={focusRingStyle}>
        <InputBorder>
          {items && (
            <select name={name} id={id} className={selectStyle}>
              <option value="" disabled>
                --Please choose an option--
              </option>
              {items.map(item => (
                <option key={`${name}--${item.value}`} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          )}
        </InputBorder>
      </FocusRing>
      {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
    </div>
  )
}
NativeSelect.displayName = 'NativeSelect'
