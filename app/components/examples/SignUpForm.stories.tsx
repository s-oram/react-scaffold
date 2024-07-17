import type { Meta, StoryObj } from '@storybook/react'
import { SignUpForm } from './SignUpForm'
import { Page } from '../ui/Page'
import { PlaceholderContent } from '../ui/PlaceholderContent'
import { PageWidth } from '../ui/PageWidth'
import { ContentWidth } from '../ui/ContentWidth'

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <Page footer={<PlaceholderContent>Footer</PlaceholderContent>}>
        <PlaceholderContent>Header</PlaceholderContent>
        <PageWidth>
          <ContentWidth width="sm">
            <Story />
          </ContentWidth>
        </PageWidth>
      </Page>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SignUpForm>

export const Primary: Story = {
  args: {},
}
