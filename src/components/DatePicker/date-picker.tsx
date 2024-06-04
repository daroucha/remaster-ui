import {
  FieldBaseLabel,
  FieldBaseLegend,
  FieldBaseTip,
  FieldBaseTipArea,
  StyledFieldBase,
} from '../Field/styled-field-base'
import DatePickerCalendar from './date-picker-calendar'
import StyledDatePicker from './styled-date-picker'

interface PropsDatePicker {
  children?: React.ReactNode
  label?: string
  tip?: string
}

function DatePicker({ children, label, tip }: PropsDatePicker) {
  return (
    <StyledFieldBase>
      {label && (
        <FieldBaseLegend as="legend">
          <FieldBaseLabel>{label}</FieldBaseLabel>
        </FieldBaseLegend>
      )}

      <StyledDatePicker>{children}</StyledDatePicker>

      {tip && (
        <FieldBaseTipArea>
          <FieldBaseTip>{tip}</FieldBaseTip>
        </FieldBaseTipArea>
      )}
    </StyledFieldBase>
  )
}

DatePicker.Calendar = DatePickerCalendar

export default DatePicker
