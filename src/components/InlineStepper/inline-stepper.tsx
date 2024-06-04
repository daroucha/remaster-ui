import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { ISIcon, ISText, StyledInlineStepper } from './styled-inline-stepper'
import { useEffect, useState } from 'react'

interface PropsInlineStepper {
  defaultValue?: number
  disabled?: boolean
  min?: number
  onChange?: (value: number) => void
  total: number
}

function InlineStepper({
  defaultValue = 1,
  disabled,
  min = 1,
  onChange,
  total,
}: PropsInlineStepper) {
  const [current, setCurrent] = useState<number>(defaultValue)

  const handlePrev = () => {
    let prev = current

    if (prev > min) {
      prev--
    }

    setCurrent(prev)
  }

  const handleNext = () => {
    let next = current

    if (next < total) {
      next++
    }

    setCurrent(next)
  }

  useEffect(() => {
    if (!disabled && onChange) {
      onChange(current)
    }
  }, [current])

  return (
    <StyledInlineStepper $disabled={disabled}>
      <ISIcon
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            handlePrev()
          }
        }}
      >
        <CaretLeft />
      </ISIcon>

      <ISText>
        {current}/{total}
      </ISText>

      <ISIcon
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            handleNext()
          }
        }}
      >
        <CaretRight />
      </ISIcon>
    </StyledInlineStepper>
  )
}

export type { PropsInlineStepper }
export default InlineStepper
