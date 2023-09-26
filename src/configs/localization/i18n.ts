import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import attendanceTranslationRU from './../../../public/locales/attendance/ru/translation.json';
import attendanceTranslationEN from './../../../public/locales/attendance/en/translation.json';
import mainTranslationRU from './../../../public/locales/main/ru/translation.json';
import mainTranslationEN from './../../../public/locales/main/en/translation.json';
import scheduleTranslationRU from './../../../public/locales/schedule/ru/translation.json';
import scheduleTranslationEN from './../../../public/locales/schedule/en/translation.json';
import statisticsTranslationRU from './../../../public/locales/statistics/ru/translation.json';
import statisticsTranslationEN from './../../../public/locales/statistics/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      attendance: {
        ru: attendanceTranslationRU,
        en: attendanceTranslationEN
      },
      main: {
        ru: mainTranslationRU,
        en: mainTranslationEN
      },
      schedule: {
        ru: scheduleTranslationRU,
        en: scheduleTranslationEN
      },
      statistics: {
        ru: statisticsTranslationRU,
        en: statisticsTranslationEN
      }
    },
    debug: true,
    lng: 'ru',
    fallbackLng: 'ru',

    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
