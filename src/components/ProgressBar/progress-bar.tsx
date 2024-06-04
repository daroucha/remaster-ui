import { PBar, StyledProgressBar } from './styled-progress-bar'

interface PropsProgressBar {
  progress: number
  type: 'default' | 'bleed'
}

function ProgressBar({ progress, type = 'default' }: PropsProgressBar) {
  return (
    <StyledProgressBar $type={type}>
      <PBar $type={type} style={{ width: progress + '%' }} />
    </StyledProgressBar>
  )
}

export type { PropsProgressBar }
export default ProgressBar
