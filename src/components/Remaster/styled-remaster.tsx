import styled from '@emotion/styled'
import { SansSerif } from '@/fonts'

const StyledRemaster = styled(SansSerif)`
  background: ${(props) => props.theme.background.surface.primary};
  display: block;
  height: 100%;
  width: 100%;
`

const StyledThemeToggle = styled.button`
  appearance: none;
`

export { StyledRemaster, StyledThemeToggle }
