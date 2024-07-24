import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from '~/components/ui/_private/StoryBackground'
import { ScrollPanel } from './ScrollPanel'
import { Fragment } from 'react/jsx-runtime'
import { PlaceholderContent } from './PlaceholderContent'
import { css } from '@linaria/core'

const container = css`
  height: 50vh;
  max-height: 50vh;
  border: 2px solid black;
`

const meta: Meta<typeof ScrollPanel> = {
  component: ScrollPanel,
  title: 'Components/ScrollPanel',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <StoryBackground>
        <div className={container}>
          <Story />
        </div>
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ScrollPanel>

export const Primary: Story = {
  args: {
    children: (
      <Fragment>
        <PlaceholderContent tall>Placeholder A</PlaceholderContent>
        <PlaceholderContent tall>Placeholder B</PlaceholderContent>
        <PlaceholderContent tall>Placeholder C</PlaceholderContent>
        <PlaceholderContent tall>Placeholder D</PlaceholderContent>
        <PlaceholderContent tall>Placeholder E</PlaceholderContent>
        <PlaceholderContent tall>Placeholder F</PlaceholderContent>
      </Fragment>
    ),
  },
}
