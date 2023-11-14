export type AuthResponse = {
  newAccessToken: string;
  newRefreshToken: string;
  accessExpiresIn: string;
  refreshExpiresIn: string;
};
