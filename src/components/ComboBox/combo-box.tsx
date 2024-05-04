import { PropsField } from '../Field/field-props'
import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import { StyledComboBox } from './style-combo-box'
import { PropsInput } from '../Field/input-props'
import ComboBoxContext from './combo-box-context'
import ComboBoxInput from './combo-box-input'
import { useContext, useMemo, useState } from 'react'

interface PropsComboBox extends PropsField, PropsInput {
  children: React.ReactNode
}

function ComboBox({ disabled, label, tip, children }: PropsComboBox) {
  const [query, setQuery] = useState('')

  const value = useMemo(() => ({ disabled, setQuery }), [disabled, setQuery])

  return (
    <ComboBoxContext.Provider value={value}>
      <StyledFieldBase>
        {label && (
          <FieldBaseLegend as="legend">
            <FieldBaseLabel>{label}</FieldBaseLabel>
          </FieldBaseLegend>
        )}

        <StyledComboBox>{children}</StyledComboBox>

        {tip && (
          <FieldBaseTipArea>
            <FieldBaseTip>{tip}</FieldBaseTip>
          </FieldBaseTipArea>
        )}
      </StyledFieldBase>
    </ComboBoxContext.Provider>
  )
}

export const useComboBoxContext = () => {
  const context = useContext(ComboBoxContext)

  if (!context) {
    throw new Error(
      `ComboBox compound components cannot be rendered outside the ComboBox component`,
    )
  }

  return context
}

ComboBox.Input = ComboBoxInput

export default ComboBox
