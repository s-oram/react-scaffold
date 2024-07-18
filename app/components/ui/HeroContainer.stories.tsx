import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from '~/components/ui/_private/StoryBackground'
import { HeroContainer } from './HeroContainer'
import { PlaceholderContent } from './PlaceholderContent'
import { token } from '~/styles/tokens'
import { css } from '@linaria/core'

const meta: Meta<typeof HeroContainer> = {
  title: 'Components/HeroContainer',
  component: HeroContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <StoryBackground padding={false}>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof HeroContainer>

const contentBackgroundStyle = css`
  border: 2px solid ${token('color-blue-500')};
  background-color: ${token('color-blue-200')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Primary: Story = {
  args: {
    header: <PlaceholderContent>Header</PlaceholderContent>,
    children: (
      <div className={contentBackgroundStyle}>
        <div>Hero Banner</div>
      </div>
    ),
  },
}
