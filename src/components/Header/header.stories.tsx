import NavigationLink from '../NavigationLink'
import Header from './header'

export default {
  title: '🧭 Navigation/Header',
  component: Header,
}

export const Default = {
  args: {
    children: (
      <>
        <NavigationLink text="Link" size="medium" />
        <NavigationLink text="Link" size="medium" />
        <NavigationLink text="Link" size="medium" />
        <NavigationLink text="Link" size="medium" />
      </>
    ),
    logo: 'My App',
  },
}
