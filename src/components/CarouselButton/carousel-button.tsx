import { StyledCarouselButton, CBIcon } from './styled-carousel-button'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useId } from 'react'

const components: any = {
  prev: CaretLeft,
  next: CaretRight,
}

interface PropsCarouselButton {
  direction: 'prev' | 'next'
  disabled?: boolean
  onClick?: () => void
  size: 'small' | 'medium'
}

function CarouselButton({
  direction,
  disabled,
  onClick,
  size,
}: PropsCarouselButton) {
  const CarouselButtonId = useId()

  const Icon = components[direction]

  return (
    <StyledCarouselButton
      id={CarouselButtonId}
      disabled={disabled}
      $size={size}
      onClick={() => !disabled && onClick && onClick()}
    >
      <CBIcon>
        <Icon weight="fill" />
      </CBIcon>
    </StyledCarouselButton>
  )
}

export default CarouselButton
