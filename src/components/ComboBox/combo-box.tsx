import { PropsField } from '../Field/field-props'
import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import { StyledComboBox } from './styled-combo-box'
import { PropsInput } from '../Field/input-props'
import ComboBoxContext from './combo-box-context'
import ComboBoxInput from './combo-box-input'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ComboBoxOption, ComboBoxOptions } from './combo-box-options'
import useClickOutside from '@/utils/useClickOutside'

interface PropsComboBox extends PropsField, PropsInput {
  children: React.ReactNode
  onClose?: (query: string) => void
}

function ComboBox({ disabled, label, tip, children, onClose }: PropsComboBox) {
  const [visibility, setVisibility] = useState(false)
  const [query, setQuery] = useState('')

  const comboBoxRef = useRef(null)
  useClickOutside(comboBoxRef, () => setVisibility(false))

  const value = useMemo(
    () => ({ disabled, setQuery, visibility, setVisibility }),
    [disabled, setQuery, visibility, setVisibility],
  )

  useEffect(() => {
    if (!visibility && onClose) {
      onClose(query)
    }
  }, [visibility])

  return (
    <ComboBoxContext.Provider value={value}>
      <StyledFieldBase>
        {label && (
          <FieldBaseLegend as="legend">
            <FieldBaseLabel>{label}</FieldBaseLabel>
          </FieldBaseLegend>
        )}

        <StyledComboBox ref={comboBoxRef}>{children}</StyledComboBox>

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
ComboBox.Options = ComboBoxOptions
ComboBox.Option = ComboBoxOption

export type { PropsComboBox }
export default ComboBox
