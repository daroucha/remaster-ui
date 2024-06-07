import { CaretRight } from '@phosphor-icons/react'
import {
  LinkContent,
  LinkIcon,
  LinkText,
  StyledLink,
} from './styled-link'

type PolymorphicAsProp<E extends React.ElementType> = {
  as?: E
}

interface PropsLink extends PolymorphicAsProp<React.ElementType> {
  children: string | React.ReactNode
  disabled?: boolean
  href?: string
  leading?: React.ReactNode
  onClick?: () => void
  size: 'small' | 'medium'
  trailing?: boolean
}

function Link({
  as,
  children,
  disabled,
  href,
  leading,
  onClick,
  size,
  trailing,
  ...restProps
}: PropsLink) {
  return (
    <StyledLink
      disabled={disabled}
      as={as}
      href={!disabled && href ? href : undefined}
      onClick={() => {
        if (!disabled && onClick) {
          onClick()
        }
      }}
      {...restProps}
    >
      <LinkContent>
        {leading && <LinkIcon>{leading}</LinkIcon>}

        <LinkText $size={size}>{children}</LinkText>
      </LinkContent>

      {trailing && (
        <LinkIcon>
          <CaretRight
            weight={size === 'small' ? 'regular' : 'bold'}
          />
        </LinkIcon>
      )}
    </StyledLink>
  )
}

export type { PropsLink }
export default Link
