import type { MetaFunction } from '@remix-run/cloudflare'
import { Page } from '~/components/ui/Page'
import { PageWidth } from '~/components/ui/PageWidth'
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
        <PageWidth>
          <TextField
            name="email"
            primaryLabel="Email"
            placeholder="name@example.com"
            description="Email address"
          />
        </PageWidth>
    </Page>
  )
}
