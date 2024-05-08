import { CaretRight, Check, DotsThree } from '@phosphor-icons/react'
import Menu from './menu'
import MenuItem from './menu-item'

type Options = {
  children?: React.ReactNode
  disabled?: boolean
  divider?: boolean
  leading?: React.ReactNode
  onClick?: () => void
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
            children={item.children}
            disabled={item.disabled}
            divider={item.divider}
            leading={item.leading}
            onClick={() => {
              if (item.onClick) item.onClick()
            }}
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
        onClick: () => console.log('Option 1'),
      },
      {
        title: 'Option 2',
        trailing: '⌘ C',
      },
      {
        title: 'Option 3',
        trailing: <Check />,
        onClick: () => console.log('Option 3'),
      },
      {
        title: 'Option 4',
        disabled: true,
        divider: true,
        onClick: () => console.log('Option 4'),
      },
      {
        leading: <DotsThree />,
        title: 'Option 5',
        trailing: <CaretRight />,
        children: (
          <Menu>
            <Menu.Item title="Option A" />
            <Menu.Item title="Option B" trailing={<CaretRight />}>
              <Menu>
                <Menu.Item title="Option I" />
                <Menu.Item title="Option II" />
                <Menu.Item title="Option III" />
              </Menu>
            </Menu.Item>
            <Menu.Item title="Option C" />
          </Menu>
        ),
      },
    ],
  },
}
