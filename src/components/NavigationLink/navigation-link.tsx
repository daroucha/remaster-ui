import { StyledNL, NLContent, NLIcon, NLText } from './styled-navigation-link'

interface PropsNavigationLink {
  active: boolean
  disabled?: boolean
  href?: string
  leading?: React.ReactNode
  onClick?: () => void
  size: 'small' | 'medium'
  text: string
  trailing?: React.ReactNode
}

function NavigationLink({
  active,
  disabled,
  href,
  leading,
  onClick,
  size,
  text,
  trailing,
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
