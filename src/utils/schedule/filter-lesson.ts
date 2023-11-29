import { translateClassType } from './translations';

export const filterLessons = (lessons, inputGroup, inputTeacher, filters) => {
  return Object.keys(lessons).filter((lessonKey) => {
    const lesson = lessons[lessonKey];
    const classType = translateClassType(lesson.classType);
    if (inputGroup) {
      return (filters.length === 0 || filters.includes(classType)) && lesson.group.name === inputGroup;
    }
    if (inputTeacher) {
      return (filters.length === 0 || filters.includes(classType)) && lesson.teacher === inputTeacher;
    }
    return filters.length === 0 || filters.includes(classType);
  });
};
