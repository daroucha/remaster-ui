import { ArrowsDownUp } from '@phosphor-icons/react'
import Dropdown from './dropdown'
import DropdownButton from './dropdown-button'

export default {
  title: '🖲️ Buttons/DropdownButton',
  component: DropdownButton,
  render: ({
    text,
    disabled,
    leading,
  }: {
    text: string
    disabled: boolean
    leading: React.ReactNode
  }) => {
    return (
      <Dropdown>
        <Dropdown.Button text={text} disabled={disabled} leading={leading} />

        <Dropdown.Menu>
          <Dropdown.Item title="Option" />
        </Dropdown.Menu>
      </Dropdown>
    )
  },
}

export const Default = {
  args: {
    disabled: false,
    leading: <ArrowsDownUp />,
    text: 'Dropdown Button',
  },
}
