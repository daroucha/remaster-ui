import styled from 'styled-components'
import sansSerifBook from './book'
import sansSerifMedium from './medium'
import sansSerifBold from './bold'
import sansSerifBlack from './black'

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
