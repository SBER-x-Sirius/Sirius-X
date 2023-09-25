import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      attendance: {
        ru: require('./../../locales/attendance/ru/translation.json'),
        en: require('./../../locales/attendance/en/translation.json'),
      },
      main: {
        ru: require('./../../locales/main/ru/translation.json'),
        en: require('./../../locales/main/en/translation.json'),
      },
      schedule: {
        ru: require('./../../locales/schedule/ru/translation.json'),
        en: require('./../../locales/schedule/en/translation.json'),
      },
      statistics: {
        ru: require('./../../locales/attendance/ru/translation.json'),
        en: require('./../../locales/attendance/en/translation.json'),
      },
    },
    debug: true,
    lng: 'ru',
    fallbackLng: 'ru',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
