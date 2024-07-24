import { css, cx } from '@linaria/core'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { token } from '~/styles/tokens'
import { focusRingStyle } from './_private/FocusRing'
import { Portal } from './_private/Portal'
import { ScrollPanel } from './ScrollPanel'

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: transparent;
  transition-property: background-color;
  transition-duration: 0.175s;
  &[data-active='true'] {
    background-color: #0004;
  }
  z-index: ${token('z-index-500-modal-backdrop')};
`

const sidebarPanelStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(min(100%, 40ch));
  background-color: ${token('color-white')};
  translate: -100% 0;
  transition-property: translate;
  transition-duration: 0.175s;
  &[data-active='true'] {
    translate: 0 0;
  }
  z-index: ${token('z-index-600-modal')};
`

const sidebarHeaderStyle = css`
  min-height: 48px;
  position: relative;
  border-bottom: 1px solid ${token('color-gray-200')};
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const closeButtonStyle = css`
  position: absolute;
  right: 4px;
  top: 4px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: ${token('icon-x')};
  background-size: 24px 24px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: transparent;
  &:hover {
    background-color: ${token('color-gray-100')};
  }
  &:active {
    background-color: ${token('color-gray-200')};
  }
`

namespace Sidebar {
  export type Props = {
    children?: React.ReactNode
  }
  export type Methods = {
    setVisible: (visible: boolean) => void
  }
}

const Sidebar = forwardRef<Sidebar.Methods, Sidebar.Props>((props, ref) => {
  const { children } = props
  const [isVisible, setVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    setVisible,
  }))

  return (
    <Portal>
      <div className={overlayStyle} data-active={isVisible} />
      <div className={sidebarPanelStyle} data-active={isVisible}>
        <ScrollPanel>
          <div className={sidebarHeaderStyle}>
            <div>Brand Logo</div>
            <button
              className={cx(focusRingStyle, closeButtonStyle)}
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </div>
          <div>{children}</div>
        </ScrollPanel>
      </div>
    </Portal>
  )
})
Sidebar.displayName = 'Sidebar'

export { Sidebar }
