export type Lesson = {
  time: string;
  name: string;
  classType: string;
  placeActivity: string;
  teacher: string;
  classRoom: string;
  group: Group;
};

export type WeekData = {
  month: string;
  year: string;
  week: string;
};

export type DayData = {
  date: string;
  day: string;
  lessons: Lesson[];
};

export type Schedule = {
  [key: string]: DayData | WeekData;
};

export type Group = {
  _id: string;
  name: string;
  course: number;
  educationLevel: string;
  major: string;
  studyForm: string;
  users: User[];
};

export type User = {
  _id: string;
  userName: string;
  password: string;
  name: string;
  lastName: string;
  surName: string;
  role: string;
};
