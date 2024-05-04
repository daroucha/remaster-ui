import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledCollectionCard = styled.div<{ $clickable: boolean }>`
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.lg};
  box-sizing: border-box;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  display: inline-block;
  overflow: hidden;
  position: relative;

  &::before {
    background: none;
    border-radius: inherit;
    box-shadow: inset 0 0 0 ${$size.border.sm}
      ${$color.border.default.secondary.light};
    content: '';
    display: block;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
  }
`

const CCCoverArea = styled.div`
  align-items: center;
  aspect-ratio: 3/2;
  background: ${$color.background.surface.secondary.light};
  box-sizing: border-box;
  color: ${$color.icon.inverted.primary.light};
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
  padding-block: ${$space.block.xl};
  width: 100%;
`

const CCContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.xs};
  padding-bottom: ${$space.block.lg};
  padding-inline: ${$space.inline.md};
  padding-top: ${$space.block.md};
  user-select: none;
  width: 100%;
`

const CCTitle = styled(SansSerif)`
  color: ${$color.text.title.secondary.light};
  font-size: ${$size.type.fontSize.text.lg};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.lg};
`

const CCTextArea = styled.div`
  align-items: center;
  color: ${$color.text.plain.tertiary.light};
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.md};
`

const CCText = styled(SansSerif)`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.md};
`

export {
  StyledCollectionCard,
  CCCoverArea,
  CCContent,
  CCTitle,
  CCTextArea,
  CCText,
}
