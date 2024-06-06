import type { PropsIcon } from '@/icons/types'
import IconBase from '../IconBase'
import weights from './defs-collection'

function Collection(props: PropsIcon) {
  return <IconBase weights={weights} {...props} />
}

export default Collection
