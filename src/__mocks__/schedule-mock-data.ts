import { Schedule } from '../__data__/services/api/schedule/types';

export const mockDataSchedule: Schedule = {
  '1': {
    date: '8',
    day: 'ПН',
    lessons: []
  },
  '2': {
    date: '9',
    day: 'ВТ',
    lessons: [
      {
        time: '10:45-12:15',
        name: 'Математика',
        placeActivity: 'ГМЦ',
        teacher: 'Иванов Иван Сергеевич',
        classType: 'Семинар',
        classRoom: 'K11',
        group: {
          _id: '1',
          name: 'K025-1',
          major: 'Информационные технологии и программирование',
          course: 2,
          studyForm: 'Очная',
          educationLevel: 'СПО',
          users: []
        }
      }
    ]
  },
  '3': {
    date: '10',
    day: 'СР',
    lessons: []
  },
  '4': {
    date: '11',
    day: 'ЧТ',
    lessons: []
  },
  '5': {
    date: '12',
    day: 'ПТ',
    lessons: []
  },
  '6': {
    date: '13',
    day: 'СБ',
    lessons: []
  }
};

export const mockDataLesson = {
  teacher: 'Иванов Иван Сергеевич',
  name: 'Математика',
  lessonKey: '123',
  time: '09:00-10:30',
  placeActivity: 'ГМЦ',
  classType: 'Семинар',
  classRoom: 'K11'
};
