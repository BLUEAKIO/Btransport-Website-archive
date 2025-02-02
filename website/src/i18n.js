import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './i18n/en.json';
import zhCNTranslation from './i18n/zh-CN.json';
import zhHKTranslation from './i18n/zh-HK.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'zh-CN': {
        translation: zhCNTranslation,
      },
      'zh-HK': {
        translation: zhHKTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    fallbackLng: 'zh-CN',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;
