import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetMeetingQuery } from '../../../__data__/services/api/attendance/meeting';
import Sidebar from '../../../components/sidebar';
import UserTable from '../../../components/user-table';

export const Meeting = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    setActiveLink(urlParts[urlParts.length - 1]);
  }, [location.pathname]);

  const { data: users_data } = useGetMeetingQuery(activeLink);

  return (
    <>
      <Sidebar />
      {users_data && <UserTable users={users_data.users} />}
    </>
  );
};
