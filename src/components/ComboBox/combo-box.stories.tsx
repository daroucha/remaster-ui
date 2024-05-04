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
    tip: "I'm a monster you created in your dad's memory",
    children: (
      <ComboBox.Input leading={<UserCircle />} placeholder="Combo Box" />
    ),
  },
}
