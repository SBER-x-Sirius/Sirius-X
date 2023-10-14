import React from 'react';
import SessionPage from './accession';
import Sidebar from './sidebar';
import menu from './sidebar/data';
import { AttendanceWrapper } from './style';

const Attendance = () => {
  return (
    <>
      <AttendanceWrapper>
        <Sidebar menu={menu} />
        <SessionPage />
      </AttendanceWrapper>
    </>
  );
};

export default Attendance;
