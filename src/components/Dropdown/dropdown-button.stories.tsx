import { ArrowsDownUp } from '@phosphor-icons/react'
import Dropdown from './dropdown'
import DropdownButton from './dropdown-button'
import Avatar from '../Avatar'

export default {
  title: '🖲️ Buttons/DropdownButton',
  component: DropdownButton,
}

export const Small = {
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

export const Medium = {
  args: {
    disabled: false,
    leading: <ArrowsDownUp />,
    text: 'Dropdown Button',
    size: 'medium',
  },
  render: ({
    text,
    disabled,
    leading,
    size,
  }: {
    text: string
    disabled: boolean
    leading: React.ReactNode
    size: 'small' | 'medium'
  }) => {
    return (
      <Dropdown>
        <Dropdown.Button
          text={text}
          disabled={disabled}
          leading={leading}
          size={size}
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
    size: 'small',
  },
  render: ({
    text,
    disabled,
    size,
  }: {
    text: string
    disabled: boolean
    leading: React.ReactNode
    size: 'small' | 'medium'
  }) => {
    return (
      <Dropdown>
        <Dropdown.Button
          text={text}
          disabled={disabled}
          leading={<Avatar text="John Doe" />}
          size={size}
        />

        <Dropdown.Menu>
          <Dropdown.Item title="Option" />
        </Dropdown.Menu>
      </Dropdown>
    )
  },
}
