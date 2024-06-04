import { CaretDown } from '@phosphor-icons/react'
import { useDropdownContext } from './dropdown'
import {
  DBCaret,
  DBContent,
  DBIcon,
  DBText,
  StyledDropdownButton,
} from './styled-dropdown-button'
import prefix from '@/utils/prefix'
import { useId } from 'react'

interface PropsDropdownButton {
  caret?: boolean
  disabled?: boolean
  leading?: React.ReactNode
  text?: string
}

function DropdownButton({
  caret = true,
  disabled,
  leading,
  text,
}: PropsDropdownButton) {
  const { visibility, setVisibility } = useDropdownContext()

  const dropdownButtonId = prefix + useId()

  const hasText = !!text && text.length > 0

  return (
    <StyledDropdownButton
      $active={visibility}
      id={dropdownButtonId}
      className={`${prefix}dropdown-button`}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          setVisibility(!visibility)
        }
      }}
    >
      {leading && <DBIcon>{leading}</DBIcon>}

      {(hasText || caret) && (
        <DBContent>
          {hasText && <DBText>{text}</DBText>}

          {caret && (
            <DBCaret $position={visibility}>
              <CaretDown weight="fill" />
            </DBCaret>
          )}
        </DBContent>
      )}
    </StyledDropdownButton>
  )
}

export default DropdownButton
