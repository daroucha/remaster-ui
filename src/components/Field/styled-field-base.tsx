import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledFieldBase = styled.div`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: flex-start;
  appearance: none;
  border: none;
  display: inline-flex;
  flex-direction: column;
  gap: ${$space.gap.md};
`

const FieldBaseLegend = styled(SansSerif)`
  align-items: center;
  color: ${$color.text.title.secondary.light};
  display: flex;
  flex-direction: row;
  height: ${$size.icon.xs};
  padding: 0;
  width: 100%;
`

const FieldBaseLabel = styled.label`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.md};
  user-select: none;
`

const FieldBaseTipArea = styled(SansSerif)`
  color: ${$color.text.plain.tertiary.light};
  display: block;
  width: 100%;
`

const FieldBaseTip = styled.p`
  color: inherit;
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
  margin: 0;
`

export {
  StyledFieldBase,
  FieldBaseLegend,
  FieldBaseLabel,
  FieldBaseTipArea,
  FieldBaseTip,
}
