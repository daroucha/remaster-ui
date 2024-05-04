import prefix from '@/utils/prefix'
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size: 'small' | 'medium'
}

function CarouselButton({
  direction,
  disabled,
  onClick,
  size,
}: PropsCarouselButton) {
  const CarouselButtonId = prefix + useId()

  const Icon = components[direction]

  return (
    <StyledCarouselButton
      id={CarouselButtonId}
      disabled={disabled}
      $size={size}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault()
        }

        if (onClick) {
          onClick(event)
        }
      }}
    >
      <CBIcon>
        <Icon weight="fill" />
      </CBIcon>
    </StyledCarouselButton>
  )
}

export default CarouselButton
