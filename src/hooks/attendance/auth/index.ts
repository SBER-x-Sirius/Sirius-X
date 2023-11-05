export const useAuth = (): {
  initSetup: (accessToken: string, refreshToken: string) => void;
  getStatus: () => boolean;
  setStatus: (status: boolean) => void;
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

  return { initSetup, getStatus, setStatus };
};
