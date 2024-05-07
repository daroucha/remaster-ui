import {
  StyledInputBase,
  InputBaseIcon,
  InputBaseTrailing,
  InputBaseElement,
} from '../Field/styled-input-base'
import { PropsInput } from '../Field/input-props'
import { useEffect, useId, useState } from 'react'
import prefix from '@/utils/prefix'
import { useComboBoxContext } from './combo-box'
import IconButton from '../IconButton'
import { CaretDown, CaretUp, XCircle } from '@phosphor-icons/react'

const components: any = {
  hide: CaretUp,
  show: CaretDown,
}

interface PropsComboBoxInput extends PropsInput {
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: (event: React.MouseEvent) => void
  value: string
}

function ComboBoxInput({
  leading,
  onBlur,
  onChange,
  onClear,
  placeholder,
  value,
}: PropsComboBoxInput) {
  const { disabled, visibility, setQuery, setVisibility } = useComboBoxContext()

  const comboBoxInputId = prefix + useId()

  const [caretDirection, setCaretDirection] = useState('show')

  useEffect(() => {
    setCaretDirection(visibility ? 'hide' : 'show')
  }, [visibility])

  useEffect(() => {
    setQuery(value)
  }, [value])

  const Caret = components[caretDirection]

  return (
    <StyledInputBase $disabled={disabled}>
      {leading && <InputBaseIcon>{leading}</InputBaseIcon>}

      <InputBaseTrailing>
        {value && (
          <IconButton
            disabled={disabled}
            size="small"
            leading={<XCircle weight="fill" />}
            onClick={(event) => {
              if (onClear) {
                onClear(event)
              }
            }}
          />
        )}

        <IconButton
          disabled={disabled}
          size="small"
          leading={<Caret />}
          onClick={() => setVisibility(!visibility)}
        />
      </InputBaseTrailing>

      <InputBaseElement
        $leading={!!leading}
        $trailing={true}
        disabled={disabled}
        id={comboBoxInputId}
        onBlur={(event) => {
          if (onBlur) {
            onBlur(event)
          }
        }}
        onChange={(event) => {
          if (!disabled && onChange) {
            onChange(event)
          }
        }}
        onFocus={() => {
          setVisibility(true)
        }}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </StyledInputBase>
  )
}

export default ComboBoxInput
