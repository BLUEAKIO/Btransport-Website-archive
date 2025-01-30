import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './i18n/en.json'; // 导入英文翻译文件
import zhTranslation from './i18n/zh.json'; // 导入中文翻译文件

i18n
  .use(LanguageDetector) // 自动检测浏览器语言
  .use(initReactI18next) // 初始化 react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // 英文翻译
      },
      zh: {
        translation: zhTranslation, // 中文翻译
      },
    },
    fallbackLng: 'en', // 默认语言
    debug: true, // 开发模式下启用调试
    interpolation: {
      escapeValue: false, // React 已经处理了转义
    },
  });

export default i18n;