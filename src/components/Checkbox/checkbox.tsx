import { Check } from '@phosphor-icons/react'
import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import {
  StyledCheckboxArea,
  CheckboxInputArea,
  CheckboxInputMark,
  CheckboxInput,
  CheckboxLabel,
} from './styled-checkbox'
import { useId, useState } from 'react'
import { PropsField } from '../Field/field-props'
import prefix from '@/utils/prefix'

interface PropsCheckbox extends PropsField {
  checked?: boolean
  indeterminate?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
}

function Checkbox({
  checked = false,
  disabled = false,
  label,
  onChange,
  text,
  tip,
  value,
}: PropsCheckbox) {
  const checkboxId = prefix + useId()

  const [isChecked, setChecked] = useState(checked)

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledCheckboxArea $disabled={disabled}>
        <CheckboxInputArea $disabled={disabled}>
          <CheckboxInputMark $checked={isChecked}>
            <Check weight="bold" />
          </CheckboxInputMark>

          <CheckboxInput
            id={checkboxId}
            disabled={disabled}
            checked={isChecked}
            onChange={(event) => {
              if (disabled) {
                event.preventDefault()
              }

              setChecked(event.target.checked)

              if (onChange) {
                onChange(event, {
                  checked: event.target.checked,
                  id: checkboxId,
                })
              }
            }}
            value={value}
          />
        </CheckboxInputArea>

        {text && <CheckboxLabel $checked={isChecked}>{text}</CheckboxLabel>}
      </StyledCheckboxArea>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export default Checkbox
