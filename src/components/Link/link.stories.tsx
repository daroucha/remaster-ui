import { Compass } from '@phosphor-icons/react'
import Link from './link'

export default {
  title: '🧭 Navigation/Link',
  component: Link,
}

export const Default = {
  args: {
    children: 'Link',
    disabled: false,
    href: '#',
    leading: <Compass />,
    size: 'small',
    trailing: true,
  },
}

export const AsButton = {
  args: {
    as: 'button',
    children: 'Link',
    disabled: false,
    href: '#',
    leading: <Compass />,
    size: 'small',
    trailing: true,
  },
}
