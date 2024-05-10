interface Cover {
  alt: string
  className?: string
  disabled?: boolean
  hover?: boolean
  size?: number
  src: string
  style?: React.CSSProperties
  type: 'bd' | 'dvd' | 'collection'
  innerRef?: React.RefObject<HTMLElement> | undefined
}

export type { Cover as PropsCover }
