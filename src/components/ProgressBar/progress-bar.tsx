import prefix from '@/utils/prefix'
import { PBar, StyledProgressBar } from './styled-progress-bar'

interface PropsProgressBar {
  progress: number
  type: 'default' | 'bleed'
}

function ProgressBar({
  progress,
  type = 'default',
}: PropsProgressBar) {
  return (
    <StyledProgressBar
      $type={type}
      className={`${prefix}progress-bar`}
    >
      <PBar $type={type} style={{ width: progress + '%' }} />
    </StyledProgressBar>
  )
}

export type { PropsProgressBar }
export default ProgressBar
