import attendanceTranslationRU from './../../public/locales/attendance/ru/translation.json';
import attendanceTranslationEN from './../../public/locales/attendance/en/translation.json';
import mainTranslationRU from './../../public/locales/main/ru/translation.json';
import mainTranslationEN from './../../public/locales/main/en/translation.json';
import scheduleTranslationRU from './../../public/locales/schedule/ru/translation.json';
import scheduleTranslationEN from './../../public/locales/schedule/en/translation.json';
import statisticsTranslationRU from './../../public/locales/statistics/ru/translation.json';
import statisticsTranslationEN from './../../public/locales/statistics/en/translation.json';

const resources = {
  attendanceTranslationRU,
  attendanceTranslationEN,
  mainTranslationRU,
  mainTranslationEN,
  scheduleTranslationRU,
  scheduleTranslationEN,
  statisticsTranslationRU,
  statisticsTranslationEN
} as const;

export default resources;
