import {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
} from '../Field/styled-field-base'
import {
  InputBaseIcon,
  InputBaseLeading,
  InputBaseTrailing,
} from '../Field/styled-input-base'
import { StyledSelect, StyledSelectBase } from './styled-select'
import { useId } from 'react'
import { PropsField } from '../Field/field-props'
import prefix from '@/utils/prefix'
import IconButton from '../IconButton'
import { CaretDown } from '@phosphor-icons/react'

interface OptionType {
  value: string
  label: string
  selected?: boolean
}

interface PropsSelect extends PropsField {
  leading?: React.ReactNode
  name?: string
  onChange?: (event: React.ChangeEvent) => void
  options: OptionType[]
  placeholder?: string
}

function Select({
  disabled = false,
  label,
  leading,
  name,
  onChange,
  options,
  placeholder,
  tip,
  value,
}: PropsSelect) {
  const selectId = prefix + useId()

  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledSelectBase $disabled={disabled}>
        {leading && (
          <InputBaseLeading>
            <InputBaseIcon>{leading}</InputBaseIcon>
          </InputBaseLeading>
        )}

        <InputBaseTrailing>
          <IconButton
            disabled={disabled}
            size="small"
            leading={<CaretDown />}
          />
        </InputBaseTrailing>

        <StyledSelect
          as="select"
          $leading={!!leading}
          $trailing={true}
          disabled={disabled}
          id={selectId}
          onChange={(event: React.ChangeEvent) => {
            if (!disabled && onChange) {
              onChange(event)
            }
          }}
          placeholder={placeholder}
          defaultValue={value}
          name={name}
        >
          {options.map((option, i) => (
            <option
              key={i}
              value={option.value}
              selected={option.selected}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectBase>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

export type { PropsSelect }
export default Select
