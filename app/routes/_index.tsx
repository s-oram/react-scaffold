import type { MetaFunction } from '@remix-run/cloudflare'
import { ContentBlock } from '~/components/ui/ContentBlock'
import { Section } from '~/components/ui/Section'
import { Page } from '~/components/ui/Page'
import { TextField } from '~/components/ui/TextField'

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
          <TextField
            name="email"
            primaryLabel="Email"
            placeholder="name@example.com"
            description="Email address"
          />
        </ContentBlock>
      </Section>
    </Page>
  )
}
