import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  color: ${$color.text.title.primary.light};
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.md};
  justify-content: center;

  hr {
    background: ${$color.border.default.secondary.light};
    border: none;
    height: 1px;
    margin: 0;
    width: 100%;
  }
`

const STitleArea = styled(SansSerif)`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const STitle = styled.h2`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.md};
  margin: 0;
  user-select: none;
`

export { StyledSectionTitle, STitleArea, STitle }
