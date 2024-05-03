import { $color, $size, $space } from '@/tokens'
import styled from 'styled-components'

const shadow =
  '0px 5px 2px 0px rgba(0, 0, 0, 0.00), 0px 3px 1px 0px rgba(0, 0, 0, 0.01), 0px 2px 1px 0px rgba(0, 0, 0, 0.02), 0px 1px 1px 0px rgba(0, 0, 0, 0.04)'

const StyledCarouselButton = styled.button<{
  $size?: string
  disabled?: boolean
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  appearance: none;
  background: ${(props) =>
    props.disabled
      ? $color.background.action.disabled.neutral.light
      : $color.background.action.default.neutral.light};
  box-sizing: border-box;
  border: none;
  border-radius: ${$size.radius.md};
  box-shadow: ${(props) =>
    props.disabled
      ? `0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}`
      : `0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}, ${shadow}`};
  display: inline-flex;
  color: ${$color.icon.action.default.neutral.light};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  justify-content: center;
  opacity: ${(props) => (props.disabled ? '60%' : '100%')};
  padding-block: ${(props) =>
    props.$size === 'medium' ? $space.block.lg : $space.block.xxs};
  padding-inline: ${$space.block.xxs};

  &:hover {
    background: ${(props) =>
      props.disabled
        ? $color.background.action.disabled.neutral.light
        : `linear-gradient(0deg, ${$color.background.action.hover.neutral.light} 0%, ${$color.background.action.hover.neutral.light} 100%), ${$color.background.action.default.neutral.light}`};
  }
`

const CBIcon = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.xs};
  justify-content: center;
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

export { StyledCarouselButton, CBIcon }
