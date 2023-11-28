const classTypeTranslations = {
  lectures: 'Лекция',
  seminars: 'Семинар',
  practicals: 'Практ.занятие',
  labs: 'Лаб.занятие',
  exams: 'Экзамен',
  other: 'Прочее'
};

export const translateClassType = (classType: string) => classTypeTranslations[classType] || classType;
