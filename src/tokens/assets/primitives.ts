/**
 * Daniel Aroucha, 2024
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const $primitives = {
  colors: {
    blue: {
      base: '#006D8F',
      100: '#00D6FF',
      200: '#00A8D7',
      300: '#0084AC',
      400: '#055674',
    },
    red: {
      base: '#F11F48',
      100: '#F77E96',
      200: '#F44E6F',
      300: '#CE0D34',
      400: '#9E0B28',
    },
    lightGray: {
      white: '#FFFFFF',
      100: '#F2F2F2',
      200: '#D8D9D9',
      300: '#B1B3B4',
      400: '#97999B',
    },
    gray: {
      base: '#5B5C5D',
      100: '#7D8082',
      200: '#646668',
      300: '#323334',
      400: '#262627',
    },
    transparency: {
      black: {
        2: 'rgba(0,0,0,0.02)',
        4: 'rgba(0,0,0,0.04)',
        8: 'rgba(0,0,0,0.08)',
        60: 'rgba(0,0,0,0.60)',
      },
      white: {
        80: 'rgba(255,255,255,0.80)',
        60: 'rgba(255,255,255,0.60)',
        50: 'rgba(255,255,255,0.50)',
      },
    },
  },
  typography: {
    fontFamily: {
      sans: 'CircularStd, -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
      mono: 'InputMono',
    },
    fontWeight: {
      sans: {
        regular: 300,
        medium: 400,
        bold: 600,
      },
      mono: {
        regular: 300,
        medium: 400,
        bold: 600,
      },
    },
  },
  units: {
    '0.5x': '2px',
    '1x': '4px',
    '1.5x': '6px',
    '2x': '8px',
    '2.5x': '10px',
    '3x': '12px',
    '3.5x': '14px',
    '4x': '16px',
    '4.5x': '18px',
    '5x': '20px',
    '6x': '24px',
    '7x': '28px',
    '8x': '32px',
    '9x': '36px',
    '10x': '40px',
    '12x': '48px',
    '14x': '56px',
    '16x': '64px',
    '18x': '72px',
    '20x': '80px',
  },
}

export default $primitives
