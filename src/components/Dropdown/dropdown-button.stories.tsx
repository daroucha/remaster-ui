import { ArrowsDownUp } from '@phosphor-icons/react'
import Dropdown from './dropdown'
import DropdownButton from './dropdown-button'
import Avatar from '../Avatar'

export default {
  title: '🖲️ Buttons/DropdownButton',
  component: DropdownButton,
}

export const Default = {
  args: {
    disabled: false,
    leading: <ArrowsDownUp />,
    text: 'Dropdown Button',
  },
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
        <Dropdown.Button
          text={text}
          disabled={disabled}
          leading={leading}
        />

        <Dropdown.Menu>
          <Dropdown.Item title="Option" />
        </Dropdown.Menu>
      </Dropdown>
    )
  },
}

export const WithAvatar = {
  args: {
    disabled: false,
    leading: <ArrowsDownUp />,
    text: 'Dropdown Button',
  },
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
        <Dropdown.Button
          text={text}
          disabled={disabled}
          leading={<Avatar text="John Doe" />}
        />

        <Dropdown.Menu>
          <Dropdown.Item title="Option" />
        </Dropdown.Menu>
      </Dropdown>
    )
  },
}
