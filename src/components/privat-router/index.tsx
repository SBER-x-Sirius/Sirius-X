import { getNavigationsValue } from '@ijl/cli';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/attendance/auth';
import { useUserInfo } from '../../hooks/attendance/user-info';

type PrivateRouterProps = {
  element: React.ReactNode;
};

export const PrivateRouter: React.FC<PrivateRouterProps> = ({ element }: PrivateRouterProps) => {
  const location = useLocation();
  const { isStudent, isTeacher } = useUserInfo();
  const { getStatus } = useAuth();
  const excludedPaths = ['new-meeting', 'meeting', 'users'];
  const staticPath = 'sirius-x.attendance.';

  if (isStudent() && excludedPaths.some((path) => location.pathname.includes(path))) {
    return <Navigate to={getNavigationsValue(`${staticPath}accession`)} replace />;
  }

  if (isTeacher() && location.pathname.includes(excludedPaths[2])) {
    return <Navigate to={getNavigationsValue(`${staticPath}new-meeting`)} replace />;
  }

  return getStatus() ? element : <Navigate to={getNavigationsValue(`${staticPath}auth.login`)} replace />;
};
