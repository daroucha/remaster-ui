/**
 * Daniel Aroucha, 2024
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import $primitives from './primitives'

const $size = {
  icon: {
    lg: $primitives.units['8x'],
    md: $primitives.units['6x'],
    sm: $primitives.units['5x'],
    xs: $primitives.units['4x'],
    xxs: $primitives.units['3x'],
  },
  type: {
    fontSize: {
      display: {
        lg: $primitives.units['16x'],
        md: $primitives.units['12x'],
        sm: $primitives.units['10x'],
      },
      title: {
        lg: $primitives.units['6x'],
        md: $primitives.units['5x'],
        sm: $primitives.units['4.5x'],
      },
      text: {
        lg: $primitives.units['4x'],
        md: $primitives.units['3.5x'],
        sm: $primitives.units['3x'],
      },
    },
    lineHeight: {
      display: {
        lg: $primitives.units['20x'],
        md: $primitives.units['14x'],
        sm: $primitives.units['12x'],
      },
      title: {
        lg: $primitives.units['10x'],
        md: $primitives.units['9x'],
        sm: $primitives.units['7x'],
      },
      text: {
        lg: $primitives.units['6x'],
        md: $primitives.units['5x'],
        sm: $primitives.units['4x'],
      },
    },
  },
  radius: {
    rounded: '10000px',
    lg: $primitives.units['3x'],
    md: $primitives.units['2x'],
    sm: $primitives.units['1.5x'],
  },
  border: {
    lg: $primitives.units['1x'],
    md: $primitives.units['0.5x'],
    sm: '1px',
  },
  breakpoint: {
    mobile: {
      default: 430,
      md: 430,
      sm: 320,
    },
    tablet: {
      default: 744,
      md: 1133,
      sm: 744,
    },
    desktop: {
      default: 1280,
      lg: 1920,
      md: 1728,
      sm: 1280,
    },
  },
  query: {
    mobile: 'max-width: 430px',
    tablet: '(min-width: 431px) and (max-width: 1133px)',
    desktop: 'min-width: 1134px',
  },
}

export default $size
