import {
  ButtonIconBase,
  ButtonTextBase,
  ButtonLoadingBase,
} from './styled-button-base'
import StyledPrimaryButton from './styled-primary-button'
import StyledSecondaryButton from './styled-secondary-button'
import StyledTertiaryButton from './styled-tertiary-button'
import { SvgSpinner } from '@/icons'
import { MouseEvent, useId } from 'react'

const components: any = {
  primary: StyledPrimaryButton,
  secondary: StyledSecondaryButton,
  tertiary: StyledTertiaryButton,
}

interface PropsActionButton {
  disabled?: boolean
  leading?: React.ReactNode
  loading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size: 'small' | 'medium'
  text: string
  trailing?: React.ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
}

function ActionButton({
  disabled,
  leading,
  loading,
  onClick,
  size,
  text,
  trailing,
  variant,
}: PropsActionButton) {
  const ActionButtonId = useId()

  const Button = components[variant]

  return (
    <Button
      id={ActionButtonId}
      disabled={disabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) {
          event.preventDefault()
        }

        if (onClick) {
          onClick(event)
        }
      }}
    >
      {loading && (
        <ButtonLoadingBase>
          <SvgSpinner />
        </ButtonLoadingBase>
      )}

      {leading && <ButtonIconBase $loading={loading}>{leading}</ButtonIconBase>}

      <ButtonTextBase $size={size} $loading={loading}>
        {text}
      </ButtonTextBase>

      {trailing && (
        <ButtonIconBase $loading={loading}>{trailing}</ButtonIconBase>
      )}
    </Button>
  )
}

export default ActionButton
