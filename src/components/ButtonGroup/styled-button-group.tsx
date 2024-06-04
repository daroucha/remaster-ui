import { $color, $size, $space, $style } from '@/tokens'
import styled from 'styled-components'

const border = `inset 0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}`

const shadow = `0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}, ${$style.shadow.sm}`

const StyledButtonGroup = styled.div<{
  $variant: 'primary' | 'secondary'
}>`
  align-items: stretch;
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.md};
  box-shadow: ${(props) => (props.$variant === 'primary' ? shadow : border)};
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`

const BGItem = styled.div`
  align-items: center;
  display: inherit;
  flex-shrink: 0;
  height: auto;
  justify-content: inherit;

  .master-dropdown-button,
  .master-action-button-tertiary,
  .master-icon-button {
    box-shadow: none;
    height: 100%;
  }

  &:not(:last-child) {
    border-right-width: ${$size.border.sm};
    border-right-style: solid;
    border-right-color: ${$color.border.default.primary.light};

    .master-dropdown-button,
    .master-action-button-tertiary,
    .master-icon-button {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  &:not(:first-child) {
    .master-dropdown-button,
    .master-action-button-tertiary,
    .master-icon-button {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
`

export { StyledButtonGroup, BGItem }
