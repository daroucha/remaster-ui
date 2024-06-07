import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledChip = styled.div<{ $size: string }>`
  align-items: center;
  background: ${$color.background.action.default.accent.light};
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  border-radius: ${(props) =>
    props.$size === 'medium' ? $size.radius.lg : $size.radius.sm};
  color: ${$color.text.inverted.primary.light};
  gap: ${$space.gap.md};
  padding-block: ${(props) =>
    props.$size === 'medium' ? $space.block.xs : $space.block.xxs};
  padding-inline: ${(props) =>
    props.$size === 'medium' ? $space.inline.sm : $space.inline.xs};
`

const ChipContent = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  gap: ${$space.gap.xs};
`

const ChipIcon = styled.div<{ $size: string }>`
  align-items: center;
  color: inherit;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${(props) =>
    props.$size === 'medium' ? $size.icon.xs : $size.icon.xxs};
  width: ${(props) =>
    props.$size === 'medium' ? $size.icon.xs : $size.icon.xxs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const ChipText = styled(SansSerif)<{ $size: string }>`
  color: inherit;
  font-size: ${(props) =>
    props.$size === 'medium'
      ? $size.type.fontSize.text.md
      : $size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${(props) =>
    props.$size === 'medium'
      ? $size.type.lineHeight.text.md
      : $size.type.lineHeight.text.sm};
  user-select: none;
`

const ChipClose = styled.button<{ $size: string }>`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${(props) =>
    props.$size === 'medium' ? $size.icon.xs : $size.icon.xxs};
  justify-content: center;
  padding: 0;
  width: ${(props) =>
    props.$size === 'medium' ? $size.icon.xs : $size.icon.xxs};

  svg {
    height: 100%;
    width: 100%;
  }
`

export { StyledChip, ChipContent, ChipIcon, ChipText, ChipClose }
