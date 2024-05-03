import styled from 'styled-components'
import { StyledButtonBase } from './styled-button-base'
import { $color } from '@/tokens'

const StyledPrimaryButton = styled(StyledButtonBase)`
  background: ${$color.background.action.default.accent.light};
  color: ${$color.text.inverted.primary.light};
`

export { StyledPrimaryButton }
