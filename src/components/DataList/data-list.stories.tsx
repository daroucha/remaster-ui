import { Bluray } from '@/icons'
import DataList from './data-list'
import Checkbox from '../Checkbox'
import { Cover } from '../CoverCard'
import { ArrowRight } from '@phosphor-icons/react'

export default {
  title: '📊 Data Presentation/DataList',
  component: DataList,
}

export const Default = {
  args: {
    leading: <Bluray />,
    title: 'List title',
    text: 'List text goes here',
    children: <Checkbox />,
  },
}

export const CoverList = {
  args: {
    leading: <Cover type="bd" alt="" src="" />,
    title: 'List title',
    text: 'List text goes here',
    children: <ArrowRight />,
  },
}
