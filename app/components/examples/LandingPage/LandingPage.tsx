import { PlaceholderContent } from '~/components/ui/PlaceholderContent'
import { Page } from '../../ui/Page'
import { Header } from './_components/Header'
import { StickySection } from './_components/StickySection'
import { css } from '@linaria/core'

const imageStyle = css`
  filter: grayscale(75%) contrast(75%);
`

export const LandingPage = () => {
  return (
    <Page footer={<PlaceholderContent>Footer</PlaceholderContent>}>
      <Header></Header>
      <img
        src="images/Desert Sunset Mountains.jpg"
        alt="Desert Sunset Over Mountains"
        className={imageStyle}
      />
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
