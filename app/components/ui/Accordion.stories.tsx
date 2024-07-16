import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { Accordion } from './Accordion'
import { PlaceholderContent } from './PlaceholderContent'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
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

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  args: {
    items: [
      {
        label: 'Accordion Item 1',
        content: <PlaceholderContent>Content Section 1</PlaceholderContent>,
        initialExpanded: true,
      },
      {
        label: 'Accordion Item 2',
        content: <PlaceholderContent>Content Section 2</PlaceholderContent>,
      },
      {
        label: 'Accordion Item 3',
        content: <PlaceholderContent>Content Section 3</PlaceholderContent>,
      },
    ],
  },
}
