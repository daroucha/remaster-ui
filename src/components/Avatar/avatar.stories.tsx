import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './avatar'
import { UserCircle } from '@phosphor-icons/react'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    alt: 'avatar',
    icon: '',
    src: '',
    size: 32,
    text: 'Avatar Text',
  },
}
