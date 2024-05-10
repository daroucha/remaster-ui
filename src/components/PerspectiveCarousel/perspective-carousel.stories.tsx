import PerspectiveCarousel from './perspective-carousel'

export default {
  title: '🖼️ Icons and Imagens/PerspectiveCarousel',
  component: PerspectiveCarousel,
}

export const Default = {
  args: {
    data: [
      {
        src: 'https://static.wikia.nocookie.net/avp/images/a/af/Aliens_%282011_Blu-ray%29.jpg',
        coverType: 'bd',
        title: 'Title 1',
        text: 'Text goes here',
      },
      { src: '', coverType: 'bd', title: 'Title 2', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 3', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 4', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 5', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 6', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 7', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 8', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 9', text: 'Text goes here' },
      { src: '', coverType: 'bd', title: 'Title 10', text: 'Text goes here' },
    ],
    startIndex: 3,
  },
}
