import { Disc, DotsThree } from '@phosphor-icons/react'
import ButtonGroup from '../ButtonGroup'
import Table, { PropsTable } from './table'
import ActionButton from '../ActionButton'
import List from '../List'
import { Cover } from '../CoverCard'
import { Bluray, Dvd } from '@/icons'
import { createElement } from 'react'
import Dropdown from '../Dropdown'

export default {
  title: '📊 Data Presentation/Table',
  component: Table,
}

interface MediaObjectType {
  [key: string]: {
    component: any
    label: string
    cover: 'bd' | 'dvd'
  }
}

const mediaComponent: MediaObjectType = {
  Bluray: {
    component: Bluray,
    label: 'Blu-ray',
    cover: 'bd',
  },
  Dvd: {
    component: Dvd,
    label: 'DVD',
    cover: 'dvd',
  },
}

const data = [
  {
    id: 1,
    title: 'Alien',
    year: '1979',
    media: 'Bluray',
    package: 'Amaray',
    discs: '1 Disc',
    cover: {
      src: 'https://media-cache.cinematerial.com/p/500x/a3af2dqi/alien-blu-ray-movie-cover.jpg?v=1456736409',
      type: 'bd',
    },
  },
  {
    id: 2,
    title: 'Aliens',
    year: '1986',
    media: 'Dvd',
    package: 'Amaray',
    discs: '1 Disc',
    cover: {
      src: 'https://static.wikia.nocookie.net/avp/images/a/af/Aliens_%282011_Blu-ray%29.jpg',
      type: 'bd',
    },
  },
  {
    id: 3,
    title: 'Predator',
    year: '1987',
    media: 'Bluray',
    package: 'Steelbook',
    discs: '2 Discs',
    cover: {
      src: 'https://i.pinimg.com/736x/ff/f6/00/fff60080c996bfdf48470aab35f58cdf.jpg',
      type: 'bd',
    },
  },
]

export const Default = {
  args: {
    variant: 'zebra',
  },
  render: ({ variant }: PropsTable) => {
    return (
      <Table variant={variant}>
        <Table.Body>
          {data.map((row: any, key: number) => (
            <Table.Row key={key}>
              <Table.Cell>
                <List
                  title={row.title}
                  text={row.year}
                  leading={
                    <Cover
                      type={mediaComponent[row.media].cover}
                      alt={row.title}
                      src={row.cover.src}
                    />
                  }
                />
              </Table.Cell>

              <Table.Cell>
                {createElement(mediaComponent[row.media].component)}
                {mediaComponent[row.media].label}
              </Table.Cell>

              <Table.Cell>{row.package}</Table.Cell>

              <Table.Cell>
                <Disc />
                {row.discs}
              </Table.Cell>

              <Table.Cell align="end" width="auto">
                <ButtonGroup variant="primary">
                  <ActionButton size="small" text="Open" variant="tertiary" />

                  <Dropdown>
                    <Dropdown.Button leading={<DotsThree />} caret={false} />

                    <Dropdown.Menu>
                      <Dropdown.Item title="Option" />
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  },
}
