import { AttendanceUser } from '../../@types/attendance/user';

export const buildFullName = (user: AttendanceUser): string => {
  return user.middle_name + ' ' + user.first_name + ' ' + user.last_name;
};

export const buildNameWithInitials = (user: AttendanceUser): string => {
  return user.middle_name + ' ' + user.first_name[0] + '.' + user.last_name[0] + '.';
};
