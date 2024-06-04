import { StyledButtonGroup, BGItem } from './styled-button-group'

interface PropsButtonGroup {
  variant: 'primary' | 'secondary'
  children: React.ReactNode[]
}

function ButtonGroup({ children, variant }: PropsButtonGroup) {
  return (
    <StyledButtonGroup $variant={variant}>
      {children.map((node, key) => (
        <BGItem key={key}>{node}</BGItem>
      ))}
    </StyledButtonGroup>
  )
}

export type { PropsButtonGroup }
export default ButtonGroup
