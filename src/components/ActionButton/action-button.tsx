import prefix from '@/utils/prefix'
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

type PolymorphicAsProp<E extends React.ElementType> = {
  as?: E
}

interface PropsActionButton
  extends PolymorphicAsProp<React.ElementType> {
  disabled?: boolean
  leading?: React.ReactNode
  loading?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  size: 'small' | 'medium'
  text: string
  type?: string
  to?: string
  trailing?: React.ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
}

function ActionButton({
  as,
  disabled,
  leading,
  loading,
  onClick,
  size,
  text,
  type,
  trailing,
  variant,
  ...restProps
}: PropsActionButton) {
  const ActionButtonId = prefix + useId()

  const Button = components[variant]

  return (
    <Button
      as={as}
      id={ActionButtonId}
      className={`${prefix}action-button-${variant}`}
      disabled={disabled}
      onClick={(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        if (disabled) {
          event.preventDefault()
        }

        if (onClick) {
          onClick(event)
        }
      }}
      type={type}
      {...restProps}
    >
      {loading && (
        <ButtonLoadingBase>
          <SvgSpinner />
        </ButtonLoadingBase>
      )}

      {leading && (
        <ButtonIconBase $loading={loading}>{leading}</ButtonIconBase>
      )}

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
