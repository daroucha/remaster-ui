import type { PropsIcon } from '@/icons/types'
import IconBase from '@/icons/lib/IconBase'
import weights from '@/icons/lib/Bluray/defs-bluray'

function Bluray(props: PropsIcon) {
  return <IconBase weights={weights} {...props} />
}

export default Bluray
