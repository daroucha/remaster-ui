import prefix from '@/utils/prefix'
import { IBIcon, IBText, StyledIconButton } from './styled-icon-button'
import { useId } from 'react'

interface PropsIconButton {
  active?: boolean
  disabled?: boolean
  leading: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  size: 'small' | 'medium'
  text?: string
}

function IconButton({
  active,
  disabled,
  leading,
  onClick,
  size,
  text,
}: PropsIconButton) {
  const iconButtonId = prefix + useId()

  return (
    <StyledIconButton
      id={iconButtonId}
      className={`${prefix}icon-button`}
      disabled={disabled}
      $active={active}
      onClick={(event) => {
        if (onClick) {
          onClick(event)
        }
      }}
    >
      <IBIcon $size={size}>{leading}</IBIcon>

      {text && <IBText>{text}</IBText>}
    </StyledIconButton>
  )
}

export default IconButton
