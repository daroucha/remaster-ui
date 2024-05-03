/**
 * Daniel Aroucha, 2024
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from 'styled-components'
import sansSerifBook from './assets/book'
import sansSerifMedium from './assets/medium'
import sansSerifBold from './assets/bold'
import sansSerifBlack from './assets/black'

const SansSerif = styled.span`
  @font-face {
    font-family: CircularStd;
    font-weight: 300;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifBook})
      format('woff2');
  }

  @font-face {
    font-family: CircularStd;
    font-weight: 400;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifMedium})
      format('woff2');
  }

  @font-face {
    font-family: CircularStd;
    font-weight: 600;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifBold})
      format('woff2');
  }

  @font-face {
    font-family: CircularStd;
    font-weight: 700;
    font-style: normal;
    src: url(data:font/truetype;charset=utf-8;base64,${sansSerifBlack})
      format('woff2');
  }
`

export default SansSerif
