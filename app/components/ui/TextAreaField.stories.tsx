import type { Meta, StoryObj } from '@storybook/react'
import { TextAreaField } from './TextAreaField'
import { StoryBackground } from './_private/StoryBackground'

const meta: Meta<typeof TextAreaField> = {
  title: 'Components/TextAreaField',
  component: TextAreaField,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TextAreaField>

export const Primary: Story = {
  args: {
    name: 'username',
    primaryLabel: 'Username',
    secondaryLabel: '(optional)',
    tertiaryLabel: 'help',
    placeholder: 'Choose a unique username',
    description: 'Extra information about the Area',
    message: 'A unique name will be more memorable',
    tone: 'neutral',
  },
}
