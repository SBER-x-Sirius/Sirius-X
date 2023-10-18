import React from 'react';
import Accession from './accession';
import Sidebar from './sidebar';
import menu from './sidebar/data';
import { AttendanceWrapper } from './style';

const Attendance = () => {
  return (
    <>
      <AttendanceWrapper>
        <Sidebar menu={menu} />
        <Accession />
      </AttendanceWrapper>
    </>
  );
};

export default Attendance;
