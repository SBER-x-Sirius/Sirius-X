import { User } from '../../../components/user-table-row';

export type AttendanceMeeting = {
  groups: string[];
  title: string;
  users: User[];
};
