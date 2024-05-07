import {
  StyledInputBase,
  InputBaseIcon,
  InputBaseTrailing,
  InputBaseElement,
} from '../Field/styled-input-base'
import { forwardRef, useId } from 'react'
import prefix from '@/utils/prefix'
import IconButton from '../IconButton'
import { CalendarBlank } from '@phosphor-icons/react'

interface PropsDatePickerInput {
  disabled?: boolean
  leading?: React.ReactNode
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<Element>) => void
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  trailing?: React.ReactNode
  value?: string
}

const DatePickerInput = forwardRef(function DPInput(
  {
    disabled,
    leading,
    onBlur,
    onClick,
    onChange,
    onFocus,
    placeholder,
    value,
  }: PropsDatePickerInput,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const datePickerInputId = prefix + useId()

  return (
    <StyledInputBase $disabled={disabled}>
      {leading && <InputBaseIcon>{leading}</InputBaseIcon>}

      <InputBaseTrailing>
        <IconButton
          disabled={disabled}
          size="small"
          leading={<CalendarBlank />}
          onClick={(event) => {
            if (!disabled && onClick) {
              onClick(event)
            }
          }}
        />
      </InputBaseTrailing>

      <InputBaseElement
        $leading={!!leading}
        $trailing={true}
        ref={ref}
        disabled={disabled}
        id={datePickerInputId}
        onBlur={(event) => {
          if (!disabled && onBlur) {
            onBlur(event)
          }
        }}
        onChange={(event) => {
          if (!disabled && onChange) {
            onChange(event)
          }
        }}
        onFocus={(event) => {
          if (!disabled && onFocus) {
            onFocus(event)
          }
        }}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </StyledInputBase>
  )
})

export default DatePickerInput
