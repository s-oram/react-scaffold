import { css } from '@linaria/core'
import { Button } from './Button'
import { Heading } from './Heading'
import { type ActionTone } from './_private/shared'
import { token } from '~/styles/tokens'
import { XIcon } from 'lucide-react'
import { FocusRing } from './_private/FocusRing'

// Inspiration:
// https://headlessui.com/react/dialog

const rootStyle = css`
  /* background-color: #0003; */
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const panelStyle = css`
  position: relative;
  background-color: ${token('color-white')};
  padding: 16px;
  max-width: 60ch;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #dddddd99;
  border-color: ${token('color-gray-200')};
  border-width: 1px;
  border-style: solid;
`

const descriptionStyle = css``

const buttonRowStyle = css`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const focusRingStyle = css`
  position: absolute;
  right: 8px;
  top: 8px;
`

const closeButtonStyle = css`
  outline: none;
  padding: 8px;
  border-radius: 100%;
  &:hover {
    background-color: ${token('color-gray-100')};
  }
  &:active {
    background-color: ${token('color-gray-200')};
  }
`

type OnResultEvent = (result: string) => void

type ButtonItem = {
  tone: ActionTone
  label: string
  value: string
}

export const Dialog = ({
  children,
  title,
  description,
  buttons,
  onResult,
}: {
  title?: string
  description?: string
  children?: React.ReactNode
  buttons?: ButtonItem[]
  onResult?: OnResultEvent
}) => {
  return (
    <div className={rootStyle}>
      <div className={panelStyle}>
        <FocusRing className={focusRingStyle} rounded>
          <button
            className={closeButtonStyle}
            onClick={() => {
              if (onResult) onResult('escape')
            }}
          >
            <XIcon />
          </button>
        </FocusRing>
        {title && <Heading level="h2">{title}</Heading>}
        {description && <div className={descriptionStyle}>{description}</div>}
        {children && <div>{children}</div>}
        {buttons && (
          <div className={buttonRowStyle}>
            {buttons.map(button => (
              <Button
                key={button.value}
                tone={button.tone}
                onClick={() => {
                  if (onResult) onResult(button.value)
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
Dialog.displayName = 'Dialog'
