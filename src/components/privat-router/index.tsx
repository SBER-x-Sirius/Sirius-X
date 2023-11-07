import { getNavigationsValue } from '@ijl/cli';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/attendance/auth';

type PrivateRouterProps = {
  element: React.ReactNode;
};

export const PrivateRouter: React.FC<PrivateRouterProps> = ({ element }: PrivateRouterProps) => {
  const { getStatus } = useAuth();
  return getStatus() ? element : <Navigate to={getNavigationsValue('sirius-x.attendance.auth.login')} replace />;
};
