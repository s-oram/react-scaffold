import { type LinariaClassName } from '@linaria/core'
import { cx, css } from '@linaria/atomic'
import { Description, Field, Input, Label } from '@headlessui/react'

const styles = {
  field: css`
    display: flex;
    flex-direction: column;
    align-items: start;
  `,
  label: css``,
  input: css`
    border: 1px solid black;
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
  `,
}

export const InputField = ({
  pt,
  type,
  name,
  placeholder,
  description,
  label,
}: {
  pt?: LinariaClassName
  type?: JSX.IntrinsicElements['input']['type']
  name?: string
  placeholder?: string
  description?: string
  label?: string
}) => {
  return (
    <Field className={cx(styles.field, pt)}>
      {label && <Label>{label}</Label>}

      <Input
        className={styles.input}
        name={name}
        placeholder={placeholder}
        type={type}
      />

      {description && <Description>{description}</Description>}
    </Field>
  )
}
InputField.displayName = 'InputField'
