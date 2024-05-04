import {
  StyledInputBase,
  InputBaseIcon,
  InputBaseTrailing,
  InputBaseElement,
} from '../Field/styled-input-base'
import { PropsInput } from '../Field/input-props'
import { useId } from 'react'
import prefix from '@/utils/prefix'
import { useComboBoxContext } from './combo-box'

interface PropsComboBoxInput extends PropsInput {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

function ComboBoxInput({
  leading,
  onChange,
  placeholder,
  value,
}: PropsComboBoxInput) {
  const { disabled } = useComboBoxContext()

  const comboBoxInputId = prefix + useId()

  return (
    <StyledInputBase as="label" $disabled={disabled}>
      {leading && <InputBaseIcon>{leading}</InputBaseIcon>}

      <InputBaseTrailing>dropdown</InputBaseTrailing>

      <InputBaseElement
        $leading={!!leading}
        $trailing={true}
        disabled={disabled}
        id={comboBoxInputId}
        onChange={(event) => {
          if (!disabled && onChange) {
            onChange(event)
          }
        }}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </StyledInputBase>
  )
}

export default ComboBoxInput
