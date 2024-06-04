import { UserCircle } from '@phosphor-icons/react'
import ComboBox, { PropsComboBox } from './combo-box'
import { useState } from 'react'

export default {
  title: '📝 Form and Inputs/ComboBox',
  component: ComboBox,
  render: ({ placeholder, ...args }: PropsComboBox) => {
    const people = [
      'Durward Reynolds',
      'Kenton Towne',
      'Therese Wunsch',
      'Benedict Kessler',
      'Katelyn Rohan',
    ]

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState(selectedPerson)

    const filteredPeople =
      query === ''
        ? people
        : people.filter((person) => {
            return person.toLowerCase().includes(query.toLowerCase())
          })

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      const findValue = people.filter((person) => {
        return person.toLowerCase().includes(value.toLowerCase())
      })

      if (findValue.length < 1) {
        setQuery(selectedPerson)
      }
    }

    const handleClose = (value: string) => {
      if (value === '' && selectedPerson !== '') {
        setQuery(selectedPerson)
      }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setQuery(event.target.value)

    const handleClick = (person: string) => {
      setSelectedPerson(person)
      setQuery(person)
    }

    const handleClear = () => {
      setQuery('')
      setSelectedPerson('')
    }

    return (
      <ComboBox onClose={handleClose} {...args}>
        <ComboBox.Input
          leading={<UserCircle />}
          placeholder={placeholder}
          value={query}
          onBlur={handleBlur}
          onChange={handleChange}
          onClear={handleClear}
        />

        <ComboBox.Options position="bottom">
          {filteredPeople.map((person, index) => (
            <ComboBox.Option
              key={index}
              active={selectedPerson === person}
              onClick={() => handleClick(person)}
              text={person}
            />
          ))}
        </ComboBox.Options>
      </ComboBox>
    )
  },
}

export const Default = {
  args: {
    label: 'Label',
    tip: "I'm a monster you created in your dad's memory",
    disabled: false,
    placeholder: 'Combo Box',
  },
}
