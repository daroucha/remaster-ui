import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledList = styled.li`
  align-items: center;
  color: ${$color.text.title.secondary.light};
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  gap: ${$space.gap.xl};
`

const ListMain = styled.div`
  align-items: flex-start;
  color: inherit;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  gap: ${$space.gap.md};
`

const ListIcon = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  max-height: ${$primitives.units['12x']};
  min-height: ${$size.icon.sm};
  min-width: ${$size.icon.xs};

  svg {
    height: ${$size.icon.xs};
    width: ${$size.icon.xs};
  }

  picture {
    height: ${$primitives.units['12x']};
  }
`

const ListContent = styled(SansSerif)`
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.xs};
`

const ListTitle = styled.h5`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.md};
  margin: 0;
`

const ListText = styled.span`
  color: ${$color.text.plain.tertiary.light};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
`

export {
  StyledList,
  ListMain,
  ListIcon,
  ListContent,
  ListTitle,
  ListText,
}
