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
import { useId } from 'react'

interface PropsCheckbox {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
  indeterminate?: boolean
  text?: string
  tip?: string
  value?: string | string[]
}

function Checkbox({
  checked,
  disabled = false,
  label,
  onChange,
  indeterminate = false,
  text,
  tip,
  value,
}: PropsCheckbox) {
  const checkboxId = useId()

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledCheckboxArea $disabled={disabled}>
        <CheckboxInputArea $disabled={disabled}>
          <CheckboxInputMark $checked={checked}>
            <Check weight="bold" />
          </CheckboxInputMark>

          <CheckboxInput
            id={checkboxId}
            disabled={disabled}
            checked={checked}
            onChange={(event) => {
              if (disabled) {
                event.preventDefault()
              }

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

        {text && <CheckboxLabel $checked={checked}>{text}</CheckboxLabel>}
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
