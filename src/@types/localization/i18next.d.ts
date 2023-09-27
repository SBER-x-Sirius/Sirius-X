import attendanceTranslation from '../../locales/attendance/ru/translation.json';
import mainTranslation from '../../locales/main/ru/translation.json';
import scheduleTranslation from '../../locales/schedule/ru/translation.json';
import statisticsTranslation from '../../locales/statistics/ru/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      attendance: {
        attendanceTranslation: typeof attendanceTranslation;
      };
      main: typeof mainTranslation;
      schedule: {
        scheduleTranslation: typeof scheduleTranslation;
      };
      statistics: {
        statisticsTranslation: typeof statisticsTranslation;
      };
    };
  }
}
