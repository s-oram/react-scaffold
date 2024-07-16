import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { GridStack } from './GridStack'

const meta: Meta<typeof GridStack> = {
  title: 'Layout/GridStack',
  component: GridStack,
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

type Story = StoryObj<typeof GridStack>

export const Primary: Story = {
  args: {},
}
