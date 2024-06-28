import { css } from '@linaria/core'
import { useId } from 'react'
import { token } from '~/styles/tokens'
import { FieldDescription } from './FieldDescription'

import { FocusRing } from './FocusRing'

const rootStyle = css`
  display: flex;
  flex-direction: row;
  align-items: start;
`

const radioStyle = css`
  appearance: none;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 2px solid ${token('color-gray-500')};
  cursor: pointer;

  &:hover,
  &:active {
    border-color: ${token('color-blue-500')};
  }

  &:checked {
    border-color: ${token('color-blue-600')};
  }

  &:hover:after {
    background-color: ${token('color-blue-100')};
  }

  &:checked:after {
    background-color: ${token('color-blue-600')};
  }

  &:active:after {
    background-color: ${token('color-blue-600')};
    transform: scale(0.55);
  }

  &:after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    border-radius: 100%;
    transform: scale(0.65);
    transition-property: background-color;
    transition-duration: 0.08s;
  }
`

const labelStyle = css`
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
`

const descriptionWrapperStyle = css`
  padding-left: 8px;
`

export const Radio = ({
  name,
  label,
  value,
  description,
}: {
  name: string
  label: string
  value: string
  description?: string
}) => {
  const id = useId()
  return (
    <div className={rootStyle}>
      <FocusRing rounded>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className={radioStyle}
        />
      </FocusRing>
      <div>
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
        {description && (
          <div className={descriptionWrapperStyle}>
            <FieldDescription>{description}</FieldDescription>
          </div>
        )}
      </div>
    </div>
  )
}
Radio.displayName = 'Radio'
