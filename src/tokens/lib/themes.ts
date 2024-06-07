/**
 * Daniel Aroucha, 2024
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import $primitives from './primitives'

const $theme = {
  light: {
    icon: {
      text: {
        primary: $primitives.colors.gray[300],
        secondary: $primitives.colors.gray.base,
        tertiary: $primitives.colors.gray[200],
      },
      plain: {
        primary: '',
        secondary: $primitives.colors.lightGray[300],
        tertiary: $primitives.colors.lightGray[200],
      },
      inverted: {
        primary: $primitives.colors.lightGray.white,
      },
      action: {
        default: {
          accent: $primitives.colors.gray[400],
          support: $primitives.colors.blue[300],
          neutral: $primitives.colors.gray[200],
          alert: $primitives.colors.red[300],
        },
        hover: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        disabled: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
      },
    },

    text: {
      title: {
        primary: $primitives.colors.gray[400],
        secondary: $primitives.colors.gray[300],
      },
      plain: {
        primary: $primitives.colors.gray[300],
        secondary: $primitives.colors.gray.base,
        tertiary: $primitives.colors.gray[200],
      },
      inverted: {
        primary: $primitives.colors.lightGray.white,
        secondary: $primitives.colors.transparency.white[80],
        tertiary: '',
      },
      action: {
        default: {
          accent: $primitives.colors.gray[400],
          support: $primitives.colors.blue[300],
          neutral: $primitives.colors.gray[200],
          alert: $primitives.colors.red[200],
        },
        hover: {
          accent: '',
          support: '',
          neutral: $primitives.colors.gray[300],
          alert: '',
        },
        disabled: {
          accent: $primitives.colors.gray[100],
          support: $primitives.colors.blue[100],
          neutral: $primitives.colors.gray[100],
          alert: '',
        },
      },
    },

    background: {
      surface: {
        primary: $primitives.colors.lightGray.white,
        secondary: $primitives.colors.lightGray[100],
        tertiary: $primitives.colors.lightGray[300],
      },
      elevation: {
        primary: $primitives.colors.transparency.white[80],
        secondary: $primitives.colors.transparency.white[60],
        tertiary: $primitives.colors.transparency.white[50],
        overlay: $primitives.colors.transparency.black[60],
      },
      action: {
        default: {
          accent: $primitives.colors.gray[400],
          support: $primitives.colors.gray[300],
          neutral: $primitives.colors.lightGray.white,
          alert: $primitives.colors.red[200],
        },
        hover: {
          accent: $primitives.colors.gray[300],
          support: $primitives.colors.gray.base,
          neutral: $primitives.colors.transparency.black[4],
          alert: '',
        },
        disabled: {
          accent: $primitives.colors.gray[100],
          support: $primitives.colors.gray[100],
          neutral: $primitives.colors.lightGray[100],
          alert: '',
        },
      },
    },

    border: {
      default: {
        primary: $primitives.colors.transparency.black[8],
        secondary: $primitives.colors.transparency.black[4],
      },
      focus: {
        primary: $primitives.colors.gray[400],
        secondary: '',
      },
      disabled: {
        primary: $primitives.colors.transparency.black[4],
        secondary: $primitives.colors.transparency.black[2],
      },
    },
  },

  dark: {
    icon: {
      text: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
      plain: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
      inverted: {
        primary: '',
      },
      action: {
        default: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        hover: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        disabled: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
      },
    },

    text: {
      title: {
        primary: '',
        secondary: '',
      },
      plain: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
      inverted: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
      action: {
        default: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        hover: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        disabled: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
      },
    },

    background: {
      surface: {
        primary: $primitives.colors.gray[400],
        secondary: '',
        tertiary: '',
      },
      elevation: {
        primary: '',
        secondary: '',
        tertiary: '',
        overlay: '',
      },
      action: {
        default: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        hover: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
        disabled: {
          accent: '',
          support: '',
          neutral: '',
          alert: '',
        },
      },
    },

    border: {
      default: {
        primary: '',
        secondary: '',
      },
      focus: {
        primary: '',
        secondary: '',
      },
      disabled: {
        primary: '',
        secondary: '',
      },
    },
  },
}

export default $theme
