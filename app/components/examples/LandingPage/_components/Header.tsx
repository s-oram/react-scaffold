import { css, cx } from '@linaria/core'
import { useRef } from 'react'
import { focusRingStyle } from '~/components/ui/_private/FocusRing'
import { Button } from '~/components/ui/Button'
import { Gutters } from '~/components/ui/Gutters'
import { PageWidth } from '~/components/ui/PageWidth'
import { ScrollPanel } from '~/components/ui/ScrollPanel'
import { Sidebar } from '~/components/ui/Sidebar'
import { TreeMenu } from '~/components/ui/TreeMenu'
import { breakpoint, token } from '~/styles/tokens'

const burgerMenuItems = [
  {
    label: 'Menu Item 1',
    initExpanded: true,
    children: [
      { label: 'Lorem Ipsum Dolor', href: '#' },
      { label: 'Consectetur Adipiscing', href: '#' },
      { label: 'Eiusmod Tempor Incididunt', href: '#' },
      { label: 'Dolore Magna', href: '#' },
      { label: 'Aliqua', href: '#' },
      { label: 'Elementum Nibh', href: '#' },
    ],
  },
  {
    label: 'Menu Item 2',
    children: [
      { label: 'Lorem Ipsum Dolor', href: '#' },
      { label: 'Consectetur Adipiscing', href: '#' },
      { label: 'Eiusmod Tempor Incididunt', href: '#' },
    ],
  },
  {
    label: 'Menu Item 3',
    children: [
      { label: 'Dolore Magna', href: '#' },
      { label: 'Aliqua', href: '#' },
      { label: 'Elementum Nibh', href: '#' },
    ],
  },
]

const rootStyle = css`
  background-color: ${token('color-white')};
`

const headerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
  gap: 32px;
`

const menuStyle = css`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

const largeScreen = css`
  display: none;
  ${breakpoint('lg')} {
    display: block;
  }
`

const smallScreen = css`
  align-self: stretch;
  display: block;
  ${breakpoint('lg')} {
    display: none;
  }
`

const logoArea = css`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

const burgerButtonStyle = css`
  width: 40px;
  height: 40px;
  align-self: stretch;
  border-radius: 4px;
  background-image: ${token('icon-burger')};
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

export const Header = () => {
  const sidebarRef = useRef<Sidebar.Methods>(null)

  return (
    <div className={rootStyle}>
      <PageWidth>
        <div className={headerStyle}>
          <div className={logoArea}>
            <div className={smallScreen}>
              <button
                className={cx(focusRingStyle, burgerButtonStyle)}
                onClick={() => {
                  if (sidebarRef.current) {
                    sidebarRef.current.setVisible(true)
                  }
                }}
              >
                Menu
              </button>
            </div>
            <div>Logo</div>
          </div>
          <div className={menuStyle}>
            <div className={largeScreen}>Link</div>
            <div className={largeScreen}>Link</div>
            <div className={largeScreen}>Link</div>
            <Button>Primary CTA</Button>
          </div>
        </div>
      </PageWidth>
      <Sidebar ref={sidebarRef}>
        <Gutters left="md" right="md">
          <TreeMenu items={burgerMenuItems} />
        </Gutters>
      </Sidebar>
    </div>
  )
}
Header.displayName = 'Header'
