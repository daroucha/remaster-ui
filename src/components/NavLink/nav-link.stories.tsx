import { Compass } from '@phosphor-icons/react'
import NavLink from './nav-link'

export default {
  title: '🧭 Navigation/NavLink',
  component: NavLink,
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
