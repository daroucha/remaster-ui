import { useId } from 'react'
import { PropsField } from '../Field/field-props'
import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import { StyledComboBox } from './style-combo-box'
import {
  InputBaseIcon,
  InputBaseTrailing,
  InputBaseElement,
  StyledInputBase,
} from '../Field/styled-input-base'
import { PropsInput } from '../Field/input-props'

interface PropsComboBox extends PropsField, PropsInput {
  options: string[]
}

function ComboBox({ options, label, tip, leading, trailing }: PropsComboBox) {
  const comboBoxId = useId()

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledComboBox>
        <StyledInputBase as="label">
          {leading && <InputBaseIcon>{leading}</InputBaseIcon>}

          <InputBaseTrailing>dropdown</InputBaseTrailing>

          <InputBaseElement
            $leading={!!leading}
            $trailing={true}
            id={comboBoxId}
            type="text"
          />
        </StyledInputBase>
      </StyledComboBox>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export default ComboBox
