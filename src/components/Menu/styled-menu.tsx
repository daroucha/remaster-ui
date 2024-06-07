import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space, $style } from '@/tokens'
import styled from '@emotion/styled'

const StyledMenu = styled.div`
  background-color: ${$color.background.elevation.tertiary.light};
  border-radius: ${$size.radius.md};
  box-shadow:
    0 0 0 ${$size.border.sm} ${$color.border.default.primary.light},
    ${$style.shadow.md};
  box-sizing: border-box;
  color: ${$color.text.plain.secondary.light};
  display: inline-block;
  padding-block: ${$space.block.xxs};
  position: relative;
  user-select: none;

  &::after,
  &::before {
    border-radius: ${$size.radius.md};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    background-image: url(${$style.noise});
    opacity: 10%;
    z-index: 2;
  }

  &::after {
    background-color: ${$color.background.elevation.secondary.light};
    backdrop-filter: blur(25px);
    z-index: 1;
  }
`

const StyledMenuItem = styled.div<{ $disabled?: boolean }>`
  box-sizing: border-box;
  color: inherit;
  display: block;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 3;
`

const MIContent = styled(SansSerif)<{
  $active: boolean
  $disabled?: boolean
}>`
  align-items: center;
  background: ${(props) =>
    props.$active
      ? $color.background.action.hover.neutral.light
      : 'transparent'};
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
        : $color.background.action.hover.accent.light};
    color: ${(props) =>
      props.$disabled
        ? 'inherit'
        : $color.text.inverted.primary.light};
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

const MIChildren = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(
    calc(100% - ${$space.inline.xxs}),
    calc(${$space.block.xxs} * -1)
  );
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
  MIChildren,
}
