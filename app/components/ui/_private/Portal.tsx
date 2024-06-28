import { Fragment, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: ReactNode
  container?: Element | null
}

export const Portal = ({ children, container }: PortalProps) => {
  if (container === null) return null

  return createPortal(
    <Fragment>{children}</Fragment>,
    container ?? document.body,
  )
}
