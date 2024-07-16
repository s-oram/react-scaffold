import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from './_private/StoryBackground'
import { Dialog } from './Dialog'
import { Portal } from './_private/Portal'
import { useEffect, useRef, useState } from 'react'
import { ModalBackground } from './_private/ModalBackground'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => {
      const [result, setResult] = useState<string>()

      return (
        <StoryBackground>
          <Story
            args={{ ...Primary.args, onResult: value => setResult(value) }}
          />
          {result && (
            <div>
              Modal Result: <code>{result}</code>
            </div>
          )}
        </StoryBackground>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Primary: Story = {
  args: {
    title: 'Deactivate account',
    description: 'This will permanently deactivate your account',
    children: (
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed.
      </p>
    ),
    buttons: [
      { value: 'deactivate', label: 'Deactivate', tone: 'danger' },
      { value: 'cancel', label: 'Cancel', tone: 'secondary' },
    ],
  },
}
