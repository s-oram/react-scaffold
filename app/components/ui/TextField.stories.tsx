import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    name: 'username',
    primaryLabel: 'Username',
    secondaryLabel: '(optional)',
    tertiaryLabel: 'help',
    placeholder: 'Choose a unique username',
    description: 'Extra information about the field',
    message: 'A unique name will be more memorable',
    tone: 'neutral',
  },
}
