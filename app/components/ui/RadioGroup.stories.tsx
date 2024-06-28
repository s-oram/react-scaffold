import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof RadioGroup>

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
    items: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
  },
}

export const WithDescriptions: Story = {
  args: {
    name: 'username',
    primaryLabel: 'Username',
    secondaryLabel: '(optional)',
    tertiaryLabel: 'help',
    placeholder: 'Choose a unique username',
    description: 'Extra information about the field',
    message: 'A unique name will be more memorable',
    tone: 'neutral',
    items: [
      { label: 'One', value: 'one', description: 'Lorem ipsum dolor sit amet' },
      {
        label: 'Two',
        value: 'two',
        description: 'Consectetur adipiscing elit sed do eiusmod',
      },
      {
        label: 'Three',
        value: 'three',
        description: 'Tempor incididunt ut labore et dolore',
      },
    ],
  },
}
