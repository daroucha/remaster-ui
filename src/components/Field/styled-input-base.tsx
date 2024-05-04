import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledInputBase = styled(SansSerif)`
  align-items: center;
  box-sizing: border-box;
  color: ${$color.text.plain.secondary.light};
  display: inline-flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  position: relative;
`

const InputBaseIcon = styled.div`
  color: inherit;
  display: block;
  height: ${$size.icon.xs};
  left: 0;
  margin-left: ${$space.inline.md};
  position: absolute;
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const InputBaseTrailing = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  height: 100%;
  justify-content: flex-end;
  padding: ${$space.inline.xxs};
  position: absolute;
  right: 0;
`

const InputBaseElement = styled.input<{
  $leading: boolean
  $trailing: boolean
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.sm};
  border: none;
  box-shadow: inset 0 0 0 ${$size.border.sm}
    ${$color.border.default.secondary.light};
  box-sizing: border-box;
  color: inherit;
  font-family: ${$primitives.typography.fontFamily.sans};
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  height: ${$primitives.units['9x']};
  outline: none;
  padding-left: ${(props) =>
    props.$leading ? $primitives.units['9x'] : $space.inline.md};
  padding-right: ${(props) =>
    props.$trailing ? $primitives.units['10x'] : $space.inline.md};
  width: 100%;

  &:focus {
    box-shadow: inset 0 0 0 ${$size.border.md}
      ${$color.border.focus.primary.light};
  }
`

export { StyledInputBase, InputBaseIcon, InputBaseTrailing, InputBaseElement }
