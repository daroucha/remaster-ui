import prefix from '@/utils/prefix'
import {
  IBIcon,
  IBText,
  StyledIconButton,
} from './styled-icon-button'
import { useId } from 'react'

type PolymorphicAsProp<E extends React.ElementType> = {
  as?: E
}

interface PropsIconButton
  extends PolymorphicAsProp<React.ElementType> {
  active?: boolean
  disabled?: boolean
  leading: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  size: 'small' | 'medium'
  text?: string
}

function IconButton({
  as,
  active,
  disabled,
  leading,
  onClick,
  size,
  text,
  ...restProps
}: PropsIconButton) {
  const iconButtonId = prefix + useId()

  return (
    <StyledIconButton
      as={as}
      id={iconButtonId}
      className={`${prefix}icon-button`}
      disabled={disabled}
      $active={active}
      onClick={(event: React.MouseEvent) => {
        if (onClick) {
          onClick(event)
        }
      }}
      {...restProps}
    >
      <IBIcon $size={size}>{leading}</IBIcon>

      {text && <IBText>{text}</IBText>}
    </StyledIconButton>
  )
}

export default IconButton
