import { IBIcon, IBText, StyledIconButton } from './styled-icon-button'

interface PropsIconButton {
  active?: boolean
  disabled?: boolean
  leading: React.ReactNode
  size: 'small' | 'medium'
  text?: string
}

function IconButton({
  active,
  disabled,
  leading,
  size,
  text,
}: PropsIconButton) {
  return (
    <StyledIconButton disabled={disabled} $active={active}>
      <IBIcon $size={size}>{leading}</IBIcon>

      {text && <IBText>{text}</IBText>}
    </StyledIconButton>
  )
}

export default IconButton
