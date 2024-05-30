import {
  Download,
  Info,
  PaintBucket,
  Plus,
  XCircle,
} from '@phosphor-icons/react'
import Tab from './tab'
import { useState } from 'react'
import { PropsTabControl } from './tab-control'
import IconButton from '../IconButton'

export default {
  title: '🧭 Navigation/Tab',
  component: Tab,
}

export const Default = {
  args: {
    disabled: false,
    defaultValue: 'tab1',
  },
  render: ({ ...args }) => {
    const tabs: PropsTabControl[] = [
      { value: 'tab1', text: 'Tab 1', leading: <Info /> },
      { value: 'tab2', text: 'Tab 2', leading: <Download />, disabled: true },
      { value: 'tab3', text: 'Tab 3', leading: <PaintBucket /> },
    ]

    return (
      <Tab {...args}>
        <Tab.Tabs>
          {tabs.map((tab, key) => (
            <Tab.Control
              key={key}
              disabled={tab?.disabled}
              text={tab?.text}
              value={tab.value}
              leading={tab?.leading}
              onClick={tab?.onClick}
              selectable={tab?.selectable}
              trailing={tab?.trailing}
            />
          ))}
        </Tab.Tabs>

        <Tab.Content value="tab1">Tab 1</Tab.Content>
        <Tab.Content value="tab2">Tab 2 - Another content</Tab.Content>
        <Tab.Content value="tab3">Tab 3 - The Last Tab</Tab.Content>
      </Tab>
    )
  },
}

export const Add = {
  args: {
    disabled: false,
    defaultValue: 'tab1',
  },
  render: ({ ...args }) => {
    const initialTabs: PropsTabControl[] = [
      { value: 'tab1', text: 'Tab 1' },
      { value: 'tab2', text: 'Tab 2' },
      { value: 'tab3', text: 'Tab 3' },
    ]

    const [tabs, setTabs] = useState(initialTabs)

    const addNewTab = () => {
      const value = 'tab5'
      const newTab = [
        {
          value,
          text: 'Tab 5',
          trailing: (
            <IconButton size="small" leading={<XCircle weight="fill" />} />
          ),
        },
      ]
      setTabs([...tabs, ...newTab])
    }

    return (
      <Tab {...args}>
        <Tab.Tabs>
          {tabs.map((tab, key) => (
            <Tab.Control
              key={key}
              text={tab?.text}
              value={tab.value}
              leading={tab?.leading}
              onClick={tab?.onClick}
              selectable={tab?.selectable}
              trailing={tab?.trailing}
            />
          ))}

          <Tab.Control
            value="add"
            leading={<Plus />}
            onClick={addNewTab}
            selectable={false}
          />
        </Tab.Tabs>

        <Tab.Content value="tab1">First tab</Tab.Content>
        <Tab.Content value="tab2">Second tab</Tab.Content>
        <Tab.Content value="tab3">Third tab</Tab.Content>
      </Tab>
    )
  },
}
