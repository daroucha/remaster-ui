import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import {
  StyledCheckboxArea,
  CheckboxInput,
  CheckboxLabel,
} from './styled-checkbox'
import { useId } from 'react'

interface PropsCheckbox {
  disabled?: boolean
  label?: string
  text?: string
  tip?: string
}

function Checkbox({ disabled, label, text, tip }: PropsCheckbox) {
  const checkboxId = useId()

  return (
    <StyledFieldBase>
      <FieldBaseLegend as="legend">
        <FieldBaseLabel>{label}</FieldBaseLabel>
      </FieldBaseLegend>

      <StyledCheckboxArea $disabled={disabled}>
        <CheckboxInput id={checkboxId} disabled={disabled} />
        <CheckboxLabel>{text}</CheckboxLabel>
      </StyledCheckboxArea>

      <FieldBaseTipArea>
        <FieldBaseTip>{tip}</FieldBaseTip>
      </FieldBaseTipArea>
    </StyledFieldBase>
  )
}

export default Checkbox
