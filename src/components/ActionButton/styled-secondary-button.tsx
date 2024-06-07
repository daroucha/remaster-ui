import styled from '@emotion/styled'
import { StyledButtonBase } from './styled-button-base'
import { $color, $size } from '@/tokens'

const shadow =
  '0px 5px 2px 0px rgba(0, 0, 0, 0.00), 0px 3px 1px 0px rgba(0, 0, 0, 0.01), 0px 2px 1px 0px rgba(0, 0, 0, 0.02), 0px 1px 1px 0px rgba(0, 0, 0, 0.04)'

const StyledSecondaryButton = styled(StyledButtonBase)<{
  disabled: boolean
}>`
  background: ${(props) =>
    props.disabled
      ? $color.background.action.disabled.neutral.light
      : $color.background.action.default.neutral.light};
  box-shadow: ${(props) =>
    props.disabled
      ? `0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}`
      : `0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}, ${shadow}`};
  color: ${$color.text.action.default.accent.light};

  &:hover {
    background: ${(props) =>
      props.disabled
        ? $color.background.action.disabled.neutral.light
        : `linear-gradient(0deg, ${$color.background.action.hover.neutral.light} 0%, ${$color.background.action.hover.neutral.light} 100%), ${$color.background.action.default.neutral.light}`};
  }
`

export default StyledSecondaryButton
