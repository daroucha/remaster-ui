import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const ActionsVariants = (variant: string | undefined) => {
  switch (variant) {
    case 'stretch':
      return 'stretch'
      break

    case 'end':
      return 'flex-end'
      break

    default:
      return 'space-between'
      break
  }
}

const DialogActions = styled.div<{
  $variant: string
  $divider?: boolean
}>`
  align-items: center;
  border-top: ${(props) =>
    props.$divider
      ? `${$size.border.sm} solid ${$color.border.default.secondary.light}`
      : 'none'};
  box-sizing: border-box;
  clear: both;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => ActionsVariants(props.$variant)};
  gap: ${$space.gap.xl};
  padding: ${$space.block.lg};
  width: 100%;

  button {
    width: ${(props) =>
      props.$variant === 'stretch' ? '100%' : 'auto'};
  }
`

const DialogContent = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  color: ${$color.text.title.secondary.light};
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.xl};
  justify-content: flex-start;
  padding-block: ${$space.block.lg};
  padding-inline: ${$space.inline.lg};
  user-select: none;
  width: 100%;
`

const DialogIcon = styled.div`
  color: inherit;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.md};
  width: ${$size.icon.md};

  svg {
    height: 100%;
    width: 100%;
  }
`

const DialogTextArea = styled(SansSerif)`
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.md};
  width: -webkit-fill-available;
`

const DialogTitle = styled.h3`
  color: inherit;
  font-size: ${$size.type.fontSize.text.lg};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.lg};
  margin: 0;
`

const DialogText = styled.span`
  color: ${$color.text.plain.secondary.light};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
`

export {
  DialogActions,
  DialogContent,
  DialogIcon,
  DialogTextArea,
  DialogTitle,
  DialogText,
}
