import { Circle } from '@phosphor-icons/react'
import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import {
  StyledRadioButtonArea,
  RadioButtonInputArea,
  RadioButtonInputMark,
  RadioButtonInput,
  RadioButtonLabel,
} from './styled-radio-button'
import { useId } from 'react'
import { PropsField } from '../Field/field-props'
import prefix from '@/utils/prefix'

interface PropsRadioButton extends PropsField {
  checked?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
}

function RadioButton({
  checked,
  disabled = false,
  label,
  onChange,
  text,
  tip,
  value,
}: PropsRadioButton) {
  const radioId = prefix + useId()

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledRadioButtonArea $disabled={disabled}>
        <RadioButtonInputArea $disabled={disabled}>
          <RadioButtonInputMark $checked={checked}>
            <Circle weight="fill" />
          </RadioButtonInputMark>

          <RadioButtonInput
            id={radioId}
            disabled={disabled}
            checked={checked}
            onChange={(event) => {
              if (disabled) {
                event.preventDefault()
              }

              if (onChange) {
                onChange(event, {
                  checked: event.target.checked,
                  id: radioId,
                })
              }
            }}
            value={value}
          />
        </RadioButtonInputArea>

        {text && <RadioButtonLabel $checked={checked}>{text}</RadioButtonLabel>}
      </StyledRadioButtonArea>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export type { PropsRadioButton }
export default RadioButton
