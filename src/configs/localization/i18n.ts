import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import attendanceTranslationEN from '../../locales/attendance/en/translation.json';
import attendanceTranslationRU from '../../locales/attendance/ru/translation.json';
import mainTranslationEN from '../../locales/main/en/translation.json';
import mainTranslationRU from '../../locales/main/ru/translation.json';
import scheduleTranslationEN from '../../locales/schedule/en/translation.json';
import scheduleTranslationRU from '../../locales/schedule/ru/translation.json';
import statisticsTranslationEN from '../../locales/statistics/en/translation.json';
import statisticsTranslationRU from '../../locales/statistics/ru/translation.json';

const resources = {
  en: {
    attendance: {
      attendanceTranslation: attendanceTranslationEN
    },
    main: mainTranslationEN,
    schedule: {
      scheduleTranslation: scheduleTranslationEN
    },
    statistics: {
      statisticsTranslation: statisticsTranslationEN
    }
  },
  ru: {
    attendance: {
      attendanceTranslation: attendanceTranslationRU
    },
    main: mainTranslationRU,
    schedule: {
      scheduleTranslation: scheduleTranslationRU
    },
    statistics: {
      statisticsTranslation: statisticsTranslationRU
    }
  }
};

export default i18next.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  fallbackLng: 'ru',
  resources
});
