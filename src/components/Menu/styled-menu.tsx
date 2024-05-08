import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const shadow =
  '0px 51px 14px 0px rgba(0, 0, 0, 0.00), 0px 33px 13px 0px rgba(0, 0, 0, 0.01), 0px 18px 11px 0px rgba(0, 0, 0, 0.03), 0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)'

const StyledMenu = styled.div`
  background: ${$color.background.elevation.secondary.light};
  border-radius: ${$size.radius.md};
  box-shadow:
    0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light},
    ${shadow};
  box-sizing: border-box;
  color: ${$color.text.plain.secondary.light};
  display: inline-block;
  padding-block: ${$space.block.xxs};
  user-select: none;
`

const StyledMenuItem = styled.div<{ $disabled?: boolean }>`
  box-sizing: border-box;
  color: inherit;
  display: block;
  flex-direction: column;
  width: 100%;
`

const MIContent = styled(SansSerif)<{ $disabled?: boolean }>`
  align-items: center;
  box-sizing: border-box;
  color: inherit;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: flex;
  flex-direction: column;
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  gap: ${$space.gap.xs};
  margin-block: ${$primitives.units['0.5x']};
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  padding-block: ${$space.block.xs};
  padding-inline: ${$space.inline.md};
  width: -webkit-fill-available;

  &:hover {
    background: ${(props) =>
      props.$disabled
        ? 'transparent'
        : $color.background.action.hover.neutral.light};
  }
`

const MILine = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  justify-content: space-between;
  width: 100%;
`

const MIIcon = styled.div`
  color: inherit;
  display: block;
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

const MITrailing = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: ${$size.icon.xs};
`

const MIMainArea = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${$space.gap.md};
`

const MITitle = styled.span`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  line-height: ${$size.type.lineHeight.text.md};
`

const MIText = styled.span`
  font-size: ${$size.type.fontSize.text.sm};
  line-height: ${$size.type.lineHeight.text.sm};
  opacity: 60%;
`

const MIDivider = styled.div`
  box-sizing: border-box;
  color: ${$color.border.default.primary.light};
  display: block;
  padding-inline: ${$space.inline.md};
  padding-block: ${$primitives.units['0.5x']};
  width: 100%;

  hr {
    background: currentColor;
    border: none;
    height: 1px;
    margin: 0;
    width: 100%;
  }
`

export {
  StyledMenu,
  StyledMenuItem,
  MIContent,
  MILine,
  MIIcon,
  MITrailing,
  MIMainArea,
  MITitle,
  MIText,
  MIDivider,
}
