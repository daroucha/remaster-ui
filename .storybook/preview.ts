import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#EfEfEf' },
        { name: 'dark', value: '#555' },
        {
          name: 'rich',
          value:
            "url('https://www.pixelstalk.net/wp-content/uploads/images6/4K-NYC-Wallpaper-HD.jpg')",
        },
      ],
      grid: {
        cellSize: 16,
        offsetX: 16,
        offsetY: 16,
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
