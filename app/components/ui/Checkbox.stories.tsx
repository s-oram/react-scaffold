import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {
    name: 'username',
    label: 'Username',
    description: 'Extra information about the field',
    message: 'A unique name will be more memorable',
    tone: 'neutral',
  },
}
