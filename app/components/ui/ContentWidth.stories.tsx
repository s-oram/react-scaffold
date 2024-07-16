import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { ContentWidth } from './ContentWidth'

const meta: Meta<typeof ContentWidth> = {
  title: 'Layout/ContentWidth',
  component: ContentWidth,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ContentWidth>

export const Primary: Story = {
  args: {},
}
