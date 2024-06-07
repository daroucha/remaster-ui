import { $color, $size } from '@/tokens'
import styled from '@emotion/styled'

const shadow =
  '0px 51px 14px 0px rgba(0, 0, 0, 0.00), 0px 33px 13px 0px rgba(0, 0, 0, 0.01), 0px 18px 11px 0px rgba(0, 0, 0, 0.03), 0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)'

const StyledModal = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999;
`

const Window = styled.div`
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.md};
  box-shadow: ${shadow};
  box-sizing: border-box;
  display: block;
  height: auto;
  max-height: 80vh;
  max-width: 80vw;
  min-height: 140px;
  min-width: 300px;
  position: absolute;
  width: auto;
`

const Overlay = styled.div`
  background: ${$color.background.elevation.overlay.light};
  display: block;
  height: 100%;
  width: 100%;
`

export { StyledModal, Window, Overlay }
