import React from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { useUserInfo } from '../../hooks/attendance/user-info';

const Attendance = () => {
  const { isStudent } = useUserInfo();

  return (
    <>
      <Sidebar />
      {isStudent ? (
        <Navigate to={location.pathname.concat('/accession')} replace />
      ) : (
        <Navigate to={location.pathname.concat('/new-meeting')} replace />
      )}
    </>
  );
};

export default Attendance;
