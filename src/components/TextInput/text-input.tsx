import prefix from '@/utils/prefix'
import { PropsField } from '../Field/field-props'
import { PropsInput } from '../Field/input-props'
import {
  FieldBaseLabel,
  FieldBaseLegend,
  FieldBaseTip,
  FieldBaseTipArea,
  StyledFieldBase,
} from '../Field/styled-field-base'
import {
  InputBaseElement,
  InputBaseIcon,
  InputBaseLeading,
  InputBaseTrailing,
  StyledInputBase,
} from '../Field/styled-input-base'
import { useId } from 'react'

interface PropsTextInput extends PropsField, PropsInput {
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  type: 'text' | 'password' | 'email'
}

function TextInput({
  disabled,
  label,
  leading,
  name,
  onChange,
  placeholder,
  required,
  tip,
  trailing,
  type = 'text',
  value,
}: PropsTextInput) {
  const textInputId = prefix + useId()

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel as="label" htmlFor={textInputId}>
            {label}
          </FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledInputBase $disabled={disabled}>
        {leading && (
          <InputBaseLeading>
            <InputBaseIcon>{leading}</InputBaseIcon>
          </InputBaseLeading>
        )}

        <InputBaseElement
          $leading={!!leading}
          $trailing={!!trailing}
          disabled={disabled}
          id={textInputId}
          name={name}
          onChange={(event) => {
            if (!disabled && onChange) {
              onChange(event)
            }
          }}
          placeholder={placeholder}
          required={required}
          type={type}
          defaultValue={value}
        />

        {trailing && <InputBaseTrailing>{trailing}</InputBaseTrailing>}
      </StyledInputBase>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export type { PropsTextInput }
export default TextInput
