import { StyledAction, ActionContent } from './styled-action'

interface PropsAction {
  active: boolean
  size: 'small' | 'medium'
  text: string
  disabled: boolean
  leading: React.ReactNode
  trailing: React.ReactNode
}

function Action({
  active,
  size,
  text,
  disabled,
  leading,
  trailing,
}: PropsAction) {
  return (
    <StyledAction $state={active} $disabled={disabled}>
      <ActionContent>{text}</ActionContent>
    </StyledAction>
  )
}

export default Action
