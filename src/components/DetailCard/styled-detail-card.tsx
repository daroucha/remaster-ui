import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const shadow =
  '-6px 25px 7px 0px rgba(0, 0, 0, 0.00), -4px 16px 7px 0px rgba(0, 0, 0, 0.00), -2px 9px 6px 0px rgba(0, 0, 0, 0.01), -1px 4px 4px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.03)'

const StyledDetailCard = styled.div<{ $adjust: boolean }>`
  align-items: ${(props) =>
    props.$adjust ? 'flex-start' : 'center'};
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.sm};
  box-shadow:
    0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light},
    ${shadow};
  box-sizing: border-box;
  color: ${$color.text.title.secondary.light};
  display: inline-flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  justify-content: space-between;
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.sm};
`

const DCContent = styled.div<{ $adjust: boolean }>`
  align-items: ${(props) =>
    props.$adjust ? 'flex-start' : 'center'};
  color: inherit;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  gap: ${$space.gap.md};
  justify-content: flex-start;
`

const DCIcon = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.xs};
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const DCTextArea = styled(SansSerif)`
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.md};
`

const DCTitle = styled.h4`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.md};
  margin: 0;
`

const DCText = styled.span`
  color: ${$color.text.plain.tertiary.light};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
`

export {
  StyledDetailCard,
  DCContent,
  DCIcon,
  DCTextArea,
  DCTitle,
  DCText,
}
