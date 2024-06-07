import type { PropsIcon } from '@/icons/types'
import IconBase from '@/icons/lib/IconBase'
import weights from '@/icons/lib/Dvd/defs-dvd'

function Dvd(props: PropsIcon) {
  return <IconBase weights={weights} {...props} />
}

export default Dvd
