import { Eye, EyeClosed, Hexagon, Lock } from '@phosphor-icons/react'
import TextInput, { PropsTextInput } from './text-input'
import { useState } from 'react'
import IconButton from '../IconButton'

const components: any = {
  password: Eye,
  text: EyeClosed,
}

export default {
  title: '📝 Form and Inputs/TextInput',
  component: TextInput,
}

export const Default = {
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Text Input',
    tip: "I'm a monster you created in your dad's memory",
    name: 'text_input',
    leading: <Hexagon />,
    type: 'text',
  } as PropsTextInput,
}

export const Password = {
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Text Input',
    tip: "I'm a monster you created in your dad's memory",
    name: 'text_input',
    leading: <Lock />,
    value: 'secret',
    type: 'password',
  } as PropsTextInput,
  render: ({ ...args }) => {
    const [type, setType] = useState<'text' | 'password'>(args.type)
    const [input, setInput] = useState(args.value)

    const handleClick = () => setType(type === 'password' ? 'text' : 'password')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setInput(event.target.value)

    const Icon = components[type]

    return (
      <>
        <TextInput
          {...args}
          onChange={handleChange}
          type={type}
          trailing={
            <IconButton
              disabled={args.disabled}
              leading={<Icon />}
              size="small"
              onClick={handleClick}
            />
          }
        />
      </>
    )
  },
}
