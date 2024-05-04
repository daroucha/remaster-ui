interface Cover {
  alt?: string
  hover?: boolean
  size?: number
  src?: string
  type: 'bd' | 'dvd' | 'collection'
}

export type { Cover as PropsCover }
