import styled from '@emotion/styled'
import { $color } from '@/tokens'
import { SansSerif } from '@/fonts'

const StyledRemaster = styled(SansSerif)`
  background: ${$color.background.surface.primary.light};
  display: block;
  height: 100%;
  width: 100%;
`

const StyledThemeToggle = styled.button`
  appearance: none;
`

export { StyledRemaster, StyledThemeToggle }
