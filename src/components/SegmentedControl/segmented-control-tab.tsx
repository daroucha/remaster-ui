import { useEffect, useId, useState } from 'react'
import { useSegmentedControlContext } from './segmented-control'
import {
  SCIcon,
  SCText,
  StyledSegmentedControlTab,
} from './styled-segmented-control'
import prefix from '@/utils/prefix'

interface PropsSegmentedControlTab {
  leading?: React.ReactNode
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
  text: string
  trailing?: React.ReactNode
  value: string | number
}

function SegmentedControlTab({
  leading,
  onChange,
  text,
  trailing,
  value,
}: PropsSegmentedControlTab) {
  const { disabled, active, setActive } = useSegmentedControlContext()

  const sCTabId = prefix + useId()

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(active === value)
  }, [active])

  return (
    <StyledSegmentedControlTab $checked={checked} $disabled={disabled}>
      {leading && <SCIcon>{leading}</SCIcon>}

      <SCText>{text}</SCText>

      {trailing && <SCIcon>{trailing}</SCIcon>}

      <input
        id={sCTabId}
        type="radio"
        name="segmented-control-option"
        value={value}
        onChange={(event) => {
          setActive(value)

          if (!disabled && onChange) {
            onChange(event, { checked: event.target.checked, id: sCTabId })
          }
        }}
      />
    </StyledSegmentedControlTab>
  )
}

export default SegmentedControlTab
