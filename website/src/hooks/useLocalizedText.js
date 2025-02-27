import { useTranslation } from 'react-i18next'

/**
 * Custom hook for handling localized text
 * @returns {Object} An object containing the getLocalizedText function
 * @property {Function} getLocalizedText - Function to get localized text
 */
const useLocalizedText = () => {
  const { i18n } = useTranslation()

  /**
   * Get localized text based on current language
   * @param {string|Object} textObj - Text object or string to localize
   * @returns {string} Localized text
   */
  const getLocalizedText = (textObj) => {
    if (!textObj) return ''
    if (typeof textObj === 'string') return textObj
    if (typeof textObj !== 'object') return String(textObj)
    return textObj[i18n.language] || textObj.en || textObj.zh || ''
  }

  return { getLocalizedText }
}

export default useLocalizedText
