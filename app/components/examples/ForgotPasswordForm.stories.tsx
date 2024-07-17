import type { Meta, StoryObj } from '@storybook/react'
import { ForgotPasswordForm } from './ForgotPasswordForm'
import { Page } from '../ui/Page'
import { PlaceholderContent } from '../ui/PlaceholderContent'
import { PageWidth } from '../ui/PageWidth'
import { ContentWidth } from '../ui/ContentWidth'

const meta: Meta<typeof ForgotPasswordForm> = {
  component: ForgotPasswordForm,
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

type Story = StoryObj<typeof ForgotPasswordForm>

export const Primary: Story = {
  args: {},
}
