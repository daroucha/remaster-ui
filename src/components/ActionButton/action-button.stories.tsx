import PrimaryButton from './primary-button'
import { Heart, ArrowRight } from '@phosphor-icons/react'

export default {
  title: '🖲️ Buttons/ActionButton/PrimaryButton',
  component: PrimaryButton,
}

export const Default = {
  args: {
    loading: false,
    disabled: false,
    leading: <Heart />,
    size: 'small',
    text: 'Primary Button',
    trailing: <ArrowRight />,
  },
}
