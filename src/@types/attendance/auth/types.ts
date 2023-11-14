export type AttendanceJWT = {
  exp: number;
  expiresIn: string;
  iat: number;
  role: 'student' | 'teacher' | 'admin';
  userId: string;
};
