import ReactDatePicker from 'react-datepicker'
import './date-picker.css'
import DatePickerInput from './date-picker-input'

interface PropsDatePickerCalendar {
  children?: React.ReactNode
  closeOnScroll?: boolean
  dateFormat?: string | string[]
  disabled?: boolean
  endDate?: Date | null
  excludeDates?: Date[]
  fixedHeight?: boolean
  leading?: React.ReactNode
  locale?: string
  maxDate?: Date | null
  maxTime?: Date | undefined
  minDate?: Date | null
  minTime?: Date | undefined
  onCalendarClose?: () => void
  onCalendarOpen?: () => void
  onChange?: (date: Date | null) => void
  onSelect?: () => void
  placeholder?: string
  selected?: Date | null
  selectsEnd?: boolean
  selectsStart?: boolean
  showYearPicker?: boolean
  startDate?: Date | null
}

function DatePickerCalendar(props: PropsDatePickerCalendar) {
  const {
    children,
    closeOnScroll,
    dateFormat,
    disabled,
    endDate,
    excludeDates,
    fixedHeight,
    leading,
    locale,
    maxDate,
    maxTime,
    minDate,
    minTime,
    onCalendarClose,
    onCalendarOpen,
    onChange,
    onSelect,
    placeholder,
    selected,
    selectsEnd,
    selectsStart,
    showYearPicker,
    startDate,
  } = props

  return (
    <ReactDatePicker
      calendarClassName="master-datepicker"
      customInput={
        <DatePickerInput leading={leading} placeholder={placeholder} />
      }
      closeOnScroll={closeOnScroll}
      dateFormat={dateFormat}
      disabled={disabled}
      endDate={endDate}
      excludeDates={excludeDates}
      fixedHeight={fixedHeight}
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
      maxDate={maxDate}
      maxTime={maxTime}
      minDate={minDate}
      minTime={minTime}
      placeholderText={placeholder}
      selected={selected}
      selectsEnd={selectsEnd}
      selectsStart={selectsStart}
      showPopperArrow={false}
      showYearPicker={showYearPicker}
      startDate={startDate}
    >
      {children}
    </ReactDatePicker>
  )
}

export default DatePickerCalendar
