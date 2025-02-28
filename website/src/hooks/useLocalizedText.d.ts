import { TFunction } from 'i18next'

declare module './useLocalizedText' {
  interface UseLocalizedText<T = string> {
    getLocalizedText(textObj: T | Record<string, T>): string
  }

  const useLocalizedText: <T = string>() => UseLocalizedText<T>
  export default useLocalizedText
}
