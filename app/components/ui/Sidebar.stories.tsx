import { css } from '@linaria/core'
import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { StoryBackground } from '~/components/ui/_private/StoryBackground'
import { Button } from './Button'
import { Sidebar } from './Sidebar'

const centerChildrenStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story, { args }) => {
      const sidebarRef = useRef<Sidebar.Methods>(null)

      const showSidebar = () => {
        if (sidebarRef.current) {
          sidebarRef.current.setVisible(true)
        }
      }

      return (
        <StoryBackground padding={false} className={centerChildrenStyle}>
          <Button onClick={showSidebar}>Show Sidebar</Button>
          <Story args={{ ...args, ref: sidebarRef }} />
        </StoryBackground>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Primary: Story = {
  args: {
    children: <div></div>,
  },
}
