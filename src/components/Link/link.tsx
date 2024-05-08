import { CaretRight } from '@phosphor-icons/react'
import { LinkContent, LinkIcon, LinkText, StyledLink } from './styled-link'

interface PropsLink {
  children: string | React.ReactNode
  disabled?: boolean
  href?: string
  leading?: React.ReactNode
  onClick?: () => void
  size: 'small' | 'medium'
  trailing?: boolean
}

function Link({
  children,
  disabled,
  href,
  leading,
  onClick,
  size,
  trailing,
}: PropsLink) {
  return (
    <StyledLink
      $disabled={disabled}
      href={!disabled && href ? href : undefined}
      onClick={() => {
        if (!disabled && onClick) {
          onClick()
        }
      }}
    >
      <LinkContent>
        {leading && <LinkIcon>{leading}</LinkIcon>}

        <LinkText $size={size}>{children}</LinkText>
      </LinkContent>

      {trailing && (
        <LinkIcon>
          <CaretRight weight={size === 'small' ? 'regular' : 'bold'} />
        </LinkIcon>
      )}
    </StyledLink>
  )
}

export type { PropsLink }
export default Link
