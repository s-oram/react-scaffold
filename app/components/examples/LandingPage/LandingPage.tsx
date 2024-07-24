import { PlaceholderContent } from '~/components/ui/PlaceholderContent'
import { Page } from '../../ui/Page'
import { Header } from './_components/Header'
import { StickySection } from './_components/StickySection'

export const LandingPage = () => {
  return (
    <Page footer={<PlaceholderContent>Footer</PlaceholderContent>}>
      <StickySection>
        <Header></Header>
      </StickySection>
      <PlaceholderContent tall>Hero</PlaceholderContent>
      <PlaceholderContent tall>Video</PlaceholderContent>
      <PlaceholderContent tall>Social Proof</PlaceholderContent>
      <PlaceholderContent tall>Benefits</PlaceholderContent>
      <PlaceholderContent tall>How it Works</PlaceholderContent>
      <PlaceholderContent tall></PlaceholderContent>
      <PlaceholderContent tall></PlaceholderContent>
      <PlaceholderContent tall></PlaceholderContent>
      <PlaceholderContent tall></PlaceholderContent>
      <PlaceholderContent tall></PlaceholderContent>
    </Page>
  )
}
LandingPage.displayName = 'LandingPage'
