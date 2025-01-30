import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './i18n/en.json';
import zhTranslation from './i18n/zh.json';

i18n
  .use(LanguageDetector) // 使用语言检测器
  .use(initReactI18next) // 将 i18n 实例传递给 react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // 英文翻译
      },
      zh: {
        translation: zhTranslation, // 中文翻译
      },
    },
    fallbackLng: 'zh', // 默认语言为中文
    debug: true, // 开发模式下启用调试
    interpolation: {
      escapeValue: false, // React 已经对值进行了转义
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'], // 语言检测顺序
      caches: ['cookie', 'localStorage'], // 缓存语言选择
    },
  });

export default i18n;