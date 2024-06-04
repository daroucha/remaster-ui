import prefix from '@/utils/prefix'
import {
  StyledTabControl,
  TCContent,
  TCIcon,
  TCIndicator,
  TCText,
  TCWrapper,
} from './styled-tab'
import { useTabContext } from './tab'
import { useId, useState, useEffect } from 'react'

interface PropsTabControl {
  value: string
  disabled?: boolean
  leading?: React.ReactNode
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
  onClick?: () => void
  text?: string
  trailing?: React.ReactNode
  selectable?: boolean
}

function TabControl({
  disabled,
  leading,
  onChange,
  onClick,
  selectable = true,
  text,
  trailing,
  value,
}: PropsTabControl) {
  const context = useTabContext()
  const { active, setActive } = context
  const generalDisabled = context.disabled

  const tabControlId = prefix + useId()

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(active === value)
  }, [active])

  return (
    <StyledTabControl
      $disabled={disabled || generalDisabled}
      onClick={(event) => {
        if (!selectable) {
          event.preventDefault()
        }

        if ((!disabled || !generalDisabled) && onClick) {
          onClick()
        }
      }}
      htmlFor={tabControlId}
    >
      <TCContent as="div">
        <TCWrapper>
          {leading && <TCIcon>{leading}</TCIcon>}

          {text && <TCText $active={checked}>{text}</TCText>}
        </TCWrapper>

        {trailing && <TCIcon>{trailing}</TCIcon>}
      </TCContent>

      {selectable && (
        <input
          id={tabControlId}
          type="radio"
          name="tab-control-option"
          disabled={disabled || generalDisabled}
          checked={checked}
          value={value}
          onChange={(event) => {
            setActive(value)

            if ((!disabled || !generalDisabled) && onChange) {
              onChange(event, {
                checked: event.target.checked,
                id: tabControlId,
              })
            }
          }}
        />
      )}

      <TCIndicator $active={checked} />
    </StyledTabControl>
  )
}

export type { PropsTabControl }
export default TabControl
