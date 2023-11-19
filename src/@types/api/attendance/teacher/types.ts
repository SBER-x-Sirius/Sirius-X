export type GetTeachersResponse = {
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  password_hash?: string;
  password?: string;
  refreshToken: string | null;
  userId: string;
};
