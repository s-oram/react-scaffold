import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'
import { Fragment } from 'react/jsx-runtime'
import { PlaceholderContent } from './PlaceholderContent'

const meta: Meta<typeof Page> = {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [Story => <Story />],
}

export default meta

type Story = StoryObj<typeof Page>

export const Primary: Story = {
  args: {
    children: (
      <Fragment>
        <PlaceholderContent>Header</PlaceholderContent>
        <PlaceholderContent tall>Content Section 1</PlaceholderContent>
        <PlaceholderContent tall>Content Section 2</PlaceholderContent>
        <PlaceholderContent tall>Content Section 3</PlaceholderContent>
      </Fragment>
    ),
    footer: <PlaceholderContent tall>Footer</PlaceholderContent>,
  },
}
