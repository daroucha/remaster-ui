import { $space } from '@/tokens'
import ImageRadio, { PropsImageRadio } from './image-radio'

export default {
  title: '🖼️ Icons and Imagens/ImageRadio',
  component: ImageRadio,
  render: ({ alt, disabled, name, onChange, src, value }: PropsImageRadio) => {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'row', gap: $space.gap.md }}
      >
        <ImageRadio
          alt={alt}
          disabled={disabled}
          name={name}
          onChange={onChange}
          src={src}
          value={value}
        />

        <ImageRadio
          alt="Image 2"
          disabled={disabled}
          name={name}
          onChange={onChange}
          src="https://deadtalknews.com/wp-content/uploads/alien2-930x620.png"
          value="img2"
        />
      </div>
    )
  },
}

export const Default = {
  args: {
    disabled: false,
    name: 'imgradio',
    alt: 'Image 1',
    src: 'https://m.media-amazon.com/images/M/MV5BZTc2NWU1NDMtNmVlYS00MTUyLTlkYjctZDcxNTgwMjRiYTNjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg',
    value: 'img1',
    onChange: (event, data) => console.log(event, data),
  } as PropsImageRadio,
}
