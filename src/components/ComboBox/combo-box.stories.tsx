import { UserCircle } from '@phosphor-icons/react'
import ComboBox from './combo-box'
import { useState } from 'react'

export default {
  title: '📝 Form and Inputs/ComboBox',
  component: ComboBox,
}

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

export const Default = {
  render: () => {
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

      if (value.toLowerCase() !== selectedPerson.toLowerCase()) {
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
      <ComboBox
        label="Label"
        tip="I'm a monster you created in your dad's memory"
      >
        <ComboBox.Input
          leading={<UserCircle />}
          placeholder="Combo Box"
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
