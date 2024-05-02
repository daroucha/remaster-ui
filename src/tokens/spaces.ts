import $primitives from './primitives'

const $spaces = {
  gap: {
    '6xl': $primitives.units['12x'],
    '4xl': $primitives.units['8x'],
    xxl: $primitives.units['5x'],
    xl: $primitives.units['4x'],
    lg: $primitives.units['3x'],
    md: $primitives.units['2x'],
    sm: $primitives.units['1.5x'],
    xs: $primitives.units['1x'],
    xxs: $primitives.units['0.5x'],
  },
  inline: {
    '4xl': $primitives.units['12x'],
    xxl: $primitives.units['8x'],
    xl: $primitives.units['6x'],
    lg: $primitives.units['4x'],
    md: $primitives.units['3x'],
    sm: $primitives.units['2x'],
    xs: $primitives.units['1.5x'],
    xxs: $primitives.units['1x'],
  },
  block: {
    '4xl': $primitives.units['12x'],
    xxl: $primitives.units['8x'],
    xl: $primitives.units['6x'],
    lg: $primitives.units['4x'],
    md: $primitives.units['3x'],
    sm: $primitives.units['2x'],
    xs: $primitives.units['1.5x'],
    xxs: $primitives.units['1x'],
  },
}

export default $spaces
