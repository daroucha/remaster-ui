import { useState } from 'react'
import DatePicker from './date-picker'
import { User } from '@phosphor-icons/react'

export default {
  title: '📝 Form and Inputs/DatePicker',
  component: DatePicker,
  render: ({
    disabled,
    placeholder,
    leading,
    ...args
  }: {
    disabled: boolean
    placeholder: string
    leading: React.ReactNode
  }) => {
    const [startDate, setStartDate] = useState(new Date())

    return (
      <DatePicker {...args}>
        <DatePicker.Calendar
          disabled={disabled}
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          leading={leading}
          placeholder={placeholder}
        ></DatePicker.Calendar>
      </DatePicker>
    )
  },
}

export const Default = {
  args: {
    disabled: false,
    label: 'Label',
    tip: "I'm a monster you created in your dad's memory",
    placeholder: 'DatePicker',
    leading: <User />,
  },
}
