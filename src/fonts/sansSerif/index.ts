/**
 * Daniel Aroucha, 2024
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { $primitives } from '@/tokens'
import styled from '@emotion/styled'
import sansSerifBook from './assets/book'
import sansSerifMedium from './assets/medium'
import sansSerifBold from './assets/bold'
import sansSerifBlack from './assets/black'

const FontTreatment = styled.span`
  font-family: ${$primitives.typography.fontFamily.sans};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const SansSerif = styled(FontTreatment)`
  @font-face {
    font-family: ${$primitives.typography.fontName.sans};
    font-weight: 300;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifBook})
      format('woff2');
  }

  @font-face {
    font-family: ${$primitives.typography.fontName.sans};
    font-weight: 400;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifMedium})
      format('woff2');
  }

  @font-face {
    font-family: ${$primitives.typography.fontName.sans};
    font-weight: 600;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifBold})
      format('woff2');
  }

  @font-face {
    font-family: ${$primitives.typography.fontName.sans};
    font-weight: 700;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifBlack})
      format('woff2');
  }
`

export default SansSerif
