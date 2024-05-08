import {
  CaretRight,
  Check,
  DotsThree,
  Image,
  Plus,
} from '@phosphor-icons/react'
import Menu from './menu'
import MenuItem from './menu-item'

type Options = {
  disabled?: boolean
  divider?: boolean
  leading?: React.ReactNode
  title: string
  text?: string
  trailing?: React.ReactNode | string
}

export default {
  title: '🎛️ General/Menu',
  component: MenuItem,
  render: ({ ...args }) => {
    return (
      <Menu>
        {args.options.map((item: Options, index: number) => (
          <Menu.Item
            key={index}
            disabled={item.disabled}
            divider={item.divider}
            leading={item.leading}
            title={item.title}
            text={item.text}
            trailing={item.trailing}
          />
        ))}
      </Menu>
    )
  },
}

export const Default = {
  args: {
    options: [
      {
        title: 'Option 1',
        text: 'Option text goes here',
        trailing: '⌘ ⌥ F',
        divider: true,
      },
      {
        title: 'Option 2',
        trailing: '⌘ C',
      },
      {
        title: 'Option 3',
        trailing: <Check />,
      },
      {
        title: 'Option 4',
        disabled: true,
        divider: true,
      },
      {
        leading: <Image />,
        title: 'Option 5',
        trailing: <CaretRight />,
      },
      {
        leading: <DotsThree />,
        title: 'Option 6',
        trailing: <CaretRight />,
      },
    ],
  },
}
