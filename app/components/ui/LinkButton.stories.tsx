import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { LinkButton } from './LinkButton'

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof LinkButton>

export const Primary: Story = {
  args: {
    variant: 'solid',
    tone: 'primary',
    children: 'LinkButton',
  },
}
