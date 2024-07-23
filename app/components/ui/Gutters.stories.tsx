import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from '~/components/ui/_private/StoryBackground'
import { Gutters } from './Gutters'
import { PlaceholderContent } from './PlaceholderContent'

const meta: Meta<typeof Gutters> = {
  title: 'Layout/Gutters',
  component: Gutters,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <StoryBackground padding={false}>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Gutters>

export const Primary: Story = {
  args: {
    top: 'md',
    right: 'md',
    bottom: 'md',
    left: 'md',
    children: <PlaceholderContent>Placeholder Content</PlaceholderContent>,
  },
}
