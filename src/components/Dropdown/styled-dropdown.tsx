import { $space } from '@/tokens'
import styled from 'styled-components'

const StyledDropdown = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${$space.gap.xs};
  position: relative;
`

const StyledDropdownMenu = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
  transform: translateY(100%);
`

export { StyledDropdown, StyledDropdownMenu }
