import { css } from '@linaria/core'
import { token } from '~/styles/tokens'
import { FocusRing } from './_private/FocusRing'

const switchHeight = '30px'
const switchWidth = '56px'

const rootStyle = css`
  width: min-content;
`

const focusRingStyle = css`
  border-radius: ${switchHeight};
`

const inputWrapperStyle = css`
  border: 1px solid ${token('color-detail-500')};
  border-radius: ${switchHeight};
`

const inputStyle = css`
  position: relative;
  display: block;
  appearance: none;
  width: ${switchWidth};
  height: ${switchHeight};
  outline: none;
  background-color: ${token('color-gray-400')};
  border-radius: ${switchHeight};
  transition: background-color 0.05s ease-in-out;

  &:checked {
    background-color: ${token('color-green-500')};
  }

  &:after {
    transition: transform 0.05s ease-in-out;
    position: absolute;
    content: '';
    background-color: white;
    top: 2px;
    left: 2px;
    width: calc(${switchHeight} - 4px);
    height: calc(${switchHeight} - 4px);
    border-radius: 100%;
    transform: translateX(0);
  }

  &:checked:after {
    transform: translateX(calc(${switchWidth} - ${switchHeight}));
  }
`

export const Switch = () => {
  return (
    <div className={rootStyle}>
      <FocusRing className={focusRingStyle}>
        <div className={inputWrapperStyle}>
          <input type="checkbox" className={inputStyle} />
        </div>
      </FocusRing>
    </div>
  )
}
Switch.displayName = 'Switch'
