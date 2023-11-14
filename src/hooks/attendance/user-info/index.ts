import { useAuth } from '../auth';

export const useUserInfo = (): {
  isStudent: () => boolean;
  isTeacher: () => boolean;
  isAdmin: () => boolean;
} => {
  const { decryptionUserRole } = useAuth();

  const isStudent = (): boolean => {
    return decryptionUserRole() === 'student';
  };

  const isTeacher = (): boolean => {
    return decryptionUserRole() === 'teacher';
  };

  const isAdmin = (): boolean => {
    return decryptionUserRole() === 'admin';
  };

  return { isStudent, isTeacher, isAdmin };
};
