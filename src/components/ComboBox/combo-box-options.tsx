import { Check } from '@phosphor-icons/react'
import { useComboBoxContext } from './combo-box'
import { CBMenu, CBOption, CBOptionText } from './styled-combo-box'

interface PropsCBOptions {
  children: React.ReactNode
  position: 'top' | 'bottom'
}

function ComboBoxOptions({ children, position = 'bottom' }: PropsCBOptions) {
  const { visibility } = useComboBoxContext()

  return <>{visibility && <CBMenu $position={position}>{children}</CBMenu>}</>
}

interface PropsCBOption {
  active?: boolean
  onClick?: (event: React.MouseEvent<Element>) => void
  text: string
}

function ComboBoxOption({ active, onClick, text }: PropsCBOption) {
  const { setVisibility } = useComboBoxContext()

  return (
    <CBOption
      as="li"
      $active={active}
      $clickable={!!onClick}
      onClick={(event) => {
        if (onClick) {
          setVisibility(false)
          onClick(event)
        }
      }}
    >
      <CBOptionText>{text}</CBOptionText>

      {active && <Check />}
    </CBOption>
  )
}

export { ComboBoxOptions, ComboBoxOption }
