import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DatePickerInput from './date-picker-input'

interface PropsDatePickerCalendar {
  children?: React.ReactNode
  closeOnScroll?: boolean
  dateFormat?: string | string[]
  disabled?: boolean
  locale?: string
  onCalendarClose?: () => void
  onCalendarOpen?: () => void
  onChange?: (date: Date | null) => void
  onSelect?: () => void
  placeholder?: string
  selected?: Date | null
  selectsEnd?: boolean
  selectsStart?: boolean
  leading?: React.ReactNode
}

function DatePickerCalendar(props: PropsDatePickerCalendar) {
  const {
    children,
    closeOnScroll,
    dateFormat,
    disabled,
    locale,
    onCalendarClose,
    onCalendarOpen,
    onChange,
    onSelect,
    placeholder,
    selected,
    selectsEnd,
    selectsStart,
    leading,
  } = props

  return (
    <ReactDatePicker
      customInput={
        <DatePickerInput leading={leading} placeholder={placeholder} />
      }
      closeOnScroll={closeOnScroll}
      dateFormat={dateFormat}
      disabled={disabled}
      selected={selected}
      locale={locale}
      onCalendarClose={() => {
        if (onCalendarClose) {
          onCalendarClose()
        }
      }}
      onCalendarOpen={() => {
        if (onCalendarOpen) {
          onCalendarOpen()
        }
      }}
      onChange={(date) => {
        if (onChange) {
          onChange(date)
        }
      }}
      onSelect={() => {
        if (onSelect) {
          onSelect()
        }
      }}
      placeholderText={placeholder}
      selectsStart={selectsStart}
      selectsEnd={selectsEnd}
    >
      {children}
    </ReactDatePicker>
  )
}

export default DatePickerCalendar
