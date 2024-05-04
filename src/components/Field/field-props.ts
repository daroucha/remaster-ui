interface Field {
  disabled?: boolean
  label?: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
  ) => void
  text?: string
  tip?: string
  value?: string | string[]
}

export type { Field as PropsField }
