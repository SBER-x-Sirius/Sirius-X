import React from 'react';
import Accession from './accession';
import { AttendanceWrapper } from './style';
import Sidebar from '../../components/sidebar';

const Attendance = () => {
  return (
    <>
      <AttendanceWrapper>
        <Sidebar />
        <Accession />
      </AttendanceWrapper>
    </>
  );
};

export default Attendance;
