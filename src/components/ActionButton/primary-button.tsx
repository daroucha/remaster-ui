import {
  ButtonIconBase,
  ButtonTextBase,
  ButtonLoadingBase,
} from './styled-button-base'
import { StyledPrimaryButton } from './styled-primary-button'
import { Spinner } from '@/icons'

interface PropsPrimaryButton {
  disabled: boolean
  leading: React.ReactNode
  loading: boolean
  size: 'small' | 'medium'
  trailing: React.ReactNode
  text: string
}

function PrimaryButton({
  disabled,
  leading,
  loading,
  size,
  trailing,
  text,
}: PropsPrimaryButton) {
  return (
    <StyledPrimaryButton disabled={disabled}>
      {loading && (
        <ButtonLoadingBase>
          <Spinner />
        </ButtonLoadingBase>
      )}

      {leading && <ButtonIconBase $loading={loading}>{leading}</ButtonIconBase>}

      <ButtonTextBase $size={size} $loading={loading}>
        {text}
      </ButtonTextBase>

      {trailing && (
        <ButtonIconBase $loading={loading}>{trailing}</ButtonIconBase>
      )}
    </StyledPrimaryButton>
  )
}

export default PrimaryButton
