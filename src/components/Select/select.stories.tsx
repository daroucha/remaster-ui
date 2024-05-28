import { Play } from '@phosphor-icons/react'
import Select, { PropsSelect } from './select'

export default {
  title: '📝 Form and Inputs/Select',
  component: Select,
}

export const Default = {
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Select text',
    tip: "I'm a monster you created in your dad's memory",
    value: 'opt3' as string,
    options: [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
      { value: 'opt3', label: 'Option 3' },
    ],
    leading: <Play />,
  } as PropsSelect,
}
