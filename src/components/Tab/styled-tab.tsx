import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledTab = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`

const TabsArea = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StyledTabControl = styled.label<{
  $disabled?: boolean
}>`
  background: transparent;
  color: ${$color.text.action.default.accent.light};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: inline-flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  gap: ${$space.gap.md};
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  width: auto;

  > input[type='radio'] {
    display: none;
  }
`

const TCContent = styled(SansSerif)`
  align-items: center;
  color: inherit;
  display: inline-flex;
  gap: ${$space.gap.md};
  justify-content: center;
  padding-inline: ${$space.inline.lg};
`

const TCWrapper = styled.div`
  align-items: center;
  color: inherit;
  display: inline-flex;
  gap: ${$space.gap.xs};
  justify-content: center;
`

const TCIcon = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.sm};
  justify-content: center;
  min-width: ${$size.icon.sm};

  svg {
    height: ${$size.icon.xs};
    width: ${$size.icon.xs};
  }
`

const TCText = styled.span<{
  $active: boolean
}>`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${(props) =>
    props.$active
      ? $primitives.typography.fontWeight.sans.bold
      : $primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.md};
`

const TCIndicator = styled.div<{
  $active: boolean
}>`
  background: ${(props) =>
    props.$active
      ? 'currentColor'
      : $color.border.default.secondary.light};
  display: block;
  height: ${(props) =>
    props.$active ? $size.border.md : $size.border.sm};
  width: 100%;
`

const StyledTabContent = styled.div<{
  $active: boolean
}>`
  display: ${(props) => (props.$active ? 'block' : 'none')};
  height: auto;
  min-height: 100%;
  width: 100%;
`

export {
  StyledTab,
  TabsArea,
  StyledTabControl,
  TCContent,
  TCWrapper,
  TCIcon,
  TCText,
  TCIndicator,
  StyledTabContent,
}
