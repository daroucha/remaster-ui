import DropdownButton from './dropdown-button'
import { StyledDropdown } from './styled-dropdown'
import { useContext, useState } from 'react'
import DropdownContext from './dropdown-context'
import { DropdownItem, DropdownMenu } from './dropdown-menu'

interface PropsDropdown {
  children: React.ReactNode
}

function Dropdown({ children }: PropsDropdown) {
  const [visibility, setVisibility] = useState(false)

  const value = { visibility, setVisibility }

  return (
    <DropdownContext.Provider value={value}>
      <StyledDropdown>{children}</StyledDropdown>
    </DropdownContext.Provider>
  )
}

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the Dropdown component`,
    )
  }

  return context
}

Dropdown.Button = DropdownButton
Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

export default Dropdown
