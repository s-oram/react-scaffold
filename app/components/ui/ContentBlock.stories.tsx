import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { ContentBlock } from './ContentBlock'

const meta: Meta<typeof ContentBlock> = {
  title: 'Layout/ContentBlock',
  component: ContentBlock,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ContentBlock>

export const Primary: Story = {
  args: {},
}
