import { StyledNL, NLContent, NLIcon, NLText } from './styled-navigation-link'

interface PropsNavigationLink {
  active: boolean
  size: 'small' | 'medium'
  text: string
  disabled?: boolean
  leading?: React.ReactNode
  trailing?: React.ReactNode
  onClick?: () => void
  href?: string
}

function NavigationLink({
  active,
  size,
  text,
  disabled,
  leading,
  trailing,
  onClick,
  href,
}: PropsNavigationLink) {
  return (
    <StyledNL
      $state={active}
      $size={size}
      $disabled={disabled}
      onClick={() => onClick && onClick()}
      href={href}
    >
      <NLContent>
        {leading && <NLIcon>{leading}</NLIcon>}

        <NLText $state={active} $size={size}>
          {text}
        </NLText>

        {trailing && <NLIcon>{trailing}</NLIcon>}
      </NLContent>
    </StyledNL>
  )
}

export default NavigationLink
