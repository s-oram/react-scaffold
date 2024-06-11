import type { MetaFunction } from '@remix-run/cloudflare'
import { InputField } from '~/components/ui/Form'
import { ContentBlock } from '~/components/layout/ContentBlock'
import { Section } from '~/components/layout/Section'
import { Page } from '~/components/layout/Page'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ]
}

export default function Index() {
  return (
    <Page>
      <Section>
        <ContentBlock>
          <InputField
            label="Email"
            placeholder="name@example.com"
            description="Email address"
          />
        </ContentBlock>
      </Section>
    </Page>
  )
}
