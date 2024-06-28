import { css } from '@linaria/core'
import { useId } from 'react'
import { FieldLabel } from './_private/FieldLabel'
import { FieldMessage } from './_private/FieldMessage'
import { Radio } from './_private/Radio'
import { type FeedbackTone } from './_private/shared'

const rootStyle = css`
  display: flex;
  flex-direction: column;
`

const itemsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`

type RadioItem = {
  label: string
  value: string
  description?: string
}

type CustomProps = {
  name: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
  description?: string
  message?: string
  tone?: FeedbackTone
  type?: 'number' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password'
  items?: RadioItem[]
}

type InheritedProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'className' | 'name' | 'id'
>

export interface RadioGroupProps extends InheritedProps, CustomProps {}

export const RadioGroup = ({
  name,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  message,
  tone,
  items,
}: RadioGroupProps) => {
  const id = useId()
  return (
    <div className={rootStyle}>
      <FieldLabel
        htmlFor={id}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      {items && (
        <div className={itemsStyle}>
          {items.map(item => (
            <Radio
              key={`${name}--${item.value}`}
              name={name}
              value={item.value}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      )}
      {message && <FieldMessage tone={tone}>{message}</FieldMessage>}
    </div>
  )
}
RadioGroup.displayName = 'RadioGroup'
