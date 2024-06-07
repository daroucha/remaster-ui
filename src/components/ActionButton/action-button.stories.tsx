import ActionButton from './action-button'
import { Heart, ArrowRight } from '@phosphor-icons/react'

export default {
  title: '🖲️ Buttons/ActionButton',
  component: ActionButton,
}

export const Primary = {
  args: {
    loading: false,
    disabled: false,
    leading: <Heart />,
    size: 'small',
    text: 'Primary Button',
    trailing: <ArrowRight />,
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    loading: false,
    disabled: false,
    leading: <Heart />,
    size: 'small',
    text: 'Secondary Button',
    trailing: <ArrowRight />,
    variant: 'secondary',
  },
}

export const Tertiary = {
  args: {
    loading: false,
    disabled: false,
    leading: <Heart />,
    size: 'small',
    text: 'Tertiary Button',
    trailing: <ArrowRight />,
    variant: 'tertiary',
  },
}

export const AsLink = {
  args: {
    as: 'a',
    loading: false,
    disabled: false,
    leading: <Heart />,
    size: 'small',
    text: 'Secondary Button',
    trailing: <ArrowRight />,
    variant: 'secondary',
  },
}
