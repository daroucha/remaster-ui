import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledInputBase = styled(SansSerif)<{ $disabled?: boolean }>`
  align-items: center;
  box-sizing: border-box;
  color: ${$color.text.plain.secondary.light};
  display: inline-flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  position: relative;
  width: 100%;
  z-index: 2;
`

const InputBaseIcon = styled.div`
  align-self: flex-start;
  color: inherit;
  display: block;
  height: ${$size.icon.xs};
  margin-block: ${$space.block.xs};
  margin-inline: ${$space.inline.sm};
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const InputBaseLeading = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  padding: ${$space.inline.xxs};
  position: absolute;
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
  box-shadow: ${`inset 0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}`};
  box-sizing: border-box;
  color: inherit;
  font-family: ${$primitives.typography.fontFamily.sans};
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  height: ${$primitives.units['9x']};
  outline: none;
  padding-left: ${(props) =>
    props.$leading ? $primitives.units['9x'] : $space.inline.md};
  padding-block: ${$space.block.sm};
  padding-right: ${(props) =>
    props.$trailing ? $primitives.units['10x'] : $space.inline.md};
  width: 100%;

  &::placeholder:not(:focus) {
    color: inherit;
  }

  &:focus {
    box-shadow: ${`inset 0 0 0 ${$size.border.md} ${$color.border.focus.primary.light}`};
    color: ${$color.text.plain.primary.light};
  }

  &[type='number'] {
    text-align: center;
  }

  &.textarea_type {
    height: auto;
    min-height: ${$primitives.units['9x']};
  }
`

export {
  StyledInputBase,
  InputBaseIcon,
  InputBaseLeading,
  InputBaseTrailing,
  InputBaseElement,
}
