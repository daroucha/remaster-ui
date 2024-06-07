import type { PropsIcon } from '@/icons/types'
import IconBase from '@/icons/lib/IconBase'
import weights from '@/icons/lib/DtsMA/defs-dtsma'

function DtsMA(props: PropsIcon) {
  return <IconBase weights={weights} {...props} />
}

export default DtsMA
