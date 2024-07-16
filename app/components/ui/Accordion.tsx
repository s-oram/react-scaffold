import { cx, css } from '@linaria/core'
import { token } from '~/styles/tokens'
import { useMap } from './_thirdparty/useMap'
import { focusRingStyle } from './_private/FocusRing'

const rootStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const headerStyle = css`
  height: 32px;
  /* cursor: pointer; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const labelStyle = css`
  font-weight: 500;
  outline: none;
`

const contentStyle = css`
  margin-top: 2px;

  &[data-expanded='false'] {
    display: none;
  }
`

const sectionToggleStyle = css`
  position: relative;
  height: 32px;
  width: 32px;
  overflow: hidden;
  color: transparent;
  cursor: pointer;
  border-radius: 100%;
  &:hover {
    background-color: ${token('color-gray-100')};
  }
  &:active {
    background-color: ${token('color-gray-200')};
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${token('icon-chevron-down')};
    background-size: 24px 24px;
    background-position: 50% 60%;
    transition-property: transform, color, background-color;
    transition-duration: 0.15s, 0.075s, 0.075s;
    transform: rotate(0deg);
  }
  &[data-expanded='true']:after {
    transform: rotate(180deg);
  }
`

type AccordionFieldProps = {
  items?: Array<{
    label: string
    content: React.ReactNode
    initialExpanded?: boolean
  }>
}

export const Accordion = ({ items }: AccordionFieldProps) => {
  const isExpandedMap = useMap<string, boolean>(
    items && items.map(item => [item.label, !!item.initialExpanded]),
  )

  if (!items) return null

  const toggleContentVisibility = (label: string) => {
    const currentState = isExpandedMap.get(label) || false
    isExpandedMap.set(label, !currentState)
  }

  return (
    <div className={rootStyle}>
      {items.map(item => (
        <div key={item.label}>
          <div className={headerStyle}>
            <button
              className={labelStyle}
              tabIndex={-1}
              onClick={() => toggleContentVisibility(item.label)}
            >
              {item.label}
            </button>

            <button
              className={cx(focusRingStyle, sectionToggleStyle)}
              onClick={() => toggleContentVisibility(item.label)}
              data-expanded={isExpandedMap.get(item.label) || false}
            >
              Toggle Accordion Section
            </button>
          </div>
          <div
            className={contentStyle}
            data-expanded={isExpandedMap.get(item.label) || false}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}
Accordion.displayName = 'Accordion'

const useAccordionToggleState = () => {}
