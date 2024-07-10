import { useContext, useEffect, useState } from 'react'
import { StyledSegmentedControl } from './styled-segmented-control'
import SegmentedControlContext from './segmented-control-context'
import SegmentedControlTab from './segmented-control-tab'

interface PropsSegmentedControl {
  children: React.ReactNode
  defaultValue?: string | number
  disabled?: boolean
  onChange?: (active: string | number) => void
}

function SegmentedControl({
  children,
  defaultValue = '',
  disabled,
  onChange,
}: PropsSegmentedControl) {
  const [active, setActive] = useState<string | number>(defaultValue)

  useEffect(() => {
    if (onChange) {
      onChange(active)
    }
  }, [active])

  const value = { disabled, active, setActive }

  return (
    <SegmentedControlContext.Provider value={value}>
      <StyledSegmentedControl>{children}</StyledSegmentedControl>
    </SegmentedControlContext.Provider>
  )
}

export const useSegmentedControlContext = () => {
  const context = useContext(SegmentedControlContext)

  if (!context) {
    throw new Error(
      `SegmentedControl compound components cannot be rendered outside the SegmentedControl component`
    )
  }

  return context
}

SegmentedControl.Tab = SegmentedControlTab

export type { PropsSegmentedControl }
export default SegmentedControl
