import type { PropsIcon } from '@/icons/types'
import IconBase from '@/icons/lib/IconBase'
import weights from '@/icons/lib/Collection/defs-collection'

function Collection(props: PropsIcon) {
  return <IconBase weights={weights} {...props} />
}

export default Collection
