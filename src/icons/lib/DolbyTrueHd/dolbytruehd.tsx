import type { PropsIcon } from '@/icons/types'
import IconBase from '@/icons/lib/IconBase'
import weights from '@/icons/lib/DolbyTrueHd/defs-dolbytruehd'

function DolbyTrueHd(props: PropsIcon) {
  return <IconBase weights={weights} {...props} />
}

export default DolbyTrueHd
