import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { PasswordField } from './PasswordField'

const meta: Meta<typeof PasswordField> = {
  title: 'Components/PasswordField',
  component: PasswordField,
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

type Story = StoryObj<typeof PasswordField>

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
