import { translateClassType } from './translations';

export const filterLessons = (lessons, filters) => {
  return Object.keys(lessons).filter((lessonKey) => {
    const lesson = lessons[lessonKey];
    const classType = translateClassType(lesson.classType);
    return filters.length === 0 || filters.includes(classType);
  });
};
