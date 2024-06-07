import styled from '@emotion/styled'
import { StyledButtonBase } from './styled-button-base'
import { $color, $size } from '@/tokens'

const StyledTertiaryButton = styled(StyledButtonBase)<{
  disabled: boolean
}>`
  background: ${(props) =>
    props.disabled
      ? $color.background.action.disabled.neutral.light
      : $color.background.action.default.neutral.light};
  box-shadow: 0 0 0 ${$size.border.sm}
    ${$color.border.default.secondary.light};
  color: ${$color.text.action.default.accent.light};

  &:hover {
    background: ${(props) =>
      props.disabled
        ? $color.background.action.disabled.neutral.light
        : `linear-gradient(0deg, ${$color.background.action.hover.neutral.light} 0%, ${$color.background.action.hover.neutral.light} 100%), ${$color.background.action.default.neutral.light}`};
  }
`

export default StyledTertiaryButton
