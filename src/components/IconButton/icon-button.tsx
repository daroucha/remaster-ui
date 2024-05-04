import { IBIcon, IBText, StyledIconButton } from './styled-icon-button'

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
  return (
    <StyledIconButton
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
