export type Schedule = {
  _id: string;
  date: string;
  time: string;
  disciplineName: string;
  classType: string;
  users: User[];
  group: Group;
  locationAddress: string;
  classRoom: string;
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
