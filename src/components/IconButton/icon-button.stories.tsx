import { BoundingBox } from '@phosphor-icons/react'
import IconButton from './icon-button'
import Avatar from '../Avatar'

export default {
  title: '🖲️ Buttons/IconButton',
  component: IconButton,
}

export const Default = {
  args: {
    active: false,
    disabled: false,
    leading: <BoundingBox />,
    size: 'small',
    text: 'Text',
  },
}

export const WithAvatar = {
  args: {
    active: false,
    disabled: false,
    leading: <Avatar text="John Doe" />,
    size: 'small',
    text: 'Text',
  },
}

export const AsLink = {
  args: {
    as: 'a',
    active: false,
    disabled: false,
    leading: <BoundingBox />,
    size: 'small',
    text: 'Text',
  },
}
