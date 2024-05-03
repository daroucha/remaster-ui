import styled from 'styled-components'
import { StyledButtonBase } from './styled-button-base'
import { $color } from '@/tokens'

const StyledPrimaryButton = styled(StyledButtonBase)<{ disabled: boolean }>`
  background: ${(props) =>
    props.disabled
      ? $color.background.action.disabled.accent.light
      : $color.background.action.default.accent.light};
  color: ${$color.text.inverted.primary.light};

  &:hover {
    background: ${(props) =>
      props.disabled
        ? $color.background.action.disabled.accent.light
        : $color.background.action.hover.accent.light};
  }
`

export default StyledPrimaryButton
