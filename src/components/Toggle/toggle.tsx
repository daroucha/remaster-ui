import { Circle } from '@phosphor-icons/react'
import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import {
  StyledToggleArea,
  ToggleInputArea,
  ToggleInputMark,
  ToggleInput,
  ToggleLabel,
} from './styled-toggle'
import { useId, useState } from 'react'
import { PropsField } from '../Field/field-props'
import prefix from '@/utils/prefix'

interface PropsToggle extends PropsField {
  checked?: boolean
  indeterminate?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
}

function Toggle({
  checked = false,
  disabled = false,
  label,
  onChange,
  indeterminate = false,
  text,
  tip,
  value,
}: PropsToggle) {
  const toggleId = prefix + useId()

  const [isChecked, setChecked] = useState(checked)

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledToggleArea $disabled={disabled}>
        <ToggleInputArea $disabled={disabled}>
          <ToggleInputMark $checked={isChecked}>
            <Circle weight="fill" />
          </ToggleInputMark>

          <ToggleInput
            id={toggleId}
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
                  id: toggleId,
                })
              }
            }}
            value={value}
          />
        </ToggleInputArea>

        {text && <ToggleLabel $checked={isChecked}>{text}</ToggleLabel>}
      </StyledToggleArea>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export default Toggle
