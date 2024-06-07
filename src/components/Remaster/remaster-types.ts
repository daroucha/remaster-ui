export type ThemeMode = 'light' | 'dark'

export default interface RemasterType {
  theme: ThemeMode
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>
}
