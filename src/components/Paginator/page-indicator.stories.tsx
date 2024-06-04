import Paginator, { PropsPaginator } from './paginator'

export default {
  title: '🧭 Navigation/Paginator',
  component: Paginator,
  render: ({ ...args }: PropsPaginator) => {
    const pages = [1, 2, 3, 4, 5]

    return (
      <Paginator {...args}>
        {pages.map((page, key) => (
          <Paginator.Indicator key={key} page={page} />
        ))}
      </Paginator>
    )
  },
}

export const Default = {
  args: {
    page: 1,
  },
}
