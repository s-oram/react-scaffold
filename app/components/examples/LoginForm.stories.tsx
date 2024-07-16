import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { Page } from '../ui/Page'
import { PageWidth } from '../ui/PageWidth'
import { PlaceholderContent } from '../ui/PlaceholderContent'
import { ContentWidth } from '../ui/ContentWidth'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
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

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  args: {},
}
