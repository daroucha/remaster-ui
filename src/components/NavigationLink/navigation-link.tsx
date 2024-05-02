import {
  StyledNavigationLink,
  NavigationLinkContent,
} from './styled-navigation-link'

interface PropsNavigationLink {
  active: boolean
  size: 'small' | 'medium'
  text: string
  disabled: boolean
  leading: React.ReactNode
  trailing: React.ReactNode
}

function NavigationLink({
  active,
  size,
  text,
  disabled,
  leading,
  trailing,
}: PropsNavigationLink) {
  return (
    <StyledNavigationLink $state={active} $disabled={disabled}>
      <NavigationLinkContent>{text}</NavigationLinkContent>
    </StyledNavigationLink>
  )
}

export default NavigationLink
