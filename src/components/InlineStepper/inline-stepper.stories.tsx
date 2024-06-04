import InlineStepper, { PropsInlineStepper } from './inline-stepper'

export default {
  title: '📝 Form and Inputs/InlineStepper',
  component: InlineStepper,
}

export const Default = {
  args: {
    disabled: false,
    total: 10,
    defaultValue: 3,
    onChange: (value) => console.log(value),
  } as PropsInlineStepper,
}
