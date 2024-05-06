import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledComboBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

const shadow =
  '0px 51px 14px 0px rgba(0, 0, 0, 0.00), 0px 33px 13px 0px rgba(0, 0, 0, 0.01), 0px 18px 11px 0px rgba(0, 0, 0, 0.03), 0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)'

const CBMenu = styled.ul<{ $position: string }>`
  background: ${$color.background.elevation.secondary.light};
  backdrop-filter: blur(20px);
  border-bottom-left-radius: ${(props) =>
    props.$position === 'top' ? '0px' : $size.radius.md};
  border-bottom-right-radius: ${(props) =>
    props.$position === 'top' ? '0px' : $size.radius.md};
  border-top-left-radius: ${(props) =>
    props.$position === 'top' ? $size.radius.md : '0px'};
  border-top-right-radius: ${(props) =>
    props.$position === 'top' ? $size.radius.md : '0px'};
  bottom: ${(props) =>
    props.$position === 'bottom' ? $size.radius.md : 'initial'};
  box-shadow:
    0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light},
    ${shadow};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.xxs};
  list-style: none;
  left: ${$size.border.sm};
  margin: 0;
  padding-inline: 0;
  padding-bottom: ${(props) =>
    props.$position === 'top'
      ? `calc(${$size.radius.md} + ${$space.block.xxs})`
      : $space.block.xxs};
  padding-top: ${(props) =>
    props.$position === 'bottom'
      ? `calc(${$size.radius.md} + ${$space.block.xxs})`
      : $space.block.xxs};
  position: absolute;
  top: ${(props) => (props.$position === 'top' ? $size.radius.md : 'initial')};
  transform: ${(props) =>
    props.$position === 'top' ? 'translateY(-100%)' : 'translateY(100%)'};
  width: calc(100% - calc(${$size.border.sm} * 2));
  z-index: 1;
`

const CBOption = styled(SansSerif)<{ $active?: boolean; $clickable?: boolean }>`
  align-items: center;
  background: ${(props) =>
    props.$active
      ? $color.background.action.hover.neutral.light
      : 'transparent'};
  box-sizing: border-box;
  color: ${$color.text.plain.secondary.light};
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.md};
  user-select: none;
  width: 100%;

  &:hover {
    background: ${(props) =>
      props.$clickable
        ? $color.background.action.hover.neutral.light
        : 'transparent'};
  }

  svg {
    height: ${$size.icon.xs};
    width: ${$size.icon.xs};
  }
`

const CBOptionText = styled.span`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
`

export { StyledComboBox, CBMenu, CBOption, CBOptionText }
