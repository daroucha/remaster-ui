import { FilmReel, FilmStrip } from '@phosphor-icons/react'
import SegmentedControl from './segmented-control'

export default {
  title: '🧭 Navigation/SegmentedControl',
  component: SegmentedControl,
}

export const Default = {
  args: {
    disabled: false,
    defaultValue: 1,
    onChange: (value: string | number) => console.log(value),
    children: (
      <>
        <SegmentedControl.Tab
          value={1}
          text="Option 1"
          leading={<FilmReel />}
        />
        <SegmentedControl.Tab
          value={2}
          text="Option 2"
          leading={<FilmStrip />}
        />
      </>
    ),
  },
}
