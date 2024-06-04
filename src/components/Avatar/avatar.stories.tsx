import Avatar from './avatar'
import { UserCircle } from '@phosphor-icons/react'

export default {
  title: '🖼️ Icons and Imagens/Avatar',
  component: Avatar,
}

export const Default = {
  args: {
    alt: 'avatar',
    icon: <UserCircle weight="fill" />,
    src: '',
    size: 32,
    text: 'Avatar Text',
  },
}
