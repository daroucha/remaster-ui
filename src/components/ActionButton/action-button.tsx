import {
  ButtonIconBase,
  ButtonTextBase,
  ButtonLoadingBase,
} from './styled-button-base'
import StyledPrimaryButton from './styled-primary-button'
import StyledSecondaryButton from './styled-secondary-button'
import StyledTertiaryButton from './styled-tertiary-button'
import { SvgSpinner } from '@/icons'

const components: any = {
  primary: StyledPrimaryButton,
  secondary: StyledSecondaryButton,
  tertiary: StyledTertiaryButton,
}

interface PropsActionButton {
  disabled?: boolean
  leading?: React.ReactNode
  loading?: boolean
  onClick?: () => void
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
  const Button = components[variant]

  return (
    <Button
      disabled={disabled}
      onClick={() => !disabled && onClick && onClick()}
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
