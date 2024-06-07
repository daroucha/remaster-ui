/**
 * Daniel Aroucha, 2024
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import $primitives from './primitives'

const $color = {
  // Icon
  icon: {
    text: {
      primary: {
        light: $primitives.colors.gray[300],
        dark: '',
      },
      secondary: {
        light: $primitives.colors.gray.base,
        dark: '',
      },
      tertiary: {
        light: $primitives.colors.gray[200],
        dark: '',
      },
    },
    plain: {
      primary: {
        light: '',
        dark: '',
      },
      secondary: {
        light: $primitives.colors.lightGray[300],
        dark: '',
      },
      tertiary: {
        light: $primitives.colors.lightGray[200],
        dark: '',
      },
    },
    inverted: {
      primary: {
        light: $primitives.colors.lightGray.white,
        dark: '',
      },
    },
    action: {
      default: {
        accent: {
          light: $primitives.colors.gray[400],
          dark: '',
        },
        support: {
          light: $primitives.colors.blue[300],
          dark: '',
        },
        neutral: {
          light: $primitives.colors.gray[200],
          dark: '',
        },
        alert: {
          light: $primitives.colors.red[300],
          dark: '',
        },
      },
      hover: {
        accent: {
          light: '',
          dark: '',
        },
        support: {
          light: '',
          dark: '',
        },
        neutral: {
          light: '',
          dark: '',
        },
        alert: {
          light: '',
          dark: '',
        },
      },
      disabled: {
        accent: {
          light: '',
          dark: '',
        },
        support: {
          light: '',
          dark: '',
        },
        neutral: {
          light: '',
          dark: '',
        },
        alert: {
          light: '',
          dark: '',
        },
      },
    },
  },

  // Text
  text: {
    title: {
      primary: {
        light: $primitives.colors.gray[400],
        dark: '',
      },
      secondary: {
        light: $primitives.colors.gray[300],
        dark: '',
      },
    },
    plain: {
      primary: {
        light: $primitives.colors.gray[300],
        dark: '',
      },
      secondary: {
        light: $primitives.colors.gray.base,
        dark: '',
      },
      tertiary: {
        light: $primitives.colors.gray[200],
        dark: '',
      },
    },
    inverted: {
      primary: {
        light: $primitives.colors.lightGray.white,
        dark: '',
      },
      secondary: {
        light: $primitives.colors.transparency.white[80],
        dark: '',
      },
      tertiary: {
        light: '',
        dark: '',
      },
    },
    action: {
      default: {
        accent: {
          light: $primitives.colors.gray[400],
          dark: '',
        },
        support: {
          light: $primitives.colors.blue[300],
          dark: '',
        },
        neutral: {
          light: $primitives.colors.gray[200],
          dark: '',
        },
        alert: {
          light: $primitives.colors.red[200],
          dark: '',
        },
      },
      hover: {
        accent: {
          light: '',
          dark: '',
        },
        support: {
          light: '',
          dark: '',
        },
        neutral: {
          light: $primitives.colors.gray[300],
          dark: '',
        },
        alert: {
          light: '',
          dark: '',
        },
      },
      disabled: {
        accent: {
          light: $primitives.colors.gray[100],
          dark: '',
        },
        support: {
          light: $primitives.colors.blue[100],
          dark: '',
        },
        neutral: {
          light: $primitives.colors.gray[100],
          dark: '',
        },
        alert: {
          light: '',
          dark: '',
        },
      },
    },
  },

  // Background
  background: {
    surface: {
      primary: {
        light: $primitives.colors.lightGray.white,
        dark: '',
      },
      secondary: {
        light: $primitives.colors.lightGray[100],
        dark: '',
      },
      tertiary: {
        light: $primitives.colors.lightGray[300],
        dark: '',
      },
    },
    elevation: {
      primary: {
        light: $primitives.colors.transparency.white[80],
        dark: '',
      },
      secondary: {
        light: $primitives.colors.transparency.white[60],
        dark: '',
      },
      tertiary: {
        light: $primitives.colors.transparency.white[50],
        dark: '',
      },
      overlay: {
        light: $primitives.colors.transparency.black[60],
        dark: '',
      },
    },
    action: {
      default: {
        accent: {
          light: $primitives.colors.gray[400],
          dark: '',
        },
        support: {
          light: $primitives.colors.gray[300],
          dark: '',
        },
        neutral: {
          light: $primitives.colors.lightGray.white,
          dark: '',
        },
        alert: {
          light: $primitives.colors.red[200],
          dark: '',
        },
      },
      hover: {
        accent: {
          light: $primitives.colors.gray[300],
          dark: '',
        },
        support: {
          light: $primitives.colors.gray.base,
          dark: '',
        },
        neutral: {
          light: $primitives.colors.transparency.black[4],
          dark: '',
        },
        alert: {
          light: '',
          dark: '',
        },
      },
      disabled: {
        accent: {
          light: $primitives.colors.gray[100],
          dark: '',
        },
        support: {
          light: $primitives.colors.gray[100],
          dark: '',
        },
        neutral: {
          light: $primitives.colors.lightGray[100],
          dark: '',
        },
        alert: {
          light: '',
          dark: '',
        },
      },
    },
  },

  // Border
  border: {
    default: {
      primary: {
        light: $primitives.colors.transparency.black[8],
        dark: '',
      },
      secondary: {
        light: $primitives.colors.transparency.black[4],
        dark: '',
      },
    },
    focus: {
      primary: {
        light: $primitives.colors.gray[400],
        dark: '',
      },
      secondary: {
        light: '',
        dark: '',
      },
    },
    disabled: {
      primary: {
        light: $primitives.colors.transparency.black[4],
        dark: '',
      },
      secondary: {
        light: $primitives.colors.transparency.black[2],
        dark: '',
      },
    },
  },
}

export default $color
