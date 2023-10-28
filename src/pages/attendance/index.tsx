import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import { Navigate } from 'react-router-dom';

const Attendance = () => {
  //TODO: механизм определения роли пользователя
  const [isStudent, setIsStudent] = useState<boolean>(false);

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
