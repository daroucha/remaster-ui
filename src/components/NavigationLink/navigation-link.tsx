import {
  StyledNL,
  NLContent,
  NLIcon,
  NLText,
} from './styled-navigation-link'

type PolymorphicAsProp<E extends React.ElementType> = {
  as?: E
}

interface PropsNavigationLink
  extends PolymorphicAsProp<React.ElementType> {
  active?: boolean
  disabled?: boolean
  href?: string
  leading?: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  size: 'small' | 'medium'
  text: string
  trailing?: React.ReactNode
}

function NavigationLink({
  as,
  active,
  disabled,
  href,
  leading,
  onClick,
  size,
  text,
  trailing,
  ...restProps
}: PropsNavigationLink) {
  return (
    <StyledNL
      $state={active}
      $size={size}
      $disabled={disabled}
      disabled={disabled}
      as={as}
      onClick={(event: React.MouseEvent) => {
        if (disabled) {
          event.preventDefault()
        }

        if (onClick) {
          onClick(event)
        }
      }}
      href={href}
      {...restProps}
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
