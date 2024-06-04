import BaseImage from './base-image'

export default {
  title: '🖼️ Icons and Imagens/BaseImage',
  component: BaseImage,
}

export const Default = {
  args: {
    alt: 'Image alt text',
    ratio: 'auto',
    src: 'https://wallpapercg.com/media/ts_2x/2303.webp',
  },
}

export const NoImage = {
  args: {
    alt: 'Image alt text',
    ratio: '4/3',
    src: '',
  },
}
