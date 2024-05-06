import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledDashedButton = styled.button<{ disabled?: boolean }>`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  appearance: none;
  border-color: ${$color.border.default.primary.light};
  border-radius: ${$size.radius.md};
  border-style: dashed;
  border-width: ${$size.border.md};
  box-sizing: border-box;
  color: ${$color.text.action.default.neutral.light};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  gap: ${$space.gap.md};
  opacity: ${(props) => (props.disabled ? '60%' : '100%')};
  padding-block: ${$space.block.md};
  padding-inline: ${$space.inline.md};

  &:hover {
    background: ${(props) =>
      props.disabled
        ? 'transparent'
        : $color.background.action.hover.neutral.light};
  }
`

const DBIcon = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  height: ${$size.icon.xs};
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const DBText = styled(SansSerif)`
  color: inherit;
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.medium};
  line-height: ${$size.type.lineHeight.text.sm};
  user-select: none;
`

export { StyledDashedButton, DBIcon, DBText }
