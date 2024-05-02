import type { Meta, StoryObj } from '@storybook/react'

import NavigationLink from './navigation-link'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NavigationLink> = {
  component: NavigationLink,
}

export default meta
type Story = StoryObj<typeof NavigationLink>

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}
