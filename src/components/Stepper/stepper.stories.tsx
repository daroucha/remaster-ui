import Stepper, { PropsStepper } from './stepper'

export default {
  title: '📝 Form and Inputs/Stepper',
  component: Stepper,
}

export const Default = {
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Stepper text',
    tip: "I'm a monster you created in your dad's memory",
    min: 1,
    max: 6,
    onChange: (value) => console.log(value),
  } as PropsStepper,
}
