export const useAuth = (): {
  initSetup: (accessToken: string, refreshToken: string) => void;
  getStatus: () => boolean;
  setStatus: (status: boolean) => void;
  decryptionUserId: () => string;
  decryptionUserRole: () => string;
  deleteTokens: () => void;
} => {
  const initSetup = (accessToken: string, refreshToken: string): void => {
    localStorage.setItem('attendanceAccessToken', accessToken);
    localStorage.setItem('attendanceRefreshToken', refreshToken);
    sessionStorage.setItem('attendanceUserAuthentication', 'true');
  };

  const getStatus = (): boolean => {
    return sessionStorage.getItem('attendanceUserAuthentication') === 'true';
  };

  const setStatus = (status: boolean): void => {
    sessionStorage.setItem('attendanceUserAuthentication', status ? 'true' : 'false');
  };

  const tokenParser = (token: string): string => {
    return token.split('.')[1];
  };

  const checkToken = (): boolean => {
    return localStorage.getItem('attendanceAccessToken') ? true : false;
  };

  const decryptionUserId = (): string => {
    return checkToken() ? JSON.parse(atob(tokenParser(localStorage.getItem('attendanceAccessToken')))).userId : '';
  };

  const decryptionUserRole = (): string => {
    return checkToken() ? JSON.parse(atob(tokenParser(localStorage.getItem('attendanceAccessToken')))).role : '';
  };

  const deleteTokens = (): void => {
    localStorage.removeItem('attendanceAccessToken');
    localStorage.removeItem('attendanceRefreshToken');
  };

  return { initSetup, getStatus, setStatus, decryptionUserId, decryptionUserRole, deleteTokens };
};
