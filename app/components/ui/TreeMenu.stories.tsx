import type { Meta, StoryObj } from '@storybook/react'
import { StoryBackground } from '~/components/ui/_private/StoryBackground'
import { TreeMenu } from './TreeMenu'

const meta: Meta<typeof TreeMenu> = {
  title: 'Components/TreeMenu',
  component: TreeMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TreeMenu>

export const Primary: Story = {
  args: {
    items: [
      {
        label: 'Menu Item 1',
        initExpanded: true,
        children: [
          { label: 'Lorem Ipsum Dolor', href: '#' },
          { label: 'Consectetur Adipiscing', href: '#' },
          { label: 'Eiusmod Tempor Incididunt', href: '#' },
          { label: 'Dolore Magna', href: '#' },
          { label: 'Aliqua', href: '#' },
          { label: 'Elementum Nibh', href: '#' },
        ],
      },
      {
        label: 'Menu Item 2',
        children: [
          { label: 'Lorem Ipsum Dolor', href: '#' },
          { label: 'Consectetur Adipiscing', href: '#' },
          { label: 'Eiusmod Tempor Incididunt', href: '#' },
        ],
      },
      {
        label: 'Menu Item 3',
        children: [
          { label: 'Dolore Magna', href: '#' },
          { label: 'Aliqua', href: '#' },
          { label: 'Elementum Nibh', href: '#' },
        ],
      },
    ],
  },
}

export const DisabledItems: Story = {
  args: {
    items: [
      {
        label: 'Menu Item 1',
        initExpanded: true,
        children: [
          { label: 'Disabled Item 1' },
          { label: 'Disabled Item 2' },
          { label: 'Eiusmod Tempor Incididunt', href: '#' },
          { label: 'Dolore Magna', href: '#' },
          { label: 'Aliqua', href: '#' },
          { label: 'Elementum Nibh', href: '#' },
        ],
      },
      {
        label: 'Menu Item 2 (Disabled)',
      },
      {
        label: 'Menu Item 3',
        children: [
          { label: 'Dolore Magna', href: '#' },
          { label: 'Aliqua', href: '#' },
          { label: 'Elementum Nibh', href: '#' },
        ],
      },
    ],
  },
}
