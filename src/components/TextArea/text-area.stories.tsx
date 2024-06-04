import { Hexagon } from '@phosphor-icons/react'
import TextArea from './text-area'

export default {
  title: '📝 Form and Inputs/TextArea',
  component: TextArea,
}

export const Default = {
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Text Input',
    tip: "I'm a monster you created in your dad's memory",
    name: 'text_input',
    leading: <Hexagon />,
    rows: 5,
  },
}
