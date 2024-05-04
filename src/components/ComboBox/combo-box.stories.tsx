import { UserCircle } from '@phosphor-icons/react'
import ComboBox from './combo-box'

export default {
  title: '📝 Form and Inputs/ComboBox',
  component: ComboBox,
}

export const Default = {
  args: {
    disabled: false,
    label: 'Label',
    text: 'ComboBox text',
    tip: "I'm a monster you created in your dad's memory",
    value: '',
    options: [],
    leading: <UserCircle />,
  },
}
