import styled from 'styled-components'

const StyledNL = styled.a<{
  $state?: boolean
  $size: string
  $disabled?: boolean
}>`
  display: block;
`

const NLContent = styled.div`
  display: block;
`

const NLIcon = styled.div`
  display: block;
`

const NLText = styled.span`
  display: block;
`

export { StyledNL, NLContent, NLIcon, NLText }
