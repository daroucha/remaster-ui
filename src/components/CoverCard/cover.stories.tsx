import Cover from './cover'
import CoverStack from './cover-stack'

export default {
  title: '🖼️ Icons and Imagens/Cover',
  component: Cover,
}

const size = 200

export const Default = {
  args: {
    alt: 'Aliens',
    size,
    src: 'https://static.wikia.nocookie.net/avp/images/a/af/Aliens_%282011_Blu-ray%29.jpg',
    type: 'bd',
  },
}

export const Stack = () => (
  <CoverStack>
    <Cover alt="" src="" type="bd" size={size} />
    <Cover alt="" src="" type="bd" size={size} />
    <Cover alt="" src="" type="bd" size={size} />
    <Cover alt="" src="" type="bd" size={size} />
  </CoverStack>
)
