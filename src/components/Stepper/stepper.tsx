import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import {
  InputBaseElement,
  InputBaseLeading,
  InputBaseTrailing,
  StyledInputBase,
} from '../Field/styled-input-base'
import { useEffect, useId, useRef, useState } from 'react'
import { PropsField } from '../Field/field-props'
import prefix from '@/utils/prefix'
import IconButton from '../IconButton'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

interface PropsStepper extends PropsField {
  max?: number
  min?: number
  name?: string
  onChange?: (value: string) => void
  placeholder?: string
}

function Stepper({
  disabled = false,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  tip,
  value,
}: PropsStepper) {
  const stepperId = prefix + useId()

  const stepperEl = useRef<HTMLInputElement>(null)

  const [computedValue, setValue] = useState<string>((value as string) || '')

  let number = Number(computedValue)

  const increase = () => {
    if (!disabled) {
      if (!max || number < max) {
        number++
      }
      setValue(number.toString())
    }
  }

  const decrease = () => {
    if (!disabled) {
      if (!min || number > min) {
        number--
      }
      setValue(number.toString())
    }
  }

  useEffect(() => {
    if (!disabled && onChange) {
      onChange(computedValue)
    }
  }, [computedValue])

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledInputBase $disabled={disabled}>
        <InputBaseLeading>
          <IconButton
            disabled={disabled}
            leading={<CaretLeft />}
            size="small"
            onClick={decrease}
          />
        </InputBaseLeading>

        <InputBaseTrailing>
          <IconButton
            disabled={disabled}
            leading={<CaretRight />}
            size="small"
            onClick={increase}
          />
        </InputBaseTrailing>

        <InputBaseElement
          $leading={true}
          $trailing={true}
          disabled={disabled}
          id={stepperId}
          name={name}
          onChange={(event) => {
            if (!disabled) {
              setValue(event.target.value)
            }
          }}
          placeholder={placeholder}
          type="number"
          value={computedValue}
          max={max}
          min={min}
          ref={stepperEl}
        />
      </StyledInputBase>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export type { PropsStepper }
export default Stepper
