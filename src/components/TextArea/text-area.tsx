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

interface PropsTextArea extends PropsField, PropsInput {
  cols?: number
  name?: string
  onChange?: (event: React.ChangeEvent) => void
  required?: boolean
  rows?: number
}

function TextArea({
  cols,
  disabled,
  label,
  leading,
  name,
  onChange,
  placeholder,
  required,
  rows,
  tip,
  trailing,
  value,
}: PropsTextArea) {
  const textAreaId = prefix + useId()

  const TextAreaElement = InputBaseElement.withComponent('textarea')

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel as="label" htmlFor={textAreaId}>
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

        <TextAreaElement
          $leading={!!leading}
          $trailing={!!trailing}
          cols={cols}
          className="textarea_type"
          disabled={disabled}
          id={textAreaId}
          name={name}
          onChange={(event) => {
            if (!disabled && onChange) {
              onChange(event)
            }
          }}
          placeholder={placeholder}
          required={required}
          rows={rows}
          defaultValue={value}
        />

        {trailing && (
          <InputBaseTrailing>{trailing}</InputBaseTrailing>
        )}
      </StyledInputBase>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export type { PropsTextArea }
export default TextArea
