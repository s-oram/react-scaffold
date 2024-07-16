import type { Meta, StoryObj } from '@storybook/react'
import { PageWidth } from './PageWidth'
import { PlaceholderContent } from './PlaceholderContent'
import { Page } from './Page'
import { Fragment } from 'react/jsx-runtime'

const meta: Meta<typeof PageWidth> = {
  title: 'Layout/PageWidth',
  component: PageWidth,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Page>
        <Story />
      </Page>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PageWidth>

// TODO[Shannon]: Add storybook example
export const Primary: Story = {
  args: {
    children: <PlaceholderContent tall>Content</PlaceholderContent>,
  },
}

/*
The PageWidth component has been written so it can be nested inside itself. This helps
to make using the component more error-proof.
*/
export const Nested: Story = {
  args: {
    children: (
      <Fragment>
        <PageWidth>
          <PlaceholderContent tall>
            Content within nested PageWidth component
          </PlaceholderContent>
        </PageWidth>
        <PlaceholderContent tall>Top level content</PlaceholderContent>
      </Fragment>
    ),
  },
}
