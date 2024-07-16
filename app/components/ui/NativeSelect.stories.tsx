import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { NativeSelect } from './NativeSelect'

const meta: Meta<typeof NativeSelect> = {
  title: 'Components/NativeSelect',
  component: NativeSelect,
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

type Story = StoryObj<typeof NativeSelect>

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
