import type { Meta, StoryObj } from '@storybook/react'

import NavigationLink from './navigation-link'
import { Heart, ArrowRight } from '@phosphor-icons/react'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NavigationLink> = {
  component: NavigationLink,
}

export default meta
type Story = StoryObj<typeof NavigationLink>

export const Default: Story = {
  args: {
    active: false,
    size: 'small',
    text: 'Navigation Link',
    disabled: false,
    leading: <Heart />,
    trailing: <ArrowRight />,
  },
}
