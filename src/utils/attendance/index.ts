import { AttendanceUser } from '../../@types/attendance/user';

export const buildFullName = (user: AttendanceUser): string => {
  return user.lastname + ' ' + user.firstname + ' ' + (user.middlename ? user.middlename : '');
};

export const buildNameWithInitials = (user: AttendanceUser): string => {
  return user.lastname + ' ' + user.firstname[0] + '.' + (user.middlename ? user.middlename[0] + '.' : '');
};
