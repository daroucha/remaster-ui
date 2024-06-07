import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  align-items: center;
  background: ${$color.background.surface.primary.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media only screen and (${$size.query.mobile}) {
    padding-block: ${$space.block.md};
    padding-inline: ${$space.inline.lg};
  }

  @media only screen and (${$size.query.tablet}) {
    padding-block: ${$space.block.lg};
    padding-inline: ${$space.inline.xl};
  }

  @media only screen and (${$size.query.desktop}) {
    padding-block: ${$space.block.xl};
    padding-inline: ${$space.inline.xl};
  }
`

const HeaderLogo = styled(SansSerif)`
  color: ${$color.text.title.primary.light};
  display: block;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.medium};
  height: auto;
  line-height: ${$size.type.lineHeight.text.md};
  user-select: none;
  width: auto;
`

const HeaderContent = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.xs};
  justify-content: flex-end;
`

const HeaderSidebar = styled.div`
  align-items: stretch;
  background: ${$color.background.surface.primary.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.sm};
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(50%);
  gap: ${$space.gap.xs};
  min-height: 100%;
  width: 40vw;

  a {
    width: -webkit-fill-available;
  }
`

export { StyledHeader, HeaderLogo, HeaderContent, HeaderSidebar }
