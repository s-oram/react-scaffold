import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Switch>

export const Primary: Story = {
  args: {
    variant: 'solid',
    tone: 'primary',
    children: 'Switch',
  },
}
