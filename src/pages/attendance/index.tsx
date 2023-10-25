import React from 'react';
import { AttendanceWrapper } from './style';
import Sidebar from '../../components/sidebar';

const Attendance = () => {
  return (
    <>
      <AttendanceWrapper>
        <Sidebar />
        <h1>Attendance Main Page</h1>
      </AttendanceWrapper>
    </>
  );
};

export default Attendance;
