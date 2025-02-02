import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './i18n/en.json';
import zhHansTranslation from './i18n/zh-Hans.json';
import zhHantTranslation from './i18n/zh-Hant.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      'zh-Hans': {
        translation: zhHansTranslation,
      },
      'zh-Hant': {
        translation: zhHantTranslation,
      },
    },
    fallbackLng: 'zh-Hans',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true,
    },
    whitelist: ['en', 'zh-Hans', 'zh-Hant'],
    load: 'languageOnly',
    parseMissingKeyHandler: (key) => {
      if (key.startsWith('zh')) {
        if (key === 'zh-CN' || key === 'zh-SG') {
          return 'zh-Hans';
        } else if (key === 'zh-HK' || key === 'zh-TW' || key === 'zh-MO') {
          return 'zh-Hant';
        }
      }
      return key;
    },
  });

export default i18n;
