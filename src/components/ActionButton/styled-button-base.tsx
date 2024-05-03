import SansSerif from '@/fonts/sansSerif'
import { $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledButtonBase = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  appearance: none;
  border-radius: ${$size.radius.md};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.md};
  position: relative;
`

const ButtonIconBase = styled.div<{ $loading: boolean }>`
  aspect-ratio: 1/1;
  color: inherit;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.xs};
  opacity: ${(props) => (props.$loading ? '0%' : '100%')};
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const ButtonTextBase = styled(SansSerif)<{ $size: string; $loading: boolean }>`
  color: inherit;
  display: block;
  font-family: ${$primitives.typography.fontFamily.sans};
  font-size: ${(props) =>
    props.$size === 'medium'
      ? $size.type.fontSize.text.md
      : $size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${(props) =>
    props.$size === 'medium'
      ? $size.type.lineHeight.text.md
      : $size.type.lineHeight.text.sm};
  opacity: ${(props) => (props.$loading ? '0%' : '100%')};
  user-select: none;
`

const ButtonLoadingBase = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0px;
  position: absolute;
  width: 100%;
`

export { StyledButtonBase, ButtonIconBase, ButtonTextBase, ButtonLoadingBase }
