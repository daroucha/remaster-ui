import { CaretDown } from '@phosphor-icons/react'
import { useDropdownContext } from './dropdown'
import {
  DBCaret,
  DBContent,
  DBIcon,
  DBText,
  StyledDropdownButton,
} from './styled-dropdown-button'

interface PropsDropdownButton {
  disabled?: boolean
  leading?: React.ReactNode
  text: string
}

function DropdownButton({ disabled, leading, text }: PropsDropdownButton) {
  const { visibility, setVisibility } = useDropdownContext()

  return (
    <StyledDropdownButton
      $active={visibility}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          setVisibility(!visibility)
        }
      }}
    >
      {leading && <DBIcon>{leading}</DBIcon>}

      <DBContent>
        <DBText>{text}</DBText>

        <DBCaret $position={visibility}>
          <CaretDown weight="fill" />
        </DBCaret>
      </DBContent>
    </StyledDropdownButton>
  )
}

export default DropdownButton
