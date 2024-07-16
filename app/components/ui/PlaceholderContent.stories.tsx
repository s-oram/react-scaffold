import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { PlaceholderContent } from './PlaceholderContent'

const meta: Meta<typeof PlaceholderContent> = {
  title: 'Components/PlaceholderContent',
  component: PlaceholderContent,
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

type Story = StoryObj<typeof PlaceholderContent>

export const Primary: Story = {
  args: {
    children: 'PlaceholderContent',
  },
}
