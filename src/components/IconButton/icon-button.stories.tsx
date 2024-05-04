import { BoundingBox } from '@phosphor-icons/react'
import IconButton from './icon-button'

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
